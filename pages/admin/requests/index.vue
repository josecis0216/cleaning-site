<template>
  <div>
    <header-nav />

    <base-dialogue
      :show="!!error"
      title="An error occured!!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialogue>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasRequests && !isLoading">
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :first-name="req.firstName"
          :last-name="req.lastName"
          :email="req.userEmail"
          :message="req.message"
          :sq-feet="req.sqFeet"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>

    <footer-nav />
  </div>
</template>

<script>
import HeaderNav from '@/components/Nav/HeaderNav.vue'
import FooterNav from '@/components/Nav/FooterNav.vue'
import RequestItem from '@/components/Requests/RequestItem.vue'
import BaseCard from '@/components/UI/BaseCard.vue'
import BaseDialogue from '@/components/UI/BaseDialogue.vue'
import BaseSpinner from '@/components/UI/BaseSpinner.vue'

export default {
  components: {
    HeaderNav,
    FooterNav,
    RequestItem,
    BaseCard,
    BaseDialogue,
    BaseSpinner
  },
  data() {
    return {
      isLoading: false,
      error: null,
    }
  },
  computed: {
    receivedRequests() {
      //    return this.$store.getters['requests']
      return this.$store.getters.requests
    },
    hasRequests() {
      //    return this.$store.getters['hasRequests']
      return this.$store.getters.hasRequests
    },
  },
  created() {
    this.loadRequests()
  },
  methods: {
    handleError() {
      this.error = null
    },
    async loadRequests() {
      this.isLoading = true
      try {
        await this.$store.dispatch('loadRequests')
      } catch (error) {
        this.error = new Error(error.message || 'Failed to get data')
      }
      this.isLoading = false
    },
  },
}
</script>
