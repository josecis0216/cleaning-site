<template>
    <div class="admin-post-page">
      <section class="update-form">
        <AdminPostForm :home="loadedPost" @submit="onSubmitted" />
      </section>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
  
  export default {
    components: {
      AdminPostForm
    },
    layout: "admin",
    middleware: ['check-auth', 'auth'],
    asyncData(context) {
      return axios
        .get(
          "https//auroras-cleaning-default-rtdb.firebaseio.com/posts/" +
            context.params.postId +
            ".json"
        )
        .then(res => {
          return {
            loadedPost: { ...res.data, id: context.params.postId }
          };
        })
        .catch(e => context.error());
    },
    methods: {
      onSubmitted(editedPost) {
        this.$store.dispatch("editPost", editedPost).then(() => {
          this.$router.push("/admin/posts");
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
  </style>
  