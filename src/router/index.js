import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const isServer = typeof window === 'undefined';
let history = isServer ? createMemoryHistory() : createWebHistory();

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
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
]

export default function () {
  return createRouter({ routes, history });
}