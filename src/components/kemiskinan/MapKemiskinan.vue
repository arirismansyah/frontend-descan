<template>
    <v-row>
        <v-col col="12">
            <v-card elevation="4">
                <v-card-title>
                    <strong>Peta Wilayah</strong>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" id="mapid" class="d-flex" style="height: 400px">
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
  
<script setup>
import { ref, computed, onMounted, inject } from "vue";
import leaflet from "leaflet";
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useMonografWilayahStore } from '@/stores/monografWilayah'
import { useKeluargaStore } from "@/stores/kemiskinanWilayah";

const urlApi = inject('urlApi')
let mymap;

const { infoWilayah } = storeToRefs(useMonografWilayahStore())
// const { dataKeluarga } = storeToRefs(useKeluargaStore())
// console.log(dataKeluarga.value?.data);
// const geoJson = computed(() => {
//     // return infoWilayah.nama
// })

var marker = [-2.991348, 104.759168];

onMounted(() => {
    mymap = leaflet.map("mapid").setView([-2.9655006, 104.7335063], 13);
    leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(mymap);

    var marker = [-2.991348, 104.759168];
    leaflet.marker(marker, {}).bindPopup("<b>Hello world!</b><br>I am a popup.").addTo(mymap);
})
</script>
  