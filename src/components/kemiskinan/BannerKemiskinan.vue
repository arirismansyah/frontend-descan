<template>
    <v-col col="4">
        <v-card color="success">
            <v-card-title class="text-h6">
                Keluarga Tidak Miskin
            </v-card-title>

            <v-card-subtitle></v-card-subtitle>

        </v-card>
    </v-col>
    <v-col col="4">
        <v-card color="orange" class="white--text">
            <v-card-title class="text-h6" :style="{ 'color': 'white' }">
                Keluarga Miskin
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>

        </v-card>
    </v-col>
    <v-col col="4">
        <v-card color="error">
            <v-card-title class="text-h6">
                Keluarga Sangat Miskin
            </v-card-title>

            <v-card-subtitle></v-card-subtitle>

        </v-card>
    </v-col>
</template>

<script setup lang="ts">
import { onMounted, inject } from "vue";
import leaflet from "leaflet";
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useKeluargaStore } from '@/stores/kemiskinanWilayah'

const keluargaStore = useKeluargaStore()
const { dataKeluarga, dataSemuaKeluarga } = storeToRefs(useKeluargaStore())
const urlApi = inject('urlApi')
const props = defineProps({ kode: {type: String} })
var keluarga_miskin;
var keluar_sangatmiskin;
var keluar_tidakmiskin;

function loadKeluarga(page = 1) {
    axios
        .get(`${urlApi}keluarga_miskin/${props.kode}/list?per_page=10&page=${page}`)
        .then(({ data }) => {
            keluargaStore.setSemuaKeluarga(data.datas);
        }).catch(({ response }) => {
            console.error(response)
        })
}

onMounted(() => {
    loadKeluarga()
});

</script>