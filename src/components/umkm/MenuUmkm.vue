<template>
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <!-- BANNER -->
      <BannerUmkm></BannerUmkm>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-12 col-md-12">
      <!-- CATEGORY -->
      <CategoryUmkm></CategoryUmkm>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-12 col-md-12">
      <!-- MAP -->
      <MapUmkm></MapUmkm>
    </div>
  </div>
</template>
<script setup lang="ts">
import BannerUmkm from "./BannerUmkm.vue";
import CategoryUmkm from "./CategoryUmkm.vue";
import MapUmkm from "./MapUmkm.vue";

import { ref } from "vue";
</script>
