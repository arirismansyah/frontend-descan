<template>
	<v-card>
		<v-card-title>
			<strong>Pejabat & Geografi Wilayah</strong>
		</v-card-title>

		<v-card-text>
			<v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="start">
				<v-tab value="1">Pengurus</v-tab>
				<v-tab value="2">Batas Wilayah</v-tab>
			</v-tabs>
			
			<v-window v-model="tab">
				<v-window-item key="1" value="1">
					<v-container fluid>
						<v-row>
						<v-col cols="12">
							<v-table height="300px">
							<tbody>
								<tr v-for="item in data_pengurus" :key="item.jabatan">
								<td>{{ item.jabatan }}</td>
								<td>:</td>
								<td>
									<v-col cols="12">
									<v-avatar color="grey" class="mx-4">
										<v-icon icon="mdi-account"></v-icon>
									</v-avatar>
									{{ item.nama }}
									</v-col>
								</td>
								</tr>
							</tbody>
							</v-table>
						</v-col>
						</v-row>
					</v-container>
				</v-window-item>

				<v-window-item key="2" value="2">
					<v-container fluid>
						<v-row>
						<v-col cols="12">
							<v-table height="300px">
							<tbody>
								<tr v-for="item in data_wilayah" :key="item.name">
								<td>{{ item.name }}</td>
								<td>:</td>
								<td>{{ item.value }}</td>
								</tr>
							</tbody>
							</v-table>
						</v-col>
						</v-row>
					</v-container>
				</v-window-item>
			</v-window>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
  	import { ref, computed, onMounted  } from "vue";
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'
	const tab = ref(null);

  	const { infoWilayah, labelWilayah } = storeToRefs(useMonografWilayahStore())

	const data_wilayah = ref([
	{
		name: "Nama Daerah",
		value: "Kota A",
	},
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

	const data_pengurus = ref([
	{
		jabatan: "Kepala Daerah",
		nama: "Bpk. Kepala A",
	},
	{
		jabatan: "Wakil Kepala Daerah",
		nama: "Bpk. Wakil A",
	},
	{
		jabatan: "Sekertaris Daerah",
		nama: "Bpk. Sekda A",
	},
	{
		jabatan: "Pengurus Daerah A",
		nama: "Bpk. Pengurus A",
	},
	]);
</script>
