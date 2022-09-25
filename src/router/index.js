import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

let history = createWebHistory();

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/usage",
    name: "usage",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Usage.vue"),
  },
];

export default function () {
  return createRouter({ routes, history });
}
