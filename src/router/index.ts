import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import SummaryView from "@/views/SummaryView.vue";
import MonographView from "@/views/MonographView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/monograph",
      name: "monograph",
      component: MonographView,
    },
  ],
});

export default router;
