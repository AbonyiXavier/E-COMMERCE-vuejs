<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col cols="3" class="side">
          <h6>Shop Now</h6>
          <Category
            v-for="category in Categories"
            :category="category"
            :key="category.id"
          />
        </b-col>

        <b-col cols="9">
          <Carousel />
          <h4 class="text-center mt-3">Products</h4>
          <Product
            v-for="product in products"
            :product="product"
            :key="product.id"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "../components/Product";
import Category from "../components/Category";
import Carousel from "../components/Carousel";
import axios from "axios";
import EventService from "../services/EventService";
export default {
  name: "Home",
  data() {
    return {
      Categories: [
        {
          id: 1,
          categoryName: "Men Fashion",
        },
        {
          id: 2,
          categoryName: "Brougues Shoes",
        },
        {
          id: 3,
          categoryName: "Wrist Watch",
        },
        {
          id: 4,
          categoryName: "Hat",
        },
        {
          id: 5,
          categoryName: "Phones",
        },
        {
          id: 6,
          categoryName: "Perfumes",
        },
      ],
      products: this.$store.state.products,
      // products: [
      //   {
      //     id: 1,
      //     name: "product 1",
      //     price: "#12",
      //     imageLink: require("@/assets/1.jpg")
      //   },
      //   {
      //     id: 2,
      //     name: "product 2",
      //     price: "#31",
      //     imageLink: require("@/assets/3.jpg")
      //   },
      //   {
      //     id: 3,
      //     name: "product 3",
      //     price: "#40",
      //     imageLink: require("@/assets/2.jpg")
      //   },
      //   {
      //     id: 4,
      //     name: "product 4",
      //     price: "#12",
      //     imageLink: require("@/assets/6.jpg")
      //   },
      //   {
      //     id: 5,
      //     name: "product 5",
      //     price: "#31",
      //     imageLink: require("@/assets/7.jpg")
      //   },
      //   {
      //     id: 6,
      //     name: "product 6",
      //     price: "#40",
      //     imageLink: require("@/assets/8.jpg")
      //   }
      // ],
      lists: [
        {
          id: 1,
          url: require("@/assets/dd.jpg"),
        },
        {
          id: 2,
          url: require("@/assets/Artboard_1.jpg"),
        },
        {
          id: 3,
          url: require("@/assets/Artboard_1_copy_5.jpg"),
        },
        {
          id: 4,
          url: require("@/assets/vouchers.jpg"),
        },
        {
          id: 5,
          url: require("@/assets/NG_W12_S1_MERCH_Floor.jpg"),
        },
      ],
    };
  },
  components: {
    Category,
    Product,
    Carousel,
  },

  created() {
    console.log("my life token", this.$cookie.get("token"));
    axios
      .get("http://localhost:5000/orders", {
        headers: { Authorization: this.$cookie.get("token") },
      })
      .then((res) => {
        console.log("my res", res);
      });
    // EventService.getOrders().then((res) => {
    //   console.log("my res", res);
    // });
  },
};
</script>
<style scoped>
.side {
  position: sticky;
  top: 62px;
  height: 300px;
}
</style>
