<template>
  <div class="wrapper">
    <div>
      <b-card
        :title="product.product_name"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        fluid
      >
        <b-img-lazy :src="product.image" class="image"></b-img-lazy>
        <b-card-text>
          <p>&#8358;{{ product.product_price }}</p>
        </b-card-text>

        <b-button
          variant="primary"
          class="btn-sm"
          :to="`/product/${product.product_id}-${product.product_name.replace(/[' ']+/g,'-').toLowerCase()}`"
        >Buy Now</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"]
};
</script>
<style scoped>
.wrapper {
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
  position: relative;
  left: 10%;
}
.image {
  width: 180px;
  height: 170px;
}

@media only screen and (max-width: 320px) {
  .image {
    width: 170px;
    height: 150px;
  }
  .wrapper {
    left: 3%;
  }
}
</style>
