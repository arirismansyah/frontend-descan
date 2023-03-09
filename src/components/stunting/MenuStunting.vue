<template>
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <!-- BANNER -->
      <BannerStunting></BannerStunting>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-6 col-md-6">
      <!-- COMPARE STUNTING -->
      <CompareStunting></CompareStunting>
    </div>
    <div class="col-lg-6 col-md-6">
      <!-- HISTORY STUNTING -->
      <HistoryStunting></HistoryStunting>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-12 col-md-12">
      <!-- MAP -->
      <MapStunting></MapStunting>
    </div>
  </div>
</template>
<script setup lang="ts">
import BannerStunting from "./BannerStunting.vue";
import CompareStunting from "./CompareStunting.vue";
import HistoryStunting from "./HistoryStunting.vue";
import MapStunting from "./MapStunting.vue";

import { ref } from "vue";
</script>
