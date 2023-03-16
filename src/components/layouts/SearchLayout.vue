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
                <!-- FORM SEARCH -->
                <div class="col-lg-12 col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Pilih Wilayah</h3>
                    </div>
                    <div class="card-body">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search for..."
                          v-model="propsShadow.keyword"
                          v-on:keyup.enter="loadSearchWilayah"
                        />
                        <span
                          class="input-group-text btn btn-info"
                          @click="loadSearchWilayah"
                          ><i class="fe fe-search"></i
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ROW-0 -->

              <!-- ROW-1 RESULT-->
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="card bg-info">
                    <div class="card-body justify-content-middle scroll">
                      <div class="content vscroll" style="max-height: 600px">
                        <div
                          v-if="!isLoaded"
                          class="row d-flex justify-content-center justify-content-middle"
                        >
                          <LoaderElement></LoaderElement>
                        </div>
                        <div
                          v-else
                          class="row d-flex justify-content-center justify-content-middle"
                        >
                          <div
                            class="col-lg-6 col-md-6"
                            v-if="state.wilayahs.length > 0"
                          >
                            <SearchResult
                              v-for="(data, idx) in state.wilayahs"
                              :key="idx"
                              :kode="
                                data.kode_prov +
                                data.kode_kab +
                                data.kode_kec +
                                data.kode_desa
                              "
                              :nama="(data.nama as string)"
                              :nama_prov="(data.nama_prov as string)"
                              :nama_kab="(data.nama_kab as string)"
                              :nama_kec="(data.nama_kec as string)"
                            ></SearchResult>
                          </div>
                          <div v-else class="col-lg-4 col-md-4">
                            <SearchIllustration></SearchIllustration>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ROW-1 -->
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
import PageHeader from "../navigation/PageHeader.vue";
import PageFooter from "../navigation/PageFooter.vue";
import SubNav from "../navigation/SubNav.vue";
import LoaderElement from "@/components/navigation/LoaderElement.vue";

import SearchResult from "@/components/search/SearchResult.vue";
import SearchIllustration from "@/components/search/SearchIllustration.vue";

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
const themeStore = useThemeStore();

const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");

const urlApi = inject("urlApi");
let props = defineProps({
  keyword: { type: String },
});
const state = reactive({
  wilayahs: [] as Wilayah[],
});
let propsShadow = Object.assign({}, props);

async function loadSearchWilayah() {
  loadingState.value = "false";
  await axios
    .post(`${urlApi}wilayah/search`, {
      keyword: propsShadow.keyword,
    })
    .then(({ data }) => {
      if (data.status == "success") {
        state.wilayahs = data.datas;
        loadingState.value = "success";
      } else {
        console.log("Data gagal disimpan, silahkan ulangi lagi");
      }
    });
}
onMounted(() => {
  loadSearchWilayah();
});
</script>

<style scoped lang="css" src="@/assets/zanex/css/style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/dark-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/skin-modes.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/transparent-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/colors/color1.css"></style>
