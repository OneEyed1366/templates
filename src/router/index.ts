import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../ui/pages/Home.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Главная",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
