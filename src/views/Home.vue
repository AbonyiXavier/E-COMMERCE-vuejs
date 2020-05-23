<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col cols="3" class="side mt-5">
          <h6>Shop Now</h6>
          <Category v-for="category in Categories" :category="category" :key="category.id" />
        </b-col>

        <b-col cols="9">
          <Carousel />
          <h4 class="text-center mt-4">Products</h4>
          <Product v-for="product in products" :product="product" :key="product.product_id" />
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
          categoryName: "Men Fashion"
        },
        {
          id: 2,
          categoryName: "Brougues Shoes"
        },
        {
          id: 3,
          categoryName: "Wrist Watch"
        },
        {
          id: 4,
          categoryName: "Hat"
        },
        {
          id: 5,
          categoryName: "Phones"
        },
        {
          id: 6,
          categoryName: "Perfumes"
        }
      ],

      lists: [
        {
          id: 1,
          url: require("@/assets/dd.jpg")
        },
        {
          id: 2,
          url: require("@/assets/Artboard_1.jpg")
        },
        {
          id: 3,
          url: require("@/assets/Artboard_1_copy_5.jpg")
        },
        {
          id: 4,
          url: require("@/assets/vouchers.jpg")
        },
        {
          id: 5,
          url: require("@/assets/NG_W12_S1_MERCH_Floor.jpg")
        }
      ]
    };
  },
  created() {
    this.$store.dispatch("addProduct");
  },
  components: {
    Category,
    Product,
    Carousel
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }

  // created() {
  //   console.log("my life token", this.$cookie.get("token"));
  //   axios
  //     .get("http://localhost:5000/orders", {
  //       headers: { Authorization: this.$cookie.get("token") }
  //     })
  //     .then(res => {
  //       console.log("my res", res);
  //     });
  //   // EventService.getOrders().then((res) => {
  //   //   console.log("my res", res);
  //   // });
  // }
};
</script>
<style scoped>
.side {
  position: sticky;
  top: 62px;
  height: 300px;
}
</style>
