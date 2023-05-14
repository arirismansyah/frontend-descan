<template>
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <div class="card">
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
              <div class="col-lg col-md" v-if="state.listPengurus.length > 0">
                <ListPengurus
                  v-for="(data, idx) in state.listPengurus"
                  :key="idx"
                  :periode_awal_aktif="data.periode_awal_aktif"
                  :periode_akhir_aktif="data.periode_akhir_aktif"
                  :nama_ketua="data.nama_ketua"
                  :nama_wakil="data.nama_wakil"
                  :nama_sekretaris="data.nama_sekretaris"
                  :pengurus_lainnya="data.pengurus_lainnya"
                >
                </ListPengurus>
              </div>
              <div v-else class="col-lg-4 col-md-4">Belum ada data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LoaderElement from "@/components/navigation/LoaderElement.vue";
import ListPengurus from "@/components/monograph/pengurus/ListPengurus.vue";
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
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import type { Pengurus } from "@/models/Pengurus";

const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");
const state = reactive({
  listPengurus: [] as Pengurus[],
});
const kodeWilayahStore = useKodeWilayahStore();

async function loadPengurus() {
  loadingState.value = "false";
  await axios
    .get(`${urlApi}pengurus/${kodeWilayahStore.kode?.kode}/list`)
    .then(({ data }) => {
      if (data.status == "success") {
        state.listPengurus = data.datas.data;
        loadingState.value = "success";
      } else {
        console.log("Data gagal disimpan, silahkan ulangi lagi");
      }
    });
}
onMounted(() => {
  loadPengurus();
});
</script>
