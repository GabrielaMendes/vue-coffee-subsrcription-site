import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-us",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/create-plan",
    name: "create",
    component: () => import("../views/CreatePlanView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from) {
    if (from.path === to.path) {
      return {
        top: 0,
        left: 0,
        behavior: "smooth",
      };
    }

    return { top: 0, left: 0 };
  },
});

export default router;
