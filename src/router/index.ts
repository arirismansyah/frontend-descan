import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import SummaryView from "@/views/SummaryView.vue";
import SearchView from "@/views/SearchView.vue";
import PengurusView from "@/views/PengurusView.vue";
import KemiskinanView from "@/views/KemiskinanView.vue";
import StuntingView from "@/views/StuntingView.vue";
import UmkmView from "@/views/UmkmView.vue";
import TematikView from "@/views/TematikView.vue";

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
      path: "/summary/:kode",
      name: "summary",
      component: SummaryView,
    },
    {
      path: "/pengurus/:kode",
      name: "pengurus",
      component: PengurusView,
    },
    {
      path: "/kemiskinan/:kode",
      name: "kemiskinan",
      component: KemiskinanView,
    },
    {
      path: "/stunting/:kode",
      name: "stunting",
      component: StuntingView,
    },
    {
      path: "/umkm/:kode",
      name: "umkm",
      component: UmkmView,
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
