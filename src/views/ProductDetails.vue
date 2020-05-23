<template>
  <div class="bg-looping m-top">
    <!-- <h1>{{ $route.params.id }}</h1> -->
    <!-- <h1>{{ items[0].name}}</h1>
    <h1>{{ items[0].price}}</h1>
    <img :src="items[0].imageLink" alt />-->

    <b-container class>
      <b-row>
        <b-col lg="9" md="8">
          <b-card>
            <b-row>
              <b-col lg="4" md="4">
                <img :src="productDetails.image" alt class="image-item mb-2" />
                <div class="mb-3">
                  <!-- <img :src="items[0].imageLink" alt class="image-items" />
                  <img :src="items[0].imageLink" class="image-items" />
                  <img :src="items[0].imageLink" alt class="image-items" />-->
                  <h6 class="mt-3">SHARE THIS PRODUCT</h6>

                  <div>
                    <a href="https://facebook.com/francis.abonyi" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>

                    <a href="https://twitter.com" target="_blank" class="px-2">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </b-col>
              <b-col lg="8" md="8" style="overflow-x: hidden">
                <p>
                  {{ productDetails.product_name }}
                  <i class="far fa-heart"></i>
                </p>
                <p>describing product details .......</p>
                <p>Branding............</p>
                <p>&#8358;{{ productDetails.product_price }}</p>
                <p>
                  <strike>&#8358;{{ discountPrice }}</strike>
                  <span style="background-color: #ccc; color: red; padding:2px;">{{ percent }}%</span>
                </p>
                <!-- <b-button block variant="warning" class="mb-3">
                  <i class="fas fa-shopping-cart"></i>
                  <span @click.prevent="addtocart(items[0])">ADD TO CART</span>
                </b-button>-->
                <b-button
                  block
                  variant="warning"
                  v-b-modal.modal-center
                  class="add2 mb-3"
                  @click="addtocart(productDetails)"
                >
                  <i class="fas fa-cart-plus"></i> ADD TO CART
                </b-button>
                <b-modal
                  id="modal-center"
                  ref="modal-center"
                  centered
                  title="Added to Cart"
                  hide-footer
                  hide-header
                >
                  <h4>Added to Cart</h4>
                  <br />
                  <p>{{ productDetails.product_name }} added to Cart</p>
                  <div class="d-lg-flex d-sm-flex flex-sm-row flex-lg-row d-xs-block">
                    <button class="add1" @click="hideModal">CONTINUE SHOPPING</button>
                    <button class="add" @click="opencart">VIEW CART AND CHECKOUT</button>
                  </div>
                </b-modal>

                <div>
                  <p>
                    2 offers starting from &#8358;{{ productDetails.product_price }}
                    <span>
                      <a href>See more offers</a>
                    </span>
                  </p>
                </div>
                <div>
                  <h6 class="mb-4">PROMOTIONS</h6>
                  <div class="mb-3">
                    <a href class="mb-3">
                      <i class="fas fa-star"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </a>
                  </div>
                  <div>
                    <a href>
                      <i class="fas fa-star"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </a>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col lg="3" md="4" class="d-none d-md-block">
          <b-card header="Delivery $ Returns" class="text-center mb-4">
            <b-card-text>
              <div>
                <h6>
                  <i class="fas fa-truck"></i> Delivery Information
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div>
                <h6>
                  <i class="fas fa-undo"></i> Return policy
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </b-card-text>
          </b-card>

          <b-card header="SELLER INFORMATION" style="font-size:15px;">
            <h6>Title...</h6>
            <b-card-text>Sub title info 1.</b-card-text>
            <b-card-text>Sub title info 2.</b-card-text>
            <b-button href="#" variant="warning" class="follow">Follow</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- <b-button v-b-modal.modal-center class="add2" @click="addtocart(items[0])"
      ><i class="fas fa-cart-plus"></i> ADD TO CART</b-button
    >-->
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      items: [],
      percent: 30,
      products: null,
      imageLink: null
    };
  },
  computed: {
    discountPrice() {
      let per = Math.floor(30 / 100);
      return (this.productDetails.product_price * 30) / 100;
    },
    cartitem() {
      return this.$store.state.cart;
    },
    productDetails() {
      return this.$store.state.productDetails;
    }
  },
  methods: {
    setCart() {
      let qty = this.$store.getters.setCartQty();
      this.$store.commit("setCartItemQty", qty);
      alert(qty);
    },
    addtocart(x) {
      let itemExist = false;
      let quantity = null;
      //check if item exist
      this.$store.state.cart.forEach(item => {
        if (item.id === x.id) {
          itemExist = true;
          quantity = item.quantity + 1;
        }
      });
      if (itemExist) {
        // remove item if it exist
        let item1 = this.cartitem.filter(item => {
          return item.id != x.id;
        });
        this.$store.commit("setRemoveItemCart", item1);
        // set removed item with its new quantity
        let item = {
          id: x.id,
          imagelink: x.image,
          name: x.product_name,
          quantity: quantity,
          unitPrice: x.product_price,
          subTotal: parseInt(x.product_price) * quantity
        };
        this.$store.commit("setCart", item);
        this.setCart();
      } else {
        let item = {
          id: x.product_id,
          imagelink: x.image,
          name: x.product_name,
          quantity: 1,
          unitPrice: x.product_price,
          subTotal: x.product_price
        };
        this.$store.commit("setCart", item);
        this.setCart();
      }
    },
    opencart() {
      this.$router.push("/cart");
    },
    hideModal() {
      this.$refs["modal-center"].hide();
    }
    // changeimage1() {
    //   this.items[0].imageLink1 = this.items[0].imageLink;
    //   console.log("items", this.items);
    // },
    // changeimage2: function() {
    //   this.items[0].imageLink = this.items[0].imageLink2;
    //   console.log("items-2", this.items);
    // },
    // changeimage3: function() {
    //   this.items[0].imageLink = this.items[0].imageLink3;
    //   console.log("items-3", this.items);
    // },
    // getDiscount() {
    //   let reductionPrice = (this.items[0].price * 0.3).toFixed(2);
    //   console.log(reductionPrice);

    //   console.log("my pricing", this.items[0].price);
    // }
    // getDiscount() {
    //   let percent = this.percent / 100;
    //   let reductionPrice = (this.items[0].price * percent).toFixed(2);
    //   let customerPrice = this.items[0].price - reductionPrice;
    //   return customerPrice;
    // }
  }
  // created() {
  //   this.items = this.$store.state.products.filter(item => {
  //     return item.id == parseInt(this.$route.params.id);
  //   });
  //   this.imageLink = items[0].imageLink;
  //   console.log("my item", this.items);
  //   console.log("my item", typeof Number(this.$route.params.id));
  // }
};
</script>

<style scoped>
.bg-looping {
  background-color: #f5f5f5;
}
.m-top {
  margin-top: 10vh;
}
.image-items {
  width: 50px;
  height: 50px;
}
.image-item {
  width: 185px;
  height: 185px;
}
.fa-shopping-cart,
.fa-truck,
.fa-undo {
  float: left;
}
.fa-truck,
.fa-undo {
  font-size: 20px;
  color: orange;
}
.fa-facebook-f,
.fa-twitter {
  color: #000;
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.5em 0.6em;
}
.fa-facebook-f:hover {
  color: orange;
  box-shadow: 0px 0px 2px orange;
}
.fa-twitter:hover {
  color: orange;
  box-shadow: 0px 0px 2px orange;
}
.fa-heart {
  float: right;
  color: rgb(230, 150, 1);
  font-size: 20px;
}
.fa-heart:hover {
  background-color: rgba(245, 201, 120, 0.4);
  border-radius: 60px;
  box-shadow: 0px 0px 2px;
  padding: 0.4em 0.5em;
}
.fa-star {
  color: #fff;
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.2em 0.2em;
  background-color: #000;
}
span {
  font-size: 13px;
}
span a {
  float: right;
}
.follow {
  float: right;
}

.add {
  width: 100%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold;
}
.add1 {
  width: 100%;
  background: #fff;
  color: #ff9900;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold;
  margin-bottom: 1rem;
}
.add1:focus {
  outline: none;
}
.add:hover {
  background: #ffad33;
}

.add2 {
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold;
}
.add2:hover {
  background: #ffad33;
}

@media only screen and (min-width: 600px) {
  .add1 {
    width: 100%;
    background: #fff;
    color: #ff9900;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px #e5e5e5;
    height: 48px;
    font-weight: bold;
    margin-right: 0.1rem;
  }
  .add {
    margin-left: 0.1rem;
  }
}
</style>
