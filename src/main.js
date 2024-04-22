import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
// main.js or index.js
import "./main.css";
import "@mdi/font/css/materialdesignicons.css";
const app = createApp(App);
const apiURL = process.env.VUE_APP_API_URL;
const axiosInstance = axios.create({ baseURL: apiURL });

app.config.globalProperties.$axios = axiosInstance;
app.config.globalProperties.$apiURL = apiURL;

app.use(router); // Use the router in the app

app.mount("#app");
