import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/////////////////////
import axios from "axios";



const apiURL = process.env.VUE_APP_API_URL;
const axiosInstance = axios.create({ baseURL: apiURL });

app.config.globalProperties.$axios = axiosInstance;
app.config.globalProperties.$apiURL = apiURL;


///////////////////////

createApp(App).use(router).mount("#app");
