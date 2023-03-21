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
                <div class="col-lg-3 col-md-3">
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <!-- NAVIGATION -->
                      <RightNav></RightNav>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 panel panel-primary">
                      <!-- PROFILE -->
                      <ProfileMonograph></ProfileMonograph>
                    </div>
                  </div>
                </div>

                <div class="col-lg-9 col-md-9">
                  <div
                    class="panel-body border border-primary rounded-top rounded-bottom"
                  >
                    <!-- Main Mono -->
                    <MonographMain
                      v-if="menuStore.menu == 'monograph'"
                    ></MonographMain>
                    <MenuKemiskinan
                      v-if="menuStore.menu == 'kemiskinan'"
                    ></MenuKemiskinan>
                    <MenuStunting
                      v-if="menuStore.menu == 'stunting'"
                    ></MenuStunting>
                    <MenuUmkm v-if="menuStore.menu == 'umkm'"></MenuUmkm>
                  </div>
                </div>
              </div>
              <!-- ROW-0 -->
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
import { useMenuStore } from "@/stores/menuMonograph";

import PageHeader from "../navigation/PageHeader.vue";
import PageFooter from "../navigation/PageFooter.vue";
import SubNav from "../navigation/SubNav.vue";
import RightNav from "../navigation/RightNav.vue";
import ProfileMonograph from "../monograph/ProfileMonograph.vue";

import MonographMain from "../monograph/MonographMain.vue";
import MenuKemiskinan from "../kemiskinan/MenuKemiskinan.vue";
import MenuStunting from "../stunting/MenuStunting.vue";
import MenuUmkm from "../umkm/MenuUmkm.vue";
import { computed } from "@vue/reactivity";

const monografStore = useMonografWilayahStore();
const pengurusStore = usePengurusStore();
const menuStore = useMenuStore();

const props = defineProps({ kode: { type: String } });
const urlApi = inject("urlApi");

async function loadWilayah() {
  await axios
    .get(`${urlApi}wilayah/${props.kode}/show`)
    .then(({ data }) => {
      monografStore.setWilayah(
        data.datas.result,
        data.datas.info_induk,
        data.datas.info_child
      );
    })
    .catch(({ response }) => {
      console.error(response);
    });
  await axios
    .get(`${urlApi}pengurus/${props.kode}/last`)
    .then(({ data }) => {
      pengurusStore.setPengurus(data.datas);
    })
    .catch(({ response }) => {
      console.error(response);
    });
}
onMounted(() => {
  loadWilayah();
});

const themeStore = useThemeStore();
</script>
