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

<style scoped lang="css" src="@/assets/zanex/css/style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/dark-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/skin-modes.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/transparent-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/colors/color1.css"></style>
