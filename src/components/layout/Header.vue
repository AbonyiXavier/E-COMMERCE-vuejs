<template>
  <div class="head">
    <div>
      <b-navbar toggleable="lg" variant="faded" fixed="top" id="header" type="light
      ">
        <b-navbar-brand style="font-size: 30px" href="/">
          Xavier's
          <i class="fas fa-cart-arrow-down"></i>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-5">
            <b-nav-form>
              <input
                size="sm"
                id="in"
                class="mr-sm-2"
                placeholder=" Search products, brands, categories"
              />

              <b-button size="sm" class="my-2 my-sm-0" type="submit" variant id="search">SEARCH</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right class="head1">
              <template v-slot:button-content>
                <strong>Help?</strong>
              </template>
              <b-dropdown-item href="#">Help Center?</b-dropdown-item>
              <b-dropdown-item href="#">How to shop on Cherry</b-dropdown-item>
              <b-dropdown-item href="#">How to pay on Cherry</b-dropdown-item>
              <b-dropdown-item href="#">How to use a Voucher</b-dropdown-item>
              <b-dropdown-item href="#">Xavier's Express</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-navbar-nav class="head2">
              <b-nav-item href="#" to="/cart">
                <strong>Cart</strong>
                <span id="cart">
                  <i class="fas fa-cart-plus"></i>
                  {{cartCount }}
                </span>
              </b-nav-item>
            </b-navbar-nav>

            <b-nav-item-dropdown right class="head3" dark v-if="this.$store.state.LoggedIn">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <strong>Hi {{ user.first_name }}</strong>
              </template>

              <b-dropdown-item href="/dasboard">Dashboard</b-dropdown-item>
              <b-dropdown-item href="/order">Order</b-dropdown-item>
              <b-dropdown-item>
                <!-- <router-link href="/register" style="color: black;">Sign Up</router-link> -->
              </b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right class="head3" dark v-if="!this.$store.state.LoggedIn">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <strong>Login</strong>
              </template>

              <b-dropdown-item href="/login" v-if="!this.$store.state.LoggedIn">Log In</b-dropdown-item>
              <b-dropdown-item href="/register" v-if="!this.$store.state.LoggedIn">Register</b-dropdown-item>
              <b-dropdown-item>
                <!-- <router-link href="/register" style="color: black;">Sign Up</router-link> -->
              </b-dropdown-item>
              <b-dropdown-item href="#" v-if="this.$store.state.LoggedIn">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    cartCount() {
      return this.$store.state.cart.length;
    },
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style>
#in {
  width: 500px;
  height: 40px;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
  background-color: white;
  outline: none;
  border: 1px #c7c7cd solid;
}
.head {
  margin-bottom: 40px;
}
#search {
  background-color: #f68b1e;
  height: 45px;
  border-radius: 5px;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  outline-color: none;
  outline: none;
  border: none;
}

#header {
  background-color: white !important;
}
.head1 {
  color: #282828 !important;
  font-size: 16px !important;
  padding: 8px;
}
.head2 {
  color: black !important;
  font-size: 16px !important;
  padding: 8px;
}

.head3 {
  color: #282828 !important;
  font-size: 16px !important;
  padding: 8px;
}
#focus:focus {
  outline: none !important;
}
</style>
