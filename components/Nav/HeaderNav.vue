<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand id="cleaning-home">
        <nuxt-link to="/" class="nav-link">
          <img src="@/static/images/Auroras-Cleaning.png" alt="logo for Aurora's cleaning" class="home-img" />
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item id="cleaning-services">
            <nuxt-link to="/services" class="nav-link">Cleaning Services</nuxt-link>
          </b-nav-item>
          <b-nav-item id="cleaning-process">
            <nuxt-link to="/process" class="nav-link">Cleaning Process</nuxt-link>
          </b-nav-item>
          <b-nav-item id="cleaning-tips">
            <nuxt-link to="/tips" class="nav-link">Cleaning Tips</nuxt-link>
          </b-nav-item>
          <b-nav-item id="about-us">
            <nuxt-link to="/about" class="nav-link">About Us</nuxt-link>
          </b-nav-item>
          <b-nav-item><b-button variant="outline-success">
              <nuxt-link to="/contact" class="nav-link">Free Estimate</nuxt-link>
            </b-button></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.home-img {
  width: 100px;
  height: 100px;
  margin-top: -10px;
}
</style>
