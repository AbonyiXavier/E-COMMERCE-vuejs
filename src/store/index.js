import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "product 1",
        price: "#12",
        imageLink: require("@/assets/1.jpg")
        // imageLink1: require("@/assets/11.jpg"),
        // imageLink2: require("@/assets/12.jpg")
      },
      {
        id: 2,
        name: "product 2",
        price: "#31",
        imageLink: require("@/assets/3.jpg")
      },
      {
        id: 3,
        name: "product 3",
        price: "#40",
        imageLink: require("@/assets/2.jpg")
      },
      {
        id: 4,
        name: "product 4",
        price: "#12",
        imageLink: require("@/assets/6.jpg")
      },
      {
        id: 5,
        name: "product 5",
        price: "#31",
        imageLink: require("@/assets/7.jpg")
      },
      {
        id: 6,
        name: "product 6",
        price: "#40",
        imageLink: require("@/assets/8.jpg")
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
