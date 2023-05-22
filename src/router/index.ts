import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import SearchView from "@/views/SearchView.vue";
import TematikView from "@/views/TematikView.vue";
import MonographView from "@/views/MonographView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
    },

    {
      path: "/monograph/:kode",
      name: "monograph",
      component: MonographView,
    },
    {
      path: "/tematik/:kode",
      name: "tematik",
      component: TematikView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
  ],
});

export default router;
