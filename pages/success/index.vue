<template>
  <section>
    <header-nav />
    <div class="card" style="max-width: 32rem;margin: 25px auto; padding:25px;">
      <h1 style="color:green;">Your message was sent successfully!</h1>
      <p>
        We will reach out to you shortly, in the meantime check out our
        <nuxt-link to="/cleaning-tips">cleaning tips</nuxt-link>,
        or go back to the <nuxt-link to="/">home page</nuxt-link>.
      </p>
    </div>
    <footer-nav />
  </section>
</template>

<script>
import HeaderNav from '@/components/Nav/HeaderNav.vue'
import FooterNav from '@/components/Nav/FooterNav.vue'

export default {
  components: {
    HeaderNav,
    FooterNav,
  },
}
</script>
