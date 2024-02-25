import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

const app = createApp(App);
const apiURL = process.env.VUE_APP_API_URL;
const axiosInstance = axios.create({ baseURL: apiURL });
app.config.globalProperties.$axios = axiosInstance;

app.mount("#app");
