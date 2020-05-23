<template>
  <div class="main">
    <b-container>
      <br />
      <div class="d-lg-flex d-sm-flex flex-sm-column flex-lg-row mt-5">
        <div>
          <h6>CHECKOUT</h6>
          <div class="hee2 mt-3">
            <h6>
              <i class="fas fa-check-circle done mr-2"></i>1. ADDRESS DETAILS
            </h6>
          </div>
          <div class="third2">
            <p>
              <b>{{ user.first_name }} {{ user.last_name }}</b>
              <br />
              {{ user.address}}
              <br />ROAD- SAUKA/IMMIGRATION HQ, Federal Capital Territory
              <br />
              {{ user.phone_number}}
            </p>
          </div>
          <div>
            <div class="hee2 mt-3">
              <h6>
                <i class="fas fa-check-circle done mr-2"></i>2. DELIVERY METHOD
              </h6>
            </div>
            <div class="third2">
              <p>
                <b>Door Delivery</b>
                <br />
                Delivered between Friday 15 May and Thursday 18 June for ₦ {{ shippingAmount }}
                <br />
              </p>
            </div>
          </div>
          <div>
            <div class="hee2 mt-3">
              <h6>
                <i class="fas fa-check-circle done mr-2"></i> 3. PAYMENT METHOD
              </h6>
            </div>
            <div class="third2">
              <p>
                <b>How do you want to pay for your order?</b>
                <br />
                <b>Stay Safe, go cashless with .</b>
                <br />New Customers get 10% additional discount when you pay with your MasterCard capped at N1000.
                <br />Card payments are supported by all banks.
              </p>
              <img src="https://static.jumia.com.ng/cms/sprites/reordered-strip.png" />
              <br />
              <br />

              <div>
                <div class="priceDetails">
                  <!-- style Subtotal -->

                  <div class="d-flex">
                    <p>Subtotal</p>

                    <p class="ml-auto">₦ {{ totalPrice }}</p>
                  </div>

                  <!-- style Shipping amount -->

                  <!-- <div class="d-flex">
                    <p>Shipping amount</p>

                    <p class="ml-auto">
                      <b>₦ {{ shippingAmount }}</b>
                    </p>
                  </div>-->
                </div>

                <div class="border-bottom pb-2 mb-1 mt-n2"></div>

                <div class="priceDetails mb-n1">
                  <!-- style total payment -->
                  <div class="d-flex">
                    <p>
                      <b>Total</b>
                    </p>

                    <p class="ml-auto totalPay">₦ {{ totalPayment }}</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  block
                  class="add"
                  style="background: #ff9900; 
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold"
                  type="button"
                  @click.prevent="payWithPaystack"
                >CONFIRM ORDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    // get cart total price
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    }
  },
  methods: {
    payWithPaystack() {
      var handler = PaystackPop.setup({
        key: "pk_test_5ddb8c83f9bad84d2c7b4c8c166ed8b8c9d830c5",
        email: this.user.email,
        amount: this.totalPrice,
        currency: "NGN",
        ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        metadata: {
          custom_fields: [
            {
              display_name: "Mobile Number",
              variable_name: "mobile_number",
              value: "+2348012345678"
            }
          ]
        },
        callback: function(response) {
          alert("success. transaction ref is " + response.reference);
        },
        onClose: function() {
          alert("window closed");
        }
      });
      handler.openIframe();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>