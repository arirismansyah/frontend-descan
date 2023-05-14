<template>
  <div class="app-header header header-1 p-4">
    <div class="container">
      <div class="d-flex align-items-center">
        <a class="animated-arrow horizontal-navtoggle-1-1"><span></span></a>
        <a class="header-brand" @click="goHome">
          <img
            src="@/assets/images/logo/logo.png"
            class="header-brand-img"
            alt="Zanex logo"
          />

          <span class="card-title mx-2">DESA BUMI SRIWIJAYA</span>
        </a>
        <!-- LOGO -->

        <ul class="nav nav-pills nav-pills-circle" id="tabs_2" role="tablist">
          <li class="nav-item" @click="goToPilihTematik()">
            <a
              v-bind:class="
                menuStore.menu == 'tematik'
                  ? 'nav-link active border py-2 px-4 m-1'
                  : 'nav-link border py-2 px-4 m-1'
              "
              aria-selected="false"
            >
              <span class="nav-link-icon d-block"
                ><i class="fe fe-map"></i> Peta Tematik
              </span>
            </a>
          </li>
          <li class="nav-item" @click="searchWilayah">
            <a
              v-bind:class="
                menuStore.menu == 'search'
                  ? 'nav-link active border py-2 px-4 m-1'
                  : 'nav-link border py-2 px-4 m-1'
              "
              aria-selected="false"
            >
              <span class="nav-link-icon d-block"
                ><i class="fe fe-search"></i> Pilih Wilayah</span
              >
            </a>
          </li>
        </ul>

        <div class="d-flex order-lg-2 ms-auto header-right-icons">
          <a
            href="javascript:void(0);"
            data-bs-toggle="search"
            class="nav-link nav-link-lg d-md-none navsearch"
            ><i class="ion ion-search"></i
          ></a>
          <div class="default-header">
            <form class="form-inline">
              <div class="search-element">
                <input
                  type="search"
                  class="form-control header-search"
                  placeholder="Eksplor Wilayah ini…"
                  aria-label="Search"
                  tabindex="1"
                />
                <button class="btn btn-primary-color" type="submit">
                  <i class="ion ion-search"></i>
                </button>
              </div>
            </form>
          </div>
          <!-- SEARCH -->
          <div class="dropdown d-md-flex">
            <a class="nav-link icon full-screen-link nav-link-bg">
              <i class="fe fe-maximize-2" id="fullscreen-button1"></i>
            </a>
          </div>
          <!-- FULL-SCREEN -->
          <div @click="changeTheme" class="dropdown d-md-flex notifications">
            <a class="nav-link icon" data-bs-toggle="">
              <i
                v-bind:class="themeStore.light ? 'fe fe-moon' : 'fe fe-sun'"
              ></i>
            </a>
          </div>
          <!-- NOTIFICATIONS -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter, RouterLink, useRoute } from "vue-router";
import { useThemeStore } from "@/stores/theme";
import { useMenuStore } from "@/stores/menuMonograph";

const router = useRouter();
const route = useRoute();
const keyword = ref("");

const menuStore = useMenuStore();

const searchPage = ref(false);
const tematikPage = ref(false);

function searchWilayah() {
  menuStore.changeMenu("search");
  if (keyword.value == "") router.push({ name: "search" });
  else router.push({ name: "search", query: { keyword: keyword.value } });
}

function goToPilihTematik() {
  try {
    router.push({ name: "tematik" });
    menuStore.changeMenu("tematik");
  } catch (error) {
    alert(error);
  }
}

function goHome() {
  router.push({ name: "home" });
}

const themeStore = useThemeStore();
function changeTheme() {
  themeStore.changeTheme();
}

onMounted(() => {
  window.onpopstate = function () {
    router.go(-1);
  };
});
</script>
