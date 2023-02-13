<template>
	<v-card elevation="8">
		<v-card-title>
			<strong>Informasi Umum</strong>
		</v-card-title>
		
		<v-table>
			<tbody>
				<tr class="align-top">
					<td>Nama Wilayah</td>
					<td>:</td>
					<td v-if="infoWilayah">{{ infoWilayah.nama }}</td>
				</tr>
				<tr  class="align-top" v-for="item in data_wilayah" :key="item.name">
					<td>{{ item.name }}</td>
					<td>:</td>
					<td>{{ item.value }}</td>
				</tr>
			</tbody>
		</v-table>
	</v-card>
</template>

<script setup lang="ts">
	import { ref } from "vue"
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'

  	const { infoWilayah, labelWilayah } = storeToRefs(useMonografWilayahStore())

	const data_wilayah = ref([
		{
			name: "Tahun Pembentukkan",
			value: "1976",
		},
		{
			name: "Dasar Pembentukan",
			value: "UU No XX Tahun XXXX",
		},
		{
			name: "Luas Wilayah",
			value: 305,
		},
	]);
</script>
