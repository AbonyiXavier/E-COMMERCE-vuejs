<template>
  <div class="bg-looping">
    <!-- <h1>{{ $route.params.id }}</h1> -->
    <!-- <h1>{{ items[0].name}}</h1>
    <h1>{{ items[0].price}}</h1>
    <img :src="items[0].imageLink" alt /> -->

    <b-container class>
      <b-row>
        <b-col lg="9" md="8">
          <b-card>
            <b-row>
              <b-col lg="4" md="4">
                <img :src="items[0].imageLink" alt class="image-item mb-2" />
                <div>
                  <img
                    :src="items[0].imageLink"
                    @click="changeimage1"
                    class="image-items"
                  />
                  <img
                    :src="items[0].imageLink"
                    @click="changeimage2"
                    class="image-items"
                  />
                  <img
                    :src="items[0].imageLink"
                    @click="changeimage3"
                    class="image-items"
                  />
                </div>
              </b-col>
              <b-col lg="8" md="8" style="overflow-x: hidden">
                <p>{{ items[0].name }}</p>
                <p>describing product 1 .......</p>
                <p>Branding............</p>
                <p>{{ items[0].price }}</p>
                <b-button block variant="primary">
                  <i class="fas fa-shopping-cart"></i> Add to cart</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col lg="3" md="4" class="d-none d-md-block">
          <b-card header="Delivery $ Returns" class="text-center">
            <b-card-text>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- <ProductZoomer :base-images="items[0].imageLink" :base-zoomer-options="zoomerOptions" /> -->
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      items: []
      // images: {
      //   thumbs: [
      //     {
      //       id: 1,
      //       url: require("../assets/8.jpg")
      //     },
      //     {
      //       id: 2,
      //       url: require("../assets/1.jpg")
      //     }
      //   ],
      //   normal_size: [
      //     {
      //       id: 1,
      //       url: require("../assets/8.jpg")
      //     },
      //     {
      //       id: 2,
      //       url: require("../assets/1.jpg")
      //     }
      //   ],
      //   large_size: [
      //     {
      //       id: 1,
      //       url: require("../assets/8.jpg")
      //     },
      //     {
      //       id: 2,
      //       url: require("../assets/1.jpg")
      //     }
      //   ]
      // },
      // zoomerOptions: {
      //   zoomFactor: 3, // scale for zoomer
      //   pane: "pane", // three type of pane ['pane', 'container-round', 'container']
      //   hoverDelay: 300, // how long after the zoomer take effect
      //   namespace: "zoomer", // add a namespace for zoomer component, useful when on page have mutiple zoomer
      //   move_by_click: false, // move image by click thumb image or by mouseover
      //   scroll_items: 5, // thumbs for scroll
      //   choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
      //   scroller_button_style: "line",
      //   scroller_position: "left",
      //   zoomer_pane_position: "right"
      // }
    };
  },
  methods: {
    changeimage1: function() {
      this.items[0].imageLink = this.items[0].imageLink;
      console.log("items", this.items);
    },
    changeimage2: function() {
      this.items[0].imageLink = this.items[0].imageLink;
      console.log("items-2", this.items);
    },
    changeimage3: function() {
      this.items[0].imageLink = this.items[0].imageLink;
      console.log("items-3", this.items);
    }
  },
  created() {
    this.items = this.$store.state.products.filter(item => {
      return item.id == parseInt(this.$route.params.id);
    });

    console.log("my item", this.items);
    console.log("my item", typeof Number(this.$route.params.id));
  }
};
</script>

<style scoped>
.bg-looping {
  background-color: #f5f5f5;
}
.image-items {
  width: 50px;
  height: 50px;
}
.image-item {
  width: 185px;
  height: 185px;
}
</style>
