<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.title"
          >Title</AppControlInput
        >
        <AppControlInput v-model="editedPost.dateAdded">Date Added</AppControlInput>
        <!-- <AppControlInput v-model="editedPost.imageUrl"
          >Images for Post</AppControlInput
        > -->
        <AppControlInput
          v-model="editedPost.postBody"
          control-type="textarea"
          >Post Body Text</AppControlInput
        >
        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel"
          >Cancel</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  // computed: {
  //   moreHomeImages(url) {
  //     this.moreHomeImges.push(url)
  //   }
  // },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            title: "",
            dateAdded: "",
            postBody: "",
            //  homeUrl: "", 
            // moreHomeImages: []
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editedPost)
      // console.log('saved post!')
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin/posts");
    }
  }
}
</script>
