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
    <v-row>
        <v-col cols="12">
            <v-card elevation="4">
                <v-card-title>
                    <strong>Daftar Keluarga</strong>
                </v-card-title>
                <v-table density="compact">
                    <thead>
                        <tr>
                            <th class="text-center">Nama Kepala Keluarga</th>
                            <th class="text-center">No KK</th>
                            <th class="text-center">Tingkat Kesejahteraan</th>
                        </tr>
                    </thead>
                    <tbody v-if="dataKeluarga">
                        <tr v-for="item in dataKeluarga.data" :key="item.no_kk">
                            <td> <v-btn @click="zoomOnMap(item.latitude, item.longitude)" variant="plain"
                                    color="indigo-darken-4">
                                    {{
                                        item.nama_kepala }}</v-btn> </td>
                            <td>{{ item.no_kk }}</td>
                            <td class=" text-center">
                                <v-chip v-if="item.status_kesejahteraan == 1" class="ma-2" color="green">
                                    Tidak Miskin
                                </v-chip>
                                <v-chip v-else-if="item.status_kesejahteraan == 2" class="ma-2" color="orange">
                                    Miskin
                                </v-chip>
                                <v-chip v-else class="ma-2" color="red">
                                    Sangat Miskin
                                </v-chip>
                            </td>
                        </tr>
                    </tbody>
                </v-table>

                <template v-if="dataKeluarga">
                    <Bootstrap4Pagination :data="dataKeluarga" @pagination-change-page="loadKeluarga" class="mt-2 ml-8" />
                </template>
                <!-- <template>
                                        <b-pagination v-model="dataKeluarga?.current_page" :total-rows="dataKeluarga?.total"
                                            :per-page="dataKeluarga?.per_page" aria-controls="my-table"></b-pagination>
                                    </template> -->
                <!-- <template>
                                <div class="text-center">
                                    <v-pagination v-model="dataKeluarga?.current_page" :length="dataKeluarga?.to"></v-pagination>
                                </div>
                            </template> -->

            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { onMounted, inject } from "vue";
import leaflet from "leaflet";
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useKeluargaStore } from '@/stores/kemiskinanWilayah'
import { Bootstrap4Pagination } from 'laravel-vue-pagination';

const keluargaStore = useKeluargaStore()
const { dataKeluarga } = storeToRefs(useKeluargaStore())
const urlApi = inject('urlApi')
const props = defineProps({ kode: String, })
var mymap;
var layerGroup;

function loadKeluarga(page = 1) {
    axios
        .get(`${urlApi}keluarga_miskin/${props.kode}/list?per_page=10&page=${page}`)
        .then(({ data }) => {
            keluargaStore.setKeluarga(data.datas);
            loadMap()
        }).catch(({ response }) => {
            console.error(response)
        })
}

function loadMap() {
    // tambah tilelayer map
    leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mymap);

    // hapus layer group (marker) dan inisiasi marker baru
    mymap.removeLayer(layerGroup);
    layerGroup = new leaflet.layerGroup()
    var featureGroup;
    var marker = [];

    // jika ada  data dilakukan for untuk mengambil lat long
    dataKeluarga.value?.data.forEach(element => {
        if (element.latitude && element.longitude) {
            var status;
            if (element.status_kesejahteraan == 2) {
                status = "Miskin"
            } else if (element.status_kesejahteraan == 3) {
                status = "Sangat Miskin"
            } else {
                status = "Tidak Miskin Sangat Miskin"
            }
            // memasukkan marker ke variable  marker dulu untuk di feturegrup
            // marker diberikan pop up
            marker.push(leaflet.marker([element.latitude, element.longitude], {})
                .bindPopup("<b>Keluarga " + status + "</b><br>" + element.nama_kepala))
            // .on('click', function (e) { mymap.setView(e.latlng, 16) }))
        }

    });

    // jika di ada lat longnya
    if (marker.length > 0) {
        // memasukkan marker ke dalam featuregrup dan featuregrup dimasukkan ke layer group
        featureGroup = leaflet.featureGroup(marker).addTo(layerGroup);
        // marker diberikan zoom ketika diklick
        featureGroup.on('click', function (e) {
            mymap.setView(e.latlng, 16);
        });
        // memasukkan layergroup ke map
        layerGroup.addTo(mymap);
        // membuat map jadi fit dengar marker yang ada
        mymap.fitBounds(featureGroup.getBounds(), { padding: [50, 50] });
    }
    // jika tidak ada satu pun lat longnya maka diset view map peta sumsel
    else {
        mymap.setView([-3.129461, 104.334412], 8);
    }


}

onMounted(() => {
    mymap = new leaflet.map("mapid").setView([-3.129461, 104.334412], 8);
    layerGroup = new leaflet.layerGroup().addTo(mymap);
    loadKeluarga()
});

function zoomOnMap(latitude, longitude) {
    // console.log(latitude, longitude);
    mymap = mymap.setView([latitude, longitude], 16);
}
</script>
