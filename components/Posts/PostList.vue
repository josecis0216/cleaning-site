<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>All Posts</h1>
      </div>
    </div>
    <div class="row">
      <PostPreview
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :is-admin="isAdmin"
        :title="post.title"
        :date-added="post.dateAdded"
        :post-body="post.postBody"
      />
    </div>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue'

export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
