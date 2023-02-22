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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium voluptas accusamus iste iure possimus? Ipsa sequi
              voluptates facere cupiditate magnam hic asperiores quod commodi
              atque praesentium obcaecati quasi, eos aperiam!
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <p style="line-height: 0.5in">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              vel enim tempora asperiores laborum beatae earum a nisi explicabo,
              quisquam eum assumenda veniam at distinctio obcaecati modi
              voluptatem odio hic. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Reprehenderit officiis ad veritatis ea dolorem
              vel commodi, fuga a odio error cum ratione explicabo distinctio
              quasi unde qui! Consequuntur, ipsam dignissimos!
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
