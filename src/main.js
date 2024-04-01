import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";

const apiURL = process.env.VUE_APP_API_URL;
const axiosInstance = axios.create({ baseURL: apiURL });

app.config.globalProperties.$axios = axiosInstance;
app.config.globalProperties.$apiURL = apiURL;
const app = createApp(App);

app.use(router); // Use the router in the app

app.mount("#app");
