<template>
  <div class="hom mb-2">
    <b-col lg="9" md="10" xl="10">
      <b-card bg-variant="white" text-variant="red">
        <div class="d-lg-flex d-sm-flex flex-sm-column flex-lg-row">
          <!-- image & name -->
          <div class="d-flex details border-right">
            <img class="bigpic" :src="cart.imagelink" />
            <div class="ml-2">
              <p>
                <b>{{ cart.name }}</b>
              </p>
              <!-- price on mobile-->
              <div class="mt-n3 d-lg-none d-xl-none d-md-none d-sm-none">₦ {{ subTotal }}</div>
              <div class="d-none d-lg-block d-xl-block d-md-block d-sm-block">
                <i class="fas fa-heart"></i>
                <router-link to>MOVE TO SAVED ITEMS</router-link>
                <i class="fas fa-trash"></i>
                <router-link to @click.native="remove(cart)">REMOVE</router-link>
              </div>
            </div>
          </div>
          <!-- image & name -->
          <div
            class="border-right pl-3 pr-3 pt-2 d-none d-lg-block d-xl-block d-md-block d-sm-block"
          >
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="quantity"
              :options="[
                { text: '1', value: 1 },
                { text: '2', value: 2 },
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
              ]"
              :value="null"
              @change="changeQty(quantity)"
            ></b-form-select>
          </div>
          <div
            class="border-right pl-5 pr-5 pt-3 d-none d-lg-block d-xl-block d-md-block d-sm-block"
          >₦ {{ cart.unitPrice }}</div>
          <div
            class="pl-5 pt-3 pl-5 d-none d-lg-block d-xl-block d-md-block d-sm-block"
          >₦ {{ subTotal }}</div>

          <!-- actions for mobile-->
          <div class="d-flex d-lg-none d-xl-none d-md-none d-sm-none border-top mt-2 mb-n3">
            <div class="mt-3">
              <router-link class="border-right pr-2" to>
                <i class="fas fa-heart"></i>
              </router-link>
              <i class="fas fa-trash"></i>
              <router-link to @click.native="remove(cart)">REMOVE</router-link>
            </div>
            <div class="ml-auto mt-2">
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="quantity"
                :options="[
                  { text: '1', value: 1 },
                  { text: '2', value: 2 },
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                ]"
                :value="null"
                @change="changeQty(quantity)"
              ></b-form-select>
            </div>
          </div>
        </div>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["cart"],
  data: () => ({
    categories: null
  }),

  computed: {
    cartitem() {
      return this.$store.state.cart;
    },
    quantity() {
      return this.cart.quantity;
    },
    subTotal() {
      return this.cart.subTotal;
    }
  },
  methods: {
    changeQty(x) {
      alert(x);
    },
    remove(x) {
      let item = this.cartitem.filter(item => {
        return item.id != x.id;
      });
      this.$store.commit("setRemoveItemCart", item);
      this.$router.go();
    }
    //    changeQuantity (x) {
    //     let item = this.cartitem.filter((item) => {
    //         return item.id != x.id
    //     })
    //     this.$store.commit("setRemoveItemCart", item)
    //     this.$router.go()
    //   }
  }
};
</script>

<style scoped>
.rightalign {
  float: right;
}
.bigpic {
  width: 60px;
  height: 60px;
}
.details {
  width: 422px;
}
a {
  color: #f68b1e;
  font-size: 13px;
}
a:hover {
  color: #f68b1e;
  text-decoration: none;
}
.fa-heart {
  color: #f68b1e;
  font-size: 13px;
  margin-right: 1vmin;
}
.fa-trash {
  color: #f68b1e;
  font-size: 13px;
  margin-right: 1vmin;
  margin-left: 2vmin;
}
</style>
