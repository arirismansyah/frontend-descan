<template>
  <v-card>
    <v-card-title>
      <strong>Lapangan Pekerjaan</strong>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="8">
          <Bar :data="data" :options="options" />
        </v-col>
        <v-col cols="4">
          <v-table height="450" fixed-header>
            <thead>
              <tr>
                <th>Lapangan Pekerjaan</th>
                <th>Jumlah Pekerja</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <v-col cols="12">
                    <v-avatar color="info" class="mx-4"> </v-avatar>
                    Kategori A
                  </v-col>
                </td>
                <td>
                  <v-chip class="ma-2" color="info" label text-color="white">
                    234
                  </v-chip>
                </td>
              </tr>
              <tr>
                <td>
                  <v-col cols="12">
                    <v-avatar color="secondary" class="mx-4"> </v-avatar>
                    Kategori A
                  </v-col>
                </td>
                <td>
                  <v-chip
                    class="ma-2"
                    color="secondary"
                    label
                    text-color="white"
                  >
                    234
                  </v-chip>
                </td>
              </tr>
              <tr>
                <td>
                  <v-col cols="12">
                    <v-avatar color="primary" class="mx-4"> </v-avatar>
                    Kategori A
                  </v-col>
                </td>
                <td>
                  <v-chip class="ma-2" color="primary" label text-color="white">
                    234
                  </v-chip>
                </td>
              </tr>
              <tr>
                <td>
                  <v-col cols="12">
                    <v-avatar color="warning" class="mx-4"> </v-avatar>
                    Kategori A
                  </v-col>
                </td>
                <td>
                  <v-chip class="ma-2" color="warning" label text-color="white">
                    234
                  </v-chip>
                </td>
              </tr>
              <tr>
                <td>
                  <v-col cols="12">
                    <v-avatar color="success" class="mx-4"> </v-avatar>
                    Kategori A
                  </v-col>
                </td>
                <td>
                  <v-chip class="ma-2" color="success" label text-color="white">
                    234
                  </v-chip>
                </td>
              </tr>
              <tr>
                <td>
                  <v-col cols="12">
                    <v-avatar color="pink" class="mx-4"> </v-avatar>
                    Kategori A
                  </v-col>
                </td>
                <td>
                  <v-chip class="ma-2" color="pink" label text-color="white">
                    234
                  </v-chip>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  	import { ref, computed, onMounted  } from "vue";
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		BarElement,
		CategoryScale,
		LinearScale,
		Colors,
		} from "chart.js";
	import { Bar } from "vue-chartjs";

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend,
		Colors
	);

  	const { infoWilayah, labelWilayah } = storeToRefs(useMonografWilayahStore())

	const data = {
		labels: [1, 2, 3, 4, 5, 6, 7],
		datasets: [
			{
			label: "My First Dataset",
			data: [65, 59, 80, 81, 56, 55, 40],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(255, 159, 64, 0.2)",
				"rgba(255, 205, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(201, 203, 207, 0.2)",
			],
			borderColor: [
				"rgb(255, 99, 132)",
				"rgb(255, 159, 64)",
				"rgb(255, 205, 86)",
				"rgb(75, 192, 192)",
				"rgb(54, 162, 235)",
				"rgb(153, 102, 255)",
				"rgb(201, 203, 207)",
			],
			borderWidth: 1,
			},
		],
	};
	const options = ref({
		responsive: true,
	});
</script>
