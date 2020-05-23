import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
  Accept: "application.json",
  "Content-Type": "application/json",
  //   Authorization: this.$cookie.get("token"),
});

export default {
  getOrders() {
    return apiClient.get("/orders");
  },
  authUser() {
    return apiClient.get("/authUser");
  },
  addProducts() {
    return apiClient.get("/products");
  },
  productDetails(product_id) {
    return apiClient.get(`/products/${product_id}`);
  },
};
