import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ProductDetails from "../views/ProductDetails.vue";
import Cart from "../views/Cart.vue";
import CheckOut from "../views/CheckOut.vue";
import Dashboard from "../views/Dashboard.vue";
import ChangePassword from "../views/ChangePassword.vue";
import Payment from "../views/Payment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // beforeEnter: (to, from, next) => {
    //   if (store.state.LoggedIn) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      if (store.state.loggedIn) {
        next("/dasboard");
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter(to, from, next) {
      if (store.state.loggedIn) {
        next("/dasboard");
      } else {
        next();
      }
    },
  },
  {
    path: "/changepassword",
    name: "ChangePassword",
    component: ChangePassword,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
    // beforeEnter(to, from, next) {
    //   if (store.state.loggedIn) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // },
  },
  {
    path: "/product/:id-:name",
    name: "ProductDetails",
    component: ProductDetails,
    beforeEnter(to, from, next) {
      store.dispatch({
        type: "productDatails",
        id: to.params.id,
      });
      next();
    },
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
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // let token = Vue.cookie.get("token");
//     // console.log("i am a war", token);
//     if (store.getters.loggedIn) {
//       next();
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (store.loggedIn === true) {
//     next();
//     return;
//   } else {
//     next("/login");
//   }
// });

export default router;
