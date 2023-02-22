<template>
  <div style="width: 100%; background-color: #3066be; color: white">
    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <b-nav vertical class="w-25">
              <b-nav-item active class="nav-item-footer"><span style="color:white;">Active</span></b-nav-item>
              <b-nav-item class="nav-item-footer"><span style="color:white;">Link</span></b-nav-item>
              <b-nav-item class="nav-item-footer"><span style="color:white;">Another Link</span></b-nav-item>
              <b-nav-item class="nav-item-footer"><span style="color:white;">Disabled</span></b-nav-item>
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
}
</style>