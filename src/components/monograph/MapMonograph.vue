<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Peta Batas Wilayah</h3>
    </div>
    <div class="card-body">
      <LoaderElement v-if="!isLoaded"></LoaderElement>
      <div v-else id="map-batas">
        <!-- map leaflet -->
        <div id="map"></div>
        <!-- map leaflet -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import modules
import axios from "axios";
import { ref, inject, computed, onMounted } from "vue";

// import stores
import { useMonografWilayahStore } from "@/stores/monografWilayah";
import { useMapDesaStore } from "@/stores/mapDesa";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";

// import components
import LoaderElement from "../navigation/LoaderElement.vue";

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
      console.log(map.value);
    }
  });
}

onMounted(() => {
  let kodeKab = kodeWilayahStore.kode?.kode.substring(0, 4);
  getMap(kodeKab);
});
</script>
