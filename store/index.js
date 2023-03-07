import { Store } from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: [],
      token: null,
      requests: [],
    },
    mutations: {
      addPost(state, payload) {
        state.loadedPosts.push(payload);
      },
      setPosts(state, payload) {
        state.loadedPosts = payload;
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      },
      addRequest(state, payload) {
        state.requests.push(payload);
      },
      setRequests(state, payload) {
        state.requests = payload;
      }
    },
    actions: {
      // nuxtServerInit(vuexContext, context) {
      //   return axios
      //     .get('https://auroras-cleaning-default-rtdb.firebaseio.com/blogs.json')
      //     .then((res) => {
      //       const postsArray = []
      //       for (const key in res.data) {
      //         postsArray.push({ ...res.data[key], id: key })
      //       }
      //       vuexContext.commit('setPosts', postsArray)
      //     })
      //     .catch((e) => context.error(e))
      // },
      async loadPosts(context) {

      },
      async loadRequests(context) {
        const response = await fetch(`https://auroras-cleaning-default-rtdb.firebaseio.com/requests.json`);  // fetch(`https://vue-practice-88f8e-default-rtdb.firebaseio.com/requests/requests.json`)
  
        const responseData = await response.json();
  
        if (!response.ok) {
          const error = new Error(responseData.message || 'Failed to fetch data.');
          throw error;
        }
  
        const requests = [];
        for (const key in responseData) {
          const requestData = {
            id: key,
            firstName: responseData[key].userFirstName,
            lastName: responseData[key].userLastName,
            userEmail: responseData[key].userEmail,
            message: responseData[key].message,
            sqFeet: responseData[key].sqFeet,
          };
          requests.push(requestData);
          console.log(requestData);
        }
        context.commit('setRequests', requests);
      },
      async contactMe(context, payload) {
        const requestData = {
          userEmail: payload.email,
          userFirstName: payload.firstName,
          userLastName: payload.lastName,
          sqFeet: payload.sqFeet, 
          message: payload.message,
        };
        const response = await fetch(`https://auroras-cleaning-default-rtdb.firebaseio.com/requests.json`, { // fetch(`https://vue-practice-88f8e-default-rtdb.firebaseio.com/requests/requests.json`
              method: 'POST',
              body: JSON.stringify(requestData)
            })
  
            const responseData = await response.json();
  
            if (!response.ok) {
              const error = new Error(responseData.message || 'failed to send request.');
              throw error;
            }
  
            requestData.id = responseData.name;
            requestData.coachId = payload.coachId;
  
            context.commit('addRequest', requestData);
      },
      async addPost(context, payload) {
        const requestData = {
          title: payload.title,
          dateAdded: payload.dateAdded,
          postBody: payload.postBody,
        };
        const response = await fetch('https://auroras-cleaning-default-rtdb.firebaseio.com/posts.json', {
          method: 'POST',
          body: JSON.stringify(requestData)
        })

        const responseData = await response.json();

        if(!response.ok) {
          const error = new Error(responseData.message || 'failed to add new post.');
          throw error;
        }

        requestData.id = responseData.name;

        context.commit('addPost', requestData);
      },
      editPost(vuexContext, editedPost) {
        return axios
        .put(
          'https://auroras-cleaning-default-rtdb.firebaseio.com/posts/' +
          editedPost.id +
          '.json?auth=' +
          vuexContext.state.token,
          editedPost
        )
        .then((res) => {
          vuexContext.commit('editPost', editedPost)
        })
        .catch((e) => {
          console.log(e);
        })
      },
      setHomes(vuexContext, homes) {
        vuexContext.commit('setHomes', homes)
      },
      addHome(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() }
        return axios
          .post(
            'https://auroras-cleaning-default-rtdb.firebaseio.com/blogs.json?auth=' +
              vuexContext.state.token,
            createdPost
          )
          .then((res) => {
            vuexContext.commit('addHome', { ...createdPost, id: res.data.name })
          })
          .catch((e) => console.log(e))
      },
      editHome(vuexContext, editedPost) {
        return axios
          .put(
            'https://auroras-cleaning-default-rtdb.firebaseio.com/blogs/' +
              editedPost.id +
              '.json?auth=' +
              vuexContext.state.token,
            editedPost
          )
          .then((res) => {
            vuexContext.commit('editBlog', editedPost)
          })
          .catch((e) => console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.fbAPIKey
        if (!authData.isLogin) {
          authUrl =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
            process.env.fbAPIKey
        }
        axios
          .post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((result) => {
            vuexContext.commit('setToken', result.data.idToken)
            localStorage.setItem('token', result.data.idToken)
            localStorage.setItem(
              'expirationDate',
              new Date().getTime() +
                Number.parseInt(result.data.expiresIn) * 1000
            )
            Cookie.set('jwt', result.data.idToken)
            Cookie.set(
              'expirationDate',
              new Date().getTime() +
                Number.parseInt(result.data.expiresIn) * 1000
            );
            this.$router.push('/admin');
            //  return this.$axios.$post('http://localhost:3000/api/track-data', {data: 'authenticated'})
          })
          .catch((e) => console.log(e))
      },
      initAuth(vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          if (!req.headers.cookie) {
            //  console.log('no cookie found')
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else if (process.client) {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('expirationDate')
        } else {
          token = null;
          expirationDate = null;
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log('no token found')
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('setToken', token)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.clear('token')
          localStorage.clear('expirationDate')
        }        
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      },
      requests(state) {
        return state.requests;
      },
      hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
      },
    },
  })
}

export default createStore
