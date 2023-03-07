<template>
  <div class="col-sm-12 col-lg-8">
    <!-- <div class="card">
      <div class="card-body">         -->
        <!-- <h2 class="card-title">{{ title }}</h2>
        <h5 class="card-caption">{{ dateAdded }}</h5>
        <p class="card-text">{{ postBody }}</p> -->
        <h1>{{ title }}</h1>
        <h5>{{ dateAdded }}</h5>
        <p>{{ postBody }}</p>
        <nuxt-link :to="postLink">See More</nuxt-link>
        <nuxt-link v-show="showEditLink" :to="adminLink" >Edit Post</nuxt-link>
      </div>      
    <!-- </div>
  </div> -->
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    dateAdded: {
      type: String,
      required: true,
    },
    postBody: {
      type: String,
      required: true,
    },
    // moreHomeImages: {
    //   type: Array,
    //   required: false,
    // }
  },
  computed: {
    postLink() {
      //  return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
      return '/posts/' + this.id;
    },
    adminLink() {
      return '/admin/' + this.id;
    }, 
    showEditLink() {
      return this.$store.getters.isAuthenticated;
    },
  }
}
</script>

<style scoped>
img {
  width: 100%;
}

.card-img-top {
  height: 270px;
}
</style>

