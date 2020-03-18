<template>
  <div class="mb-6">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <div class="container">
        <b-navbar-brand to="/"
          >Xavier's<i class="fas fa-cart-arrow-down"></i
        ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>SHOP</b-nav-item>
            <b-nav-item to="/about">ABOUT</b-nav-item>
            <b-nav-item to="">CONTACT</b-nav-item>
            <b-nav-item>SIGN IN</b-nav-item>

            <b-nav-item right>
              <!-- Using 'button-content' slot -->
              <i class="fas fa-shopping-cart"></i> Cart
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.container {
  max-width: 95%;
  margin: 0 auto;
  padding: 0;
}
.mb-6 {
  margin-bottom: 10vh;
}
</style>
