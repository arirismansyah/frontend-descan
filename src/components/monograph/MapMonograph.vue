<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Peta Batas Wilayah</h3>
    </div>
    <div class="card-body">
      <LoaderElement v-if="!isLoaded"></LoaderElement>
      <div v-else id="map-batas">
        <!-- map leaflet -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref, inject, computed, onMounted } from "vue";
import { useMonografWilayahStore } from "@/stores/monografWilayah";
import { useMapDesaStore } from "@/stores/mapDesa";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import LoaderElement from "../navigation/LoaderElement.vue";
import "leaflet/dist/leaflet.css";

const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");
const monographStore = useMonografWilayahStore();
const mapStore = useMapDesaStore();
const kodeWilayahStore = useKodeWilayahStore();
const map = ref(null);

async function getMap(kodeKab: string) {
  loadingState.value = "false";
  await axios.get(`${urlApi}geo/final_desa_${kodeKab}`).then(({ data }) => {
    if (data.features == null) {
      alert("geojson null");
    } else {
      loadingState.value = "success";
      mapStore.$state;
      map.value = data.features;
      alert(map);
    }
  });
}

onMounted(() => {
  const kodeKab = kodeWilayahStore.$state.kode.substring(0, 4);
  getMap(kodeKab);
});
</script>
