import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ProductDetails from "../views/ProductDetails.vue";
import Cart from "../views/Cart.vue";
import CheckOut from "../views/CheckOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/product/:id-:name",
    name: "ProductDetails",
    component: ProductDetails,
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "CheckOut",
    component: CheckOut,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // let token = Vue.cookie.get("token");
    // console.log("i am a war", token);
    if (store.getters.loggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
