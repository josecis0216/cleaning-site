<template>
  <section>
    <header-nav />
    <div style="background-color: #fbfff1">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="img-container">
              <img
                src="@/static/images/cleaning-about.jpg"
                alt="group photo about us page"
                style="width: 300px"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <h1 style="text-align: center">About Us</h1>
            <p style="line-height: 0.5in;">
              We are a family owned business that started cleaning commercial spaces in 2001. Ever since then, we haven't looked back,
              and continue to increase our experience and reach out to companies with our helpful cleaning techniques that make employees
              and customers excited to visit your building. Let us know how we can help keep your place comfortable for all and don't hesitate to 
              reach out to us with any questions.
            </p>
          </div>
        </div>
      </div>
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

<style scoped>
.img-container {
  margin: 10px 0px;
}
</style>
