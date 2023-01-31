<template>
  <v-row>
    <v-col cols="12">
      <!-- BANNER MONOGRAPH -->
      <BannerMonograph></BannerMonograph>
      <!-- BANNER MONOGRAPH -->
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <!-- INFORMASI UMUM DESA -->
      <GeneralMonograph></GeneralMonograph>
      <!-- INFORMASI UMUM DESA -->
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="8">
      <v-row>
        <v-col cols="12">
          <!-- BATAS DESA -->
          <MapMonograph></MapMonograph>
          <!-- BATAS DESA -->
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <!-- PENDIDIKAN DESA -->
          <EduMonograph></EduMonograph>
          <!-- PENDIDIKAN DESA -->
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4">
      <!-- DEMOGRAFI DESA -->
      <DemographMonograph style="height: 100%"></DemographMonograph>
      <!-- DEMOGRAFI DESA -->
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <!-- LAPANGAN PEKERJAAN DESA -->
      <EmployMonograph></EmployMonograph>
      <!-- LAPANGAN PEKERJAAN DESA -->
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import BannerMonograph from "@/components/monograph/BannerMonograph.vue";
import GeneralMonograph from "@/components/monograph/GeneralMonograph.vue";
import MapMonograph from "@/components/monograph/MapMonograph.vue";
import EduMonograph from "@/components/monograph/EduMonograph.vue";
import DemographMonograph from "@/components/monograph/DemographMonograph.vue";
import EmployMonograph from "@/components/monograph/EmployMonograph.vue";
import { ref } from "vue";
</script>
