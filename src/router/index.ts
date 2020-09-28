import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Layout from "@/views/layout/index.vue";
import Clean from "@/views/layout/clean.vue";

Vue.use(VueRouter);

const children: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/domains/home/index.vue")
  },
  {
    path: "/favorite-views",
    name: "favorite",
    component: () => import("@/views/domains/FavoriteViews.vue")
  }
];

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Layout,
      children
    },
    {
      path: "/image",
      component: Clean,
      children: [
        {
          path: ":id",
          name: "full-screen-image",
          component: () => import("@/views/domains/FullScreenImage.vue")
        }
      ]
    },
    {
      path: "*",
      component: Layout,
      children: [
        {
          path: "*",
          name: "not-found",
          component: () => import("@/views/domains/NotFound.vue")
        }
      ]
    }
  ]
});

export default router;
