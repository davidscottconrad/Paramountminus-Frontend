import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Admin from "../views/Admin.vue";
import WatchNow from "../components/video/WatchNow.vue";
import AboutView from "../views/AboutView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/watch-now/:id",
    name: "WatchNow",
    component: WatchNow,
    props: true, // Enable passing route params as props
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
