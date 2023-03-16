<template>
  <body v-bind:class="themeStore.light ? 'light-mode' : 'dark-mode'">
    <div class="page">
      <div class="page-main">
        <!-- app-Header -->
        <PageHeader></PageHeader>
        <!-- /app-Header -->

        <!--app-content open-->
        <div class="main-content mt-0">
          <div class="">
            <!-- CONTAINER -->
            <div class="main-container container-fluid">
              <!-- PAGE-HEADER -->
              <SubNav></SubNav>
              <!-- PAGE-HEADER END -->

              <!-- ROW-0 -->
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <HeaderSummary></HeaderSummary>
                </div>
              </div>
              <!-- ROW-0 -->

              <!-- ROW-1 OPEN - BANNER -->
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <DescSummary></DescSummary>
                </div>
              </div>
              <!-- ROW-1 CLOSED -->

              <!-- ROW-2 OPEN - ADMINISTRASI -->
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <AdministrasiSummary></AdministrasiSummary>
                </div>
              </div>
              <!-- ROW-2 CLOSED -->

              <!-- ROW-3 OPEN -->
              <div class="row">
                <div class="col-md-8 col-lg-8">
                  <!-- MAP -->
                  <div class="row">
                    <div class="col-md-12 col-lg-12">
                      <MapSummary></MapSummary>
                    </div>
                  </div>
                  <!-- MAP CLOSED -->
                  <!-- PENDIDIKAN -->
                  <div class="row">
                    <div class="col-md-12 col-lg-12">
                      <EduSummary></EduSummary>
                    </div>
                  </div>
                  <!-- PENDIDIKAN CLOSED -->
                </div>
                <!-- DEMOGRAFI -->
                <div class="col-md-4 col-lg-4 d-flex align-items-stretch">
                  <DemographSummary></DemographSummary>
                </div>
                <!-- DEMOGRAFI CLOSED -->
              </div>
              <!-- ROW-3 CLOSED -->

              <!-- ROW-4 OPEN -->
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <EmploySummary></EmploySummary>
                </div>
              </div>
              <!-- ROW-4 CLOSED -->
            </div>
          </div>
        </div>
        <!-- CONTAINER CLOSED -->
      </div>

      <!-- FOOTER -->
      <PageFooter></PageFooter>

      <!-- FOOTER CLOSED -->
    </div>
  </body>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from "vue";
import axios from "axios";
import { storeToRefs } from "pinia";

import { useMonografWilayahStore } from "@/stores/monografWilayah";
import { usePengurusStore } from "@/stores/pengurusWilayah";
import { useThemeStore } from "@/stores/theme";

import PageHeader from "@/components/navigation/PageHeader.vue";
import PageFooter from "@/components/navigation/PageFooter.vue";
import SubNav from "@/components/navigation/SubNav.vue";
import AdministrasiSummary from "@/components/summary/AdministrasiSummary.vue";
import DescSummary from "@/components/summary/DescSummary.vue";
import DemographSummary from "@/components/summary/DemographSummary.vue";
import EduSummary from "@/components/summary/EduSummary.vue";
import EmploySummary from "@/components/summary/EmploySummary.vue";
import MapSummary from "@/components/summary/MapSummary.vue";
import HeaderSummary from "../summary/HeaderSummary.vue";

const themeStore = useThemeStore();
</script>

<style scoped lang="css" src="@/assets/zanex/css/style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/dark-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/skin-modes.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/transparent-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/colors/color1.css"></style>
