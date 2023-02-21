<template>
  <v-card elevation="8">
    <v-card-title>
      <strong>Pendidikan</strong>
    </v-card-title>
    <v-card-subtitle>Nama Wilayah</v-card-subtitle>
    <v-card-text>
      <!-- TREE MAP -->
      <canvas id="myChart"></canvas>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { ref, onMounted } from "vue";

import { Chart, Tooltip } from "chart.js";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";
Chart.register(TreemapController, TreemapElement, Tooltip);

const DATA = [
  {
    what: "> SMA",
    value: 98,
    color: "rgb(191, 77, 114)",
  },
  {
    what: "SMA",
    value: 375,
    color: "rgb(228, 148, 55)",
  },
  {
    what: "SMP",
    value: 69,
    color: "rgb(147, 119, 214)",
  },
  {
    what: "SD",
    value: 55,
    color: "rgb(80, 134, 55)",
  },
  {
    what: "Tidak Bersekolah",
    value: 49,
    color: "rgb(90, 97, 110)",
  },
];

// </block:setup>

// <block:config:0>
const config = {
  type: "treemap",
  data: {
    datasets: [
      {
        label: "Fruits",
        tree: DATA,
        key: "value",
        borderWidth: 0,
        borderRadius: 6,
        spacing: 1,
        backgroundColor(ctx) {
          if (ctx.type !== "data") {
            return "transparent";
          }
          return ctx.raw._data.color;
        },
        labels: {
          align: "left",
          display: true,
          formatter(ctx){
            if (ctx.type !== "data") {
              return;
            }
            return [ctx.raw._data.what, "Value is " + ctx.raw.v];
          },
          color: ["white", "whiteSmoke"],
          font: [{ size: 20, weight: "bold" }, { size: 12 }],
          position: "top",
        },
      },
    ],
  },
  options: {
    events: [],
    plugins: {
      title: {
        display: true,
        text: "Different fonts and colors on labels",
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
};
onMounted(() => {
  const myChart = new Chart(document.getElementById("myChart"), config);
});
</script>
