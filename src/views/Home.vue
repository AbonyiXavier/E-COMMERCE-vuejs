<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col cols="3">
          <h6>Shop Now</h6>
          <Category
            v-for="category in Categories"
            :category="category"
            :key="category.id"
          />
        </b-col>

        <b-col cols="9">
          <h4 class="text-center">Products</h4>
          <Product
            v-for="product in products"
            :product="product"
            :key="product.categoryId"
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
        }
      ],
      products: [
        {
          categoryId: 1,
          name: "product 1",
          price: "#12",
          imageLink: require("@/assets/1.jpg")
        },
        {
          categoryId: 2,
          name: "product 2",
          price: "#31",
          imageLink: require("@/assets/3.jpg")
        },
        {
          categoryId: 3,
          name: "product 3",
          price: "#40",
          imageLink: require("@/assets/2.jpg")
        },
        {
          categoryId: 4,
          name: "product 4",
          price: "#12",
          imageLink: require("@/assets/6.jpg")
        },
        {
          categoryId: 5,
          name: "product 5",
          price: "#31",
          imageLink: require("@/assets/7.jpg")
        },
        {
          categoryId: 6,
          name: "product 6",
          price: "#40",
          imageLink: require("@/assets/8.jpg")
        }
      ]
    };
  },
  components: {
    Category,
    Product
  }
};
</script>
