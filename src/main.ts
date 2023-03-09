import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@/assets/zanex/css/style.css";
import "@/assets/zanex/css/dark-style.css";
import "@/assets/zanex/css/skin-modes.css";
import "@/assets/zanex/css/transparent-style.css";
import "@/assets/zanex/css/icons.css";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.config.globalProperties.urlApi = "https://descan.bpssumsel.com/api/";
app.provide("urlApi", "https://descan.bpssumsel.com/api/");

app.mount("#app");
