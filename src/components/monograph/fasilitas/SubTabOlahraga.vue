<template>
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <div class="card">
        <div class="card-body justify-content-middle scroll">
          <div class="content vscroll" style="max-height: 600px">
            <!-- CONTENT -->
            <div
              v-if="!isLoaded"
              class="row d-flex justify-content-center justify-content-middle"
            >
              <LoaderElement></LoaderElement>
            </div>

            <div v-else>
              <div class="container">
                <div class="row">
                  <ListFasilitas
                    v-for="(data, idx) in state.fasOlahraga"
                    :key="idx"
                    :nama_variable="data.nama_variabel"
                    :deskripsi_variable="data.deskripsi_variabel"
                    :kategori_variable="data.kategori_variabel"
                    :nilai="data.nilai"
                    :index="idx"
                    kategori_custom="olahraga"
                  ></ListFasilitas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LoaderElement from "@/components/navigation/LoaderElement.vue";
import {
  ref,
  reactive,
  onMounted,
  inject,
  computed,
  defineAsyncComponent,
} from "vue";
import axios from "axios";
import type { DataDashboard } from "@/models/DataDashboard";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import ListFasilitas from "./ListFasilitas.vue";

const kodeWilayahStore = useKodeWilayahStore();
const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");
const state = reactive({
  fasOlahraga: [] as DataDashboard[],
});

async function getFasOlahraga() {
  loadingState.value = "false";
  await axios
    .get(`${urlApi}dashboard/${kodeWilayahStore.kode?.kode}/sarana_olahraga`)
    .then(({ data }) => {
      if (data.status == "success") {
        state.fasOlahraga = data.datas;
        console.log(state.fasOlahraga);

        loadingState.value = "success";
      } else {
        console.log("Data gagal disimpan, silahkan ulangi lagi");
      }
    });
}

onMounted(() => {
  getFasOlahraga();
});
</script>
