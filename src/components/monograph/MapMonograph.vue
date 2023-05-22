<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Peta Batas Wilayah</h3>
    </div>
    <div class="card-body">
      <!-- map leaflet -->
      <div id="map" style="height: 350px">
        <LoaderElement v-if="!isLoaded"></LoaderElement>
      </div>
      <!-- map leaflet -->
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

async function getMap() {
  var map = leaflet.map("map");

  function style(feature) {
    return {
      fillColor: "#009EFF",
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }

  function mapInteractions(feature, layer) {
    if (feature.properties.nmdesa) {
      layer.bindPopup(`<table>
        <tbody>
          </tbody>
        <tr>
          <td>Id </td>
          <td>:</td>
          <td>
            ${feature.properties.iddesa}
          </td>
        </tr>
        <tr>
          <td>Nama Desa</td>
          <td>:</td>
          <td>
            ${feature.properties.nmdesa}
            </td>
        </tr>
        <tr>
          <td>Nama Kec</td>
          <td>:</td>
          <td>
            ${feature.properties.nmkec}
            </td>
        </tr>
        <tr>
          <td>Nama Kab/Kota</td>
          <td>:</td>
          <td>
            ${feature.properties.nmkab}
            </td>
        </tr>
        </table>`);
      layer.on("click", zoomToFeature);
      layer.on("mouseover", function () {
        this.setStyle({
          weight: 5,
          fillColor: "#FD8D3C",
          dashArray: "",
          fillOpacity: 0.7,
        });
        this.bringToFront();
      });
      layer.on("mouseout", function () {
        this.setStyle({
          fillColor: "#009EFF",
          weight: 2,
          opacity: 1,
          color: "white",
          dashArray: "3",
          fillOpacity: 0.7,
        });
      });
    }
  }

  let kodeWilayah = kodeWilayahStore.kode?.kode;
  let kodeKab = kodeWilayahStore.kode?.kode.substring(0, 4);

  loadingState.value = "false";
  await axios.get(`${urlApi}geo/final_desa_${kodeKab}`).then(({ data }) => {
    if (data.features == null) {
      alert("geojson null");
    } else {
      loadingState.value = "success";
      const tiles = leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      if (kodeWilayah?.length <= 4) {
        const multipolygon = leaflet.geoJSON(data, {
          onEachFeature: mapInteractions,
          style: style,
        });
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

          var multipolygon = leaflet.geoJSON(featureCollections, {
            onEachFeature: mapInteractions,
            style: style,
          });
          multipolygon.addTo(map);
          map.fitBounds(multipolygon.getBounds());
        } else {
          data.features.forEach((element) => {
            if (kodeWilayah == element.properties.iddesa) {
              console.log("here");

              var multipolygon = leaflet.geoJSON(element, {
                onEachFeature: mapInteractions,
                style: style,
              });

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
