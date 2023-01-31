<template>
  <v-card elevation="8">
    <v-card-title>
      <strong>Batas Wilayah</strong>
    </v-card-title>
    <v-card-subtitle>Nama Wilayah</v-card-subtitle>
    <v-card-text>
      <!-- map -->
      <v-row>
        <v-col cols="12" id="mapid" class="d-flex" style="height: 400px">
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";

import leaflet from "leaflet";

export default {
  setup() {
    let mymap;
    onMounted(() => {
      mymap = leaflet.map("mapid").setView([-2.9655006, 104.7335063], 13);
      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(mymap);
      let circle = leaflet
        .circle([-2.9655006, 104.7335063], {
          color: "red",
          fillColor: "#f03",
          fillOpacity: 0.5,
          radius: 2000,
        })
        .addTo(mymap);
    });
  },
};
</script>
