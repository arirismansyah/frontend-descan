<template>
  <body v-bind:class="themeStore.light ? 'light-mode' : 'dark-mode'">
    <div class="page">
      <div class="page-main">
        <div class="bg-container view">
          <img class="img-bg" src="@/assets/images/footage/img_(8).jpg" />
          <div class="mask-bg">
            <div class="row"></div>
          </div>
          <div class="header-bg justify-content-center text-center">
            <div class="row justify-content-center text-center mt-0">
              <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h1 class="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">
                  Desa Bumi
                  <span class="underline-3 style-2 yellow">Sriwijaya</span>
                </h1>

                <div
                  class="row justify-content-center"
                  data-cue="slideInDown"
                  data-group="page-title"
                  data-show="true"
                  style="
                    animation-name: slideInDown;
                    animation-duration: 700ms;
                    animation-timing-function: ease;
                    animation-delay: 600ms;
                    animation-direction: normal;
                    animation-fill-mode: both;
                  "
                >
                  <div class="col-lg-12">
                    <div class="row justify-content-center">
                      <figure
                        class="img-responsive overlay overlay-1 hover-scale mb-0 p-6"
                      >
                        <a @click="toWilayah('16')">
                          <img
                            class="img-responsive"
                            src="@/assets/images/prov-logo/logo1600.png"
                            alt=""
                            style="
                              max-height: 150px;
                              width: auto;
                            " /><span></span
                        ></a>
                        <figcaption>
                          <h6 class="from-top mt-8">Kunjungi</h6>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>

                <div class="row justify-content-center">
                  <div class="col-lg-6 col-md-6">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Cari Wilayah..."
                        v-model="propsShadow.keyword"
                        v-on:keyup.enter="searchWilayah"
                      />
                      <span
                        class="input-group-text btn btn-info"
                        @click="searchWilayah"
                        ><i class="fe fe-search"></i
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /column -->
            </div>
          </div>
          <div class="overflow-hidden divider-bg">
            <div class="divider text-light mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
                <path
                  fill="currentColor"
                  d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="main-content"
          style="position: absolute; top: 65%; z-index: 5; right: 0; left: 0"
        >
          <div class="row mx-1">
            <!-- unit logo it -->
            <UnitLogo
              v-for="(data, idx) in state.kabKota"
              :key="data.kode_kab"
              :kodeWilayah="data.kode_prov + data.kode_kab"
              :name="data.nama"
            >
            </UnitLogo>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  onMounted,
  inject,
  computed,
  defineAsyncComponent,
} from "vue";
import axios from "axios";
import type { Wilayah } from "@/models/Wilayah";
import { useThemeStore } from "@/stores/theme";
import UnitLogo from "../landing/UnitLogo.vue";
import { useMenuStore } from "@/stores/menuMonograph";
import { useRouter, RouterLink, useRoute } from "vue-router";

const router = useRouter();

const themeStore = useThemeStore();

const urlApi = inject("urlApi");
let props = defineProps({
  keyword: { type: String },
});
let propsShadow = Object.assign({}, props);
const state = reactive({
  wilayahs: [] as Wilayah[],
  kabKota: [],
});

const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");

async function getKabKot() {
  loadingState.value = "false";

  await axios
    .get(`${urlApi}wilayah/16`)
    .then(({ data }) => {
      state.kabKota = data.datas;
    })
    .catch(({ response }) => {
      console.error(response);
    });
}

onMounted(() => {
  getKabKot();
});

const keyword = ref("");

const menuStore = useMenuStore();

function searchWilayah() {
  menuStore.changeMenu("search");
  keyword.value = propsShadow.keyword;
  if (keyword.value == "") router.push({ name: "search" });
  else router.push({ name: "search", query: { keyword: keyword.value } });
}

function toWilayah(kodeWilayah: string) {
  menuStore.changeMenu("monograph");
  router.push({ path: "/monograph/" + kodeWilayah });
}
</script>
