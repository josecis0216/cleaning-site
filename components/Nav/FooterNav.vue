<template>
  <div style="width: 100%; background-color: #3066be; color: white">
    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <b-nav vertical class="w-25">
              <b-nav-item active class="nav-item-footer"><span style="color:white;"><nuxt-link to="/about" class="nav-item-footer">About</nuxt-link></span></b-nav-item>
              <b-nav-item active class="nav-item-footer"><span style="color:white;"><nuxt-link to="/contact" class="nav-item-footer">Contact Us</nuxt-link></span></b-nav-item>
              <b-nav-item active class="nav-item-footer"><span style="color:white;"><nuxt-link to="/services" class="nav-item-footer">Cleaning Services</nuxt-link></span></b-nav-item>
              <b-nav-item active class="nav-item-footer"><span style="color:white;"><nuxt-link to="/process" class="nav-item-footer">Cleaning Process</nuxt-link></span></b-nav-item>
              <b-nav-item active class="nav-item-footer"><span style="color:white;"><nuxt-link to="/tips" class="nav-item-footer">Cleaning Tips</nuxt-link></span></b-nav-item>
            </b-nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-item-footer {
    color: white;
    text-decoration: none;
    font-size: 14pt;
    padding: 0px;
}

.nav-link {
  padding: .5rem 0px;
}
</style>