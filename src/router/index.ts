import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import SummaryView from "@/views/SummaryView.vue";
import SearchView from "@/views/SearchView.vue";

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
			path: "/search",
			name: "search",
			component: SearchView,
		},
	],
});

export default router;
