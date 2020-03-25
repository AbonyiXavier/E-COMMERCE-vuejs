import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "product 1",
        price: 12000,
        imageLink: require("@/assets/1.jpg")
        // imageLink1: require("@/assets/fetch.jpg"),
        // imageLink2: require("@/assets/fetch1.jpg"),
        // imageLink3: require("@/assets/fetch2.jpg")
      },
      {
        id: 2,
        name: "product 2",
        price: 31500,
        imageLink: require("@/assets/3.jpg")
      },
      {
        id: 3,
        name: "product 3",
        price: 40000,
        imageLink: require("@/assets/2.jpg")
      },
      {
        id: 4,
        name: "product 4",
        price: 12300,
        imageLink: require("@/assets/6.jpg")
      },
      {
        id: 5,
        name: "product 5",
        price: 31400,
        imageLink: require("@/assets/7.jpg")
      },
      {
        id: 6,
        name: "product 6",
        price: 40180,
        imageLink: require("@/assets/8.jpg")
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
