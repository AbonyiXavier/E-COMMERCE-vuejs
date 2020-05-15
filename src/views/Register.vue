<template>
  <div class="container">
    <div class="row py-5 mt-4 align-items-center">
      <!-- For Demo Purpose -->
      <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
        <img
          src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
          alt=""
          class="img-fluid mb-3 d-none d-md-block"
        />
        <h1>Create an Account</h1>
      </div>

      <!-- Registeration Form -->
      <div class="col-md-7 col-lg-6 ml-auto">
        <form @submit.prevent="register">
          <div class="row">
            <!-- First Name -->
            <div class="input-group col-lg-6 mb-4">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white px-4 border-md border-right-0"
                >
                  <i class="fa fa-user text-muted"></i>
                </span>
              </div>
              <input
                v-model="first_name"
                id="firstName"
                type="text"
                name="firstname"
                placeholder="First Name"
                class="form-control bg-white border-left-0 border-md"
              />
            </div>

            <!-- Last Name -->
            <div class="input-group col-lg-6 mb-4">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white px-4 border-md border-right-0"
                >
                  <i class="fa fa-user text-muted"></i>
                </span>
              </div>
              <input
                v-model="last_name"
                id="lastName"
                type="text"
                name="lastname"
                placeholder="Last Name"
                class="form-control bg-white border-left-0 border-md"
              />
            </div>

            <!-- Email Address -->
            <div class="input-group col-lg-12 mb-4">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white px-4 border-md border-right-0"
                >
                  <i class="fa fa-envelope text-muted"></i>
                </span>
              </div>
              <input
                v-model="email"
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                class="form-control bg-white border-left-0 border-md"
              />
            </div>

            <!-- Phone Number -->
            <div class="input-group col-lg-12 ">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white px-4 border-md border-right-0"
                >
                  <i class="fa fa-phone-square text-muted"></i>
                </span>
              </div>
              <input
                v-model="phone"
                id="phoneNumber"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                class="form-control bg-white border-md border-left-0 pl-3"
              />
            </div>
            .

            <!-- Address -->
            <div class="input-group col-lg-12 mb-4">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white px-4 border-md border-right-0"
                >
                  <i class="fas fa-address-card text-muted"></i>
                </span>
              </div>
              <input
                v-model="address"
                id="address"
                type="text"
                name="address"
                placeholder="Address"
                class="form-control bg-white border-md border-left-0 pl-3"
              />
            </div>

            <!-- City -->
            <div class="input-group col-lg-12 mb-4">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white px-4 border-md border-right-0"
                >
                  <i class="fas fa-city text-muted"></i>
                </span>
              </div>
              <input
                v-model="city"
                id="city"
                type="text"
                name="city"
                placeholder="City"
                class="form-control bg-white border-md border-left-0 pl-3"
              />
            </div>

            <!-- Password -->
            <div class="input-group col-lg-6 mb-4">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white px-4 border-md border-right-0"
                >
                  <i class="fa fa-lock text-muted"></i>
                </span>
              </div>
              <input
                v-model="password"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                class="form-control bg-white border-left-0 border-md"
              />
            </div>

            <!-- Password Confirmation -->
            <!-- <div class="input-group col-lg-6 mb-4">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white px-4 border-md border-right-0"
                >
                  <i class="fa fa-lock text-muted"></i>
                </span>
              </div>
              <input
                v-model="password"
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm Password"
                class="form-control bg-white border-left-0 border-md"
              />
            </div> -->

            <!-- Submit Button -->
            <div class="form-group col-lg-12 mx-auto mb-0">
              <a href="#" class="btn btn-dark btn-block py-2">
                <input
                  class="font-weight-bold btn btn-dark btn-block py-2"
                  type="submit"
                  value="Create your account"
                />
              </a>
            </div>

            <!-- Divider Text -->
            <div
              class="form-group col-lg-12 mx-auto d-flex align-items-center my-4"
            >
              <div class="border-bottom w-100 ml-5"></div>
              <span class="px-2 small text-muted font-weight-bold text-muted"
                >OR</span
              >
              <div class="border-bottom w-100 mr-5"></div>
            </div>

            <!-- Already Registered -->
            <div class="text-center w-100">
              <p class="text-muted font-weight-bold">
                Already Registered?
                <a href="/login" class="text-primary ml-2">Login</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      city: "",
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          phone_number: this.phone,
          address: this.address,
          city: this.city,
        })
        .then((res) => {
          console.log("response", res);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => console.log("my error i see", err));
    },
  },
};
</script>

<style scoped>
/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

.border-md {
  border-width: 2px;
}

.btn-facebook {
  background: #405d9d;
  border: none;
}

.btn-facebook:hover,
.btn-facebook:focus {
  background: #314879;
}

.btn-twitter {
  background: #42aeec;
  border: none;
}

.btn-twitter:hover,
.btn-twitter:focus {
  background: #1799e4;
}

/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/

body {
  min-height: 100vh;
}

.form-control:not(select) {
  padding: 1.5rem 0.5rem;
}

select.form-control {
  height: 52px;
  padding-left: 0.5rem;
}

.form-control::placeholder {
  color: #ccc;
  font-weight: bold;
  font-size: 0.9rem;
}
.form-control:focus {
  box-shadow: none;
}
</style>
