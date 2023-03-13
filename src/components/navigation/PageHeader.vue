<template>
  <div class="app-header header header-1 p-4">
    <div class="container">
      <div class="d-flex align-items-center">
        <a class="animated-arrow horizontal-navtoggle-1-1"><span></span></a>
        <a class="header-brand" href="index.html">
          <img
            src="@/assets/zanex/images/brand/logo-3.png"
            class="header-brand-img logo-3"
            alt="Zanex logo"
          />
          <img
            src="@/assets/zanex/images/brand/logo.png"
            class="header-brand-img logo"
            alt="Zanex logo"
          />
        </a>
        <!-- LOGO -->

        <ul class="nav nav-pills nav-pills-circle" id="tabs_2" role="tablist">
          <li class="nav-item">
            <a class="nav-link border py-2 px-4 m-1" aria-selected="false">
              <span class="nav-link-icon d-block"
                ><i class="fe fe-map"></i> Peta Tematik
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link border py-2 px-4 m-1" aria-selected="false">
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
          <div class="dropdown d-md-flex notifications">
            <a class="nav-link icon" data-bs-toggle="">
              <i class="fe fe-moon"></i>
            </a>
          </div>
          <!-- NOTIFICATIONS -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const keyword = ref("");

function searchWilayah() {
  if (keyword.value == "") router.push({ name: "search" });
  else router.push({ name: "search", query: { keyword: keyword.value } });
}

function goToPilihTematik() {
  console.log("masuk wilayah");
}

function goHome() {
  router.push({ name: "home" });
}
</script>
