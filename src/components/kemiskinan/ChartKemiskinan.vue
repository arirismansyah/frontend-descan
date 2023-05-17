<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Tingkat Kesejahteraan</h3>
    </div>

    <div class="card-body">
      <LoaderElement v-if="!isLoaded"></LoaderElement>

      <div v-if="isDummy" class="row">
        <p class="text-muted">
          Data yang ditampilkan merupakan <strong>data dummy</strong> karena
          data belum tersedia
        </p>
      </div>
      <canvas id="kemiskinan-chart"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
// import modules
import axios from "axios";
import { ref, inject, computed, onMounted, reactive } from "vue";
import { Chart } from "chart.js";

// import stores
import { useKodeWilayahStore } from "@/stores/kodeWilayah";

// import components
import LoaderElement from "../navigation/LoaderElement.vue";

const loadingState = ref("false");
const isDummy = ref(false);
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");

const kodeWilayahStore = useKodeWilayahStore();

// dummy data
async function makeDummyChart() {
  loadingState.value = "success";
  isDummy.value = true;
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Jumlah Keluarga by Desil Tingkat Kesejahteraan",
        data: [65, 59, 80, 81, 56, 55, 40, 23, 48, 32],

        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  new Chart(document.getElementById("kemiskinan-chart"), config);
}

// perlu endpoint untuk data keluarga dan desil tingkat kesejahteraan kalau diperlukan
async function makeChart() {}

onMounted(() => {
  makeDummyChart();
});
</script>
