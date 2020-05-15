<template>
  <div class="bg">
    <b-container>
      <b-card
        no-body
        class="overflow-hidden align-self-center mx-auto"
        align="center"
        style="max-width: 540px; border-radius:20px"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="url" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <form @submit.prevent="login">
                  <h2>Login</h2>
                  <div class="info"></div>
                  <input type="text" v-model="email" placeholder="Email" />
                  <input
                    type="password"
                    v-model="password"
                    placeholder="Password"
                  />
                  <button>Login</button>
                  <h6>
                    Don't have an account? Register
                    <span> <a href="/register" to="">here</a> </span>
                  </h6>
                </form>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: require("@/assets/login-image.jpeg"),
      email: "",
      password: "",
    };
  },
  methods: {
    // login: function() {
    //   axios
    //     .post("http://localhost:5000/signin", {
    //       email: this.email,
    //       password: this.password,
    //     })
    //     .then((res) => {
    //       console.log("my login response", res),
    //         this.$cookie.set("token", res.data.token),
    //         (this.email = ""),
    //         (this.password = "");
    //       this.$router.push("/");
    //     })
    //     .catch((err) => {
    //       console.log("my error", err);
    //     });
    // },
    login() {
      axios
        .post("http://localhost:5000/signin", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log("my world", res);
          this.$cookie.set("token", res.data.token),
            this.$store.dispatch("SET_TOKEN", res.data.token);
          this.$store.dispatch("SET_USER", res.data.user);
          this.$router.push({ name: "Dashboard" });
        });

      (this.email = ""), (this.password = "");
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: rgb(209, 209, 207);
}

form {
  display: flex;
  flex-direction: column;
  /* padding: 15px; */
}
h2 {
  font-family: "Archivo Black", sans-serif;
  /* color: #e0dada; */
  color: #000000;
  margin-left: auto;
  margin-right: auto;
}
h6 {
  font-size: 12px;
}

.info {
  width: 100%;
  padding: 1em 5px;
  text-align: center;
  min-height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  height: 35px;
  padding: 5px 5px;
  margin: 10px 0px;
  background-color: #e0dada;
  border: none;
}
button {
  height: 40px;
  padding: 5px 5px;
  margin: 10px 0px;
  font-weight: bold;
  /* background-color: #000000; */
  background-color: #be5256;
  border: none;
  color: #e0dada;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #711f1b;
}

@media screen and (max-width: 780px) {
  form {
    width: 90%;
  }
}
</style>
