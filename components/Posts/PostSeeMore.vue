<template>
  <section>
    <top-header />
    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/admin/posts">All Posts</nuxt-link></li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ post.title }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="see-more-container">
      <h2 style="text-align:center;">{{ post.title }}</h2>
      <h5>Date Added:</h5>
      <p class="card-text">{{ post.dateAdded }}</p>
      <h5>Post Description:</h5>
      <p class="card-text">{{ post.postBody }}</p>
    </div>
    <bottom-footer />
  </section>
</template>

<script>
import HeaderNav from '@/components/Nav/HeaderNav.vue'
import FooterNav from '@/components/Nav/FooterNav.vue'

export default {
  components: {
    HeaderNav,
    FooterNav
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      post: this.post
        ? { ...this.home }
        : {
            title: '',
            dateAdded: '',
            postBody: '',
          },
    }
  },
}
</script>

<style scoped>
.see-more-container{
  max-width: 400px;
  margin: auto;
}
</style>