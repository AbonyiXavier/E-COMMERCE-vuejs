import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import EventService from "../services/EventService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    successAlertMessage: null,
    showSuccessAlert: false,
    errorAlertMessage: null,
    showErrrorAlert: false,
    LoggedIn: false,
    token: null,
    cart: [],
    products: [],
    productDetails: [],
    // products: [
    //   {
    //     id: 1,
    //     name: "product 1",
    //     price: 12000,
    //     imageLink: require("@/assets/1.jpg"),
    //     // imageLink1: require("@/assets/fetch.jpg"),
    //     // imageLink2: require("@/assets/fetch1.jpg"),
    //     // imageLink3: require("@/assets/fetch2.jpg")
    //   },
    //   {
    //     id: 2,
    //     name: "product 2",
    //     price: 31500,
    //     imageLink: require("@/assets/3.jpg"),
    //   },
    //   {
    //     id: 3,
    //     name: "product 3",
    //     price: 40000,
    //     imageLink: require("@/assets/2.jpg"),
    //   },
    //   {
    //     id: 4,
    //     name: "product 4",
    //     price: 12300,
    //     imageLink: require("@/assets/6.jpg"),
    //   },
    //   {
    //     id: 5,
    //     name: "product 5",
    //     price: 31400,
    //     imageLink: require("@/assets/7.jpg"),
    //   },
    //   {
    //     id: 6,
    //     name: "product 6",
    //     price: 40180,
    //     imageLink: require("@/assets/8.jpg"),
    //   },
    // ],
  },
  mutations: {
    setCart(state, item) {
      state.cart.unshift(item);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    // set cart on reload
    setCartReload(state, item) {
      state.cart = item;
    },
    // set cart after removing item
    setRemoveItemCart(state, item) {
      state.cart = item;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // set success message
    setSuccessAlert(state, item) {
      state.successAlertMessage = item.successMessage;
      state.showSuccessAlert = item.showSuccess;
    },
    // set error message
    setErrorAlert(state, item) {
      state.errorAlertMessage = item.errorMessage;
      state.showErrrorAlert = item.showError;
    },

    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },

    SET_USER(state, user) {
      state.user = user;
      if (state.user) {
        state.LoggedIn = true;
      }
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    ADD_PRODUCT(state, product) {
      state.products = product;
    },
    PRODUCT_DETAILS(state, product) {
      state.productDetails = product;
    },
  },
  actions: {
    register({ commit }, credentials) {
      console.log("stuff", credentials);
      return axios
        .post("http://localhost:5000/signup", credentials)
        .then(({ data }) => {
          console.log("user data is", data);
          commit("SET_USER_DATA", data.user);
        });
    },
    addProduct({ commit }) {
      EventService.addProducts().then(({ data }) => {
        console.log("product data is", data);
        commit("ADD_PRODUCT", data);
      });
    },
    productDatails({ commit }, item) {
      EventService.productDetails(item.id).then(({ data }) => {
        console.log("product data is", data);
        commit("PRODUCT_DETAILS", data);
      });
    },

    SET_TOKEN({ commit }, token) {
      commit("SET_TOKEN", token);
    },
    SET_USER({ commit }, user) {
      commit("SET_USER", user);
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },

    // calculate total quantity in cart
    getCartQty(state) {
      if (state.cart.length < 1) {
        return 0;
      } else {
        let totalQuantity = [];
        state.cart.forEach((item) => {
          totalQuantity.push(item.quantity);
        });
        let total = totalQuantity.reduce((a, b) => {
          return a + b;
        });
        return total;
      }
    },

    // calculate total price
    getTotalPrice(state) {
      if (state.cart.length < 1) {
        return 0;
      } else {
        let totalPrice = [];
        state.cart.forEach((item) => {
          totalPrice.push(item.subTotal);
        });
        let totalP = totalPrice.reduce((a, b) => {
          return a + b;
        });
        return totalP;
      }
    },
  },
  modules: {},
});
