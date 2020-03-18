<template>
  <div id="carousel">
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
    >
      <SliderItem v-for="image in lists" :key="image.id">
        <img :src="image.url" class="img" />
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
// import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "Carousel",
  //   components: {
  //     Slider,
  //     SliderItem
  //   },
  data() {
    return {
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
      ],
      sliderValue: 2
    };
  }
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 320px) {
  .img {
    height: 80%;
    margin-top: 18px;
  }
}
</style>
