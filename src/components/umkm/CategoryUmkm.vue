<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Category Umkm</h3>
    </div>
    <div class="card-body">
      <LoaderElement v-if="!isLoaded"></LoaderElement>

      <div v-if="isDummy" class="row">
        <p class="text-muted">
          Data yang ditampilkan merupakan <strong>data dummy</strong> karena
          data belum tersedia
        </p>
      </div>
      <canvas id="umkm-chart"></canvas>
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

async function makeDummyChart() {
  loadingState.value = "success";
  isDummy.value = true;

  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = ["a", "s", "d", "f", "g", "h", "j"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 34, 14, 21, 54, 65],
        // backgroundColor: Utils.CHART_COLORS.red,
      },
      {
        label: "Dataset 2",
        data: [34, 12, 22, 34, 65, 32, 12],
        // backgroundColor: Utils.CHART_COLORS.blue,
      },
      {
        label: "Dataset 3",
        data: [12, 34, 14, 21, 54, 65],
        // backgroundColor: Utils.CHART_COLORS.green,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
      plugins: {
        title: {
          display: true,
          text: "Chart.js Bar Chart - Stacked",
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  };

  new Chart(document.getElementById("umkm-chart"), config);
}

onMounted(() => {
  makeDummyChart();
});
</script>
