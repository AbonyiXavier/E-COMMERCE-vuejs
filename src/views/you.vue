<template>
  <div class="container mx-0">
    <!-- <div class="row">
   
  <div class="mt-4 col-lg-8">
    <b-card img-src="../assets/images/foot.jpg" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>

    </b-card>
    
  </div>
</div> -->

    <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions" />
  </div>
</template>
<script>
export default {
  name: "productPage",
  data() {
    return {
      images: {
        thumbs: [
          {
            id: 1,
            url: require("@/assets/images/foot.jpg")
          },
          {
            id: 2,
            url: require("@/assets/images/watch.jpg")
          }
        ],
        normal_size: [
          {
            id: 1,
            url: require("@/assets/images/foot.jpg")
          },
          {
            id: 2,
            url: require("@/assets/images/watch.jpg")
          }
        ],
        large_size: [
          {
            id: 1,
            url: require("@/assets/images/foot.jpg")
          },
          {
            id: 2,
            url: require("@/assets/images/watch.jpg")
          }
        ]
      },
      zoomerOptions: {
        zoomFactor: 3, // scale for zoomer
        pane: "pane", // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: "zoomer", // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click: false, // move image by click thumb image or by mouseover
        scroll_items: 5, // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    };
  }
};
</script>
