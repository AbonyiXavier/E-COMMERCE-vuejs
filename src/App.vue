<template>
  <div id="app">
    <div id="nav">
      <Header />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import EventService from "../src/services/EventService";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    async authUser() {
      let user = await axios.get("http://localhost:5000/authUser", {
        headers: { Authorization: this.$cookie.get("token") },
      });
      // console.log("object", res);
      this.$store.commit("SET_USER", user.data);
    },
  },
  created() {
    this.authUser();
  },
};
</script>
<style>
/* #app {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-family: "Trade Winds", cursive;
  font-family: "Indie Flower", cursive;
  font-family: "Dancing Script", cursive;
  font-family: "Permanent Marker", cursive;
} */
</style>
