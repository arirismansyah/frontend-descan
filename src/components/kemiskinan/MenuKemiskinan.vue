<template>
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <!-- BANNER -->
      <BannerKemiskinan></BannerKemiskinan>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-6 col-md-6 d-flex align-items-stretch">
      <!-- TAB TINGKAT KEMISKINAN -->
      <TingkatKemiskinan></TingkatKemiskinan>
    </div>
    <div class="col-lg-6 col-md-6 d-flex align-items-stretch">
      <!-- TAB BANTUAN -->
      <BantuanKemiskinan></BantuanKemiskinan>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-12 col-md-12">
      <!-- MAP & TABLE -->
      <div class="row">
        <!-- FILTER -->
      </div>

      <div class="row">
        <!-- MAP -->
        <div class="col-lg-12 col-md-12">
          <MapKemiskinan></MapKemiskinan>
        </div>
      </div>

      <div class="row">
        <!-- TABLE -->
        <div class="col-lg-12 col-md-12">
          <DaftarKeluarga></DaftarKeluarga>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BannerKemiskinan from "./BannerKemiskinan.vue";
import BantuanKemiskinan from "./BantuanKemiskinan.vue";
import TingkatKemiskinan from "./TingkatKemiskinan.vue";
import MapKemiskinan from "./MapKemiskinan.vue";
import DaftarKeluarga from "./DaftarKeluarga.vue";

import { ref } from "vue";
import { useMonografWilayahStore } from "@/stores/monografWilayah";
const monographStore = useMonografWilayahStore();
</script>
