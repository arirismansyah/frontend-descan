<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Demografi</h3>
    </div>
    <div class="card-body">
      <p v-if="isDummy" class="text-muted">
        Data yang ditampilkan saat ini adalah dummy, karena belum ada data yang
        diinput
      </p>
      <canvas id="demograph-chart"></canvas>
      <div class="row">
        <canvas id="demograph-chart2"></canvas>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, inject, computed, onMounted } from "vue";
import axios from "axios";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import { Chart } from "chart.js/auto";

import { useDataMonographStore } from "@/stores/dataMonograph";

import LoaderElement from "../navigation/LoaderElement.vue";

const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");

const kodeWilayahStore = useKodeWilayahStore();
const dataMonographStore = useDataMonographStore();
const isDummy = ref(false);

const data = {
  labels: ["Perempuan", "Laki-laki"],
  datasets: [
    {
      label: "Jumlah Penduduk",
      data: [300, 100],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
};

async function makeChart() {
  const allData = dataMonographStore.$state.datas;
  let pendudukLk = null;
  let pendudukPr = null;

  allData.forEach((element) => {
    if (element["kategori_variabel"] == "jumlah_penduduk") {
      if (element["nama_variabel"].includes("laki")) {
        pendudukLk = parseInt(element["nilai"]);
      } else {
        pendudukPr = parseInt(element["nilai"]);
      }
    }
  });

  console.log("lk", pendudukLk);
  console.log("pr", pendudukPr);

  if (
    isNaN(pendudukLk) ||
    isNaN(pendudukPr) ||
    pendudukLk == null ||
    pendudukPr == null ||
    (pendudukLk <= 0 && pendudukPr <= 0)
  ) {
    pendudukPr = 300;
    pendudukLk = 100;
    isDummy.value = true;
  }

  const data = {
    labels: ["Perempuan", "Laki-laki"],
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: [pendudukPr, pendudukLk],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
  };

  new Chart(document.getElementById("demograph-chart"), config);
}

async function makeDummyChart2() {
  loadingState.value = "success";
  isDummy.value = true;

  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = ["0-5", "5-15", "16-24", "25-60", "60++"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Laki-laki",
        data: [12, 34, 14, 21, 54],
        // backgroundColor: Utils.CHART_COLORS.red,
      },
      {
        label: "Perempuan",
        data: [34, 12, 22, 34, 65],
        // backgroundColor: Utils.CHART_COLORS.blue,
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

  new Chart(document.getElementById("demograph-chart2"), config);
}

onMounted(() => {
  makeChart();
  makeDummyChart2();
});
</script>
