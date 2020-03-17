<template>
  <div id="app">
    <div id="nav">
      <Header />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
#app {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-family: "Trade Winds", cursive;
  font-family: "Indie Flower", cursive;
  font-family: "Dancing Script", cursive;
  font-family: "Permanent Marker", cursive;
}
</style>
