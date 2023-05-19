<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Peta Umkm</h3>
    </div>
    <div class="card-body">
      <div class="row">
        <div id="map" style="height: 350px">
          <LoaderElement v-if="!isLoaded"></LoaderElement>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import modules
import axios from "axios";
import { ref, inject, computed, onMounted } from "vue";
import leaflet from "leaflet";

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

async function getMap() {
  let kodeWilayah = kodeWilayahStore.kode?.kode;
  let kodeKab = kodeWilayahStore.kode?.kode.substring(0, 4);

  loadingState.value = "false";
  await axios.get(`${urlApi}geo/final_desa_${kodeKab}`).then(({ data }) => {
    if (data.features == null) {
      alert("geojson null");
    } else {
      loadingState.value = "success";
      var map = leaflet.map("map");
      const tiles = leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      if (kodeWilayah?.length <= 4) {
        const multipolygon = leaflet.geoJSON(data);
        multipolygon.addTo(map);
        map.fitBounds(multipolygon.getBounds());
      } else {
        if (kodeWilayah?.length <= 7) {
          var featureCollections = {
            type: "FeatureCollection",
            features: [],
          };
          data.features.forEach((element) => {
            const kodeKec =
              element.properties.kdprov +
              element.properties.kdkab +
              element.properties.kdkec;

            if (kodeWilayah == kodeKec) {
              featureCollections.features.push(element);
            }
          });

          var multipolygon = leaflet.geoJSON(featureCollections);
          multipolygon.addTo(map);
          map.fitBounds(multipolygon.getBounds());
        } else {
          data.features.forEach((element) => {
            if (kodeWilayah == element.properties.iddesa) {
              console.log("here");

              var multipolygon = leaflet.geoJSON(element);
              multipolygon.addTo(map);
              map.fitBounds(multipolygon.getBounds());
            }
          });
        }
      }
    }
  });
}

onMounted(() => {
  getMap();
});
</script>
