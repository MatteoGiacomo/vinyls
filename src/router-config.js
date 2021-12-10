import Home from "./views/Home.vue";
import List from "./views/List.vue";
import Stats from "./views/Stats.vue";
import Profile from "./views/Profile.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/stats",
    component: Stats,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

export default routes;
