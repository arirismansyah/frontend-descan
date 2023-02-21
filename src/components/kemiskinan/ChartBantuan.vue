<template>
    <v-card elevation="4">
        <v-card-title>
            <strong>Penerima Program bantuan</strong>
        </v-card-title>
        <v-card-text>
            <Doughnut :data="data" :config="config_bar" />
            <canvas id="barChart"></canvas>
        </v-card-text>
    </v-card>
</template>

<script setup>
import axios from 'axios'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    Colors,
    CategoryScale,
    LinearScale,
    ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "vue-chartjs";
import { ref, computed, onMounted, inject } from "vue";
import { storeToRefs } from 'pinia'
import { useKeluargaBantuanStore } from "@/stores/kemiskinanBantuan";

const keluargaStore = useKeluargaBantuanStore()
const { dataKeluargaBantuan } = storeToRefs(useKeluargaBantuanStore())
const urlApi = inject('urlApi')
const props = defineProps({ kode: {type: String} })


function loadKeluarga(page = 1) {
    axios
        .get(`${urlApi}keluarga_miskin/${props.kode}/list?per_page=10&page=${page}`)
        .then(({ data }) => {
            keluargaStore.setKeluargaBantuan(data.datas);
        }).catch(({ response }) => {
            console.error(response)
        })
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Colors
);
const DATA_COUNT_BAR = 7;
const NUMBER_CFG = { count: DATA_COUNT_BAR, min: -100, max: 100 };

const labels = ["Tidak Miskin", "Miskin", "Sangat Miskin"];
const data_bar = {
    labels: labels,
    datasets: [
        {
            label: "Menerima Bantuan",
            data: [0, 10, 20],
            // backgroundColor: Utils.CHART_COLORS.red,
        },
        {
            label: "Tidak Menerima Bantuan",
            data: [100, 10, 0],
            // backgroundColor: Utils.CHART_COLORS.blue,
        },
    ],
};

const config_bar = {
    type: "bar",
    data: data_bar,
    options: {
        indexAxis: "y",
        responsive: true,
        scales: {
            x: { stacked: true, },
            y: { stacked: true, },
        },
    },
};

const DATA_COUNT = 5;

const data = {
    labels: labels,
    datasets: [{
        label: "Dataset 1",
        data: [100, 40, 20],
    },],
};

onMounted(() => {
    const myChart = new ChartJS(document.getElementById("barChart"), config_bar);
});
</script>
