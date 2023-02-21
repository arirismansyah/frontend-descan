<template>
	<v-card elevation="4">
		<v-card-title>
			<strong>Pejabat & Geografi Wilayah</strong>
		</v-card-title>

		<v-card-text>
			<v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="start">
				<v-tab value="1">Pengurus</v-tab>

				<template v-if="labelWilayah">
					<v-tab v-if="labelWilayah.child!=''" value="2">{{ labelWilayah.child.toString().toUpperCase() }}</v-tab>
				</template>

				<v-tab value="3">Batas Wilayah</v-tab>
			</v-tabs>
			
			<v-window v-model="tab">
				<v-window-item key="1" value="1">
					<v-container fluid>
						<v-row>
						<v-col cols="12">
							<v-table>
								<tbody v-if="pengurus[0]">
									<tr>
										<td>Ketua Wilayah</td><td>:</td>
										<td style="width: 70%">{{ pengurus[0].nama_ketua }}</td>
									</tr>
									<tr>
										<td>Wakil Ketua Wilayah</td><td>:</td>
										<td>{{ pengurus[0].nama_wakil }}</td>
									</tr>
									<tr>
										<td>Sekretaris Wilayah</td><td>:</td>
										<td>{{ pengurus[0].nama_sekretaris }}</td>
									</tr>
									<tr class="align-top">
										<td>Pengurus Lainnya</td><td>:</td>
										<td v-html="pengurus[0].pengurus_lainnya"></td>
									</tr>
								</tbody>
								<tbody v-else>
									Data pengurus pada wilayah ini tidak ditemukan
								</tbody>
							</v-table>
						</v-col>
						</v-row>
					</v-container>
				</v-window-item>

				<template v-if="labelWilayah && childWilayah">
					<template v-if="labelWilayah.child!=''">
						<v-window-item key="2" value="2">
							<v-container fluid>
								<v-row>
								<v-col cols="12">
									<v-table>
										<tbody>
											<tr v-for="item in childWilayah" :key="item.nama">
												<td><a :href="'/summary/'+item.kode_wilayah">{{ item.nama }}</a></td>
											</tr>
										</tbody>
									</v-table>
								</v-col>
								</v-row>
							</v-container>
						</v-window-item>
					</template>
				</template>

				<v-window-item key="3" value="3">
					<v-container fluid>
						<v-row>
							<v-col cols="12">
								<v-table>
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

<script setup>
	import { useRouter } from 'vue-router'
  	import { ref, computed, onMounted  } from "vue";
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'
	import { usePengurusStore } from '@/stores/pengurusWilayah'
	const tab = ref(null);
    const router = useRouter()

  	const { infoWilayah, 
	  	labelWilayah, 
	  	childWilayah} = storeToRefs(useMonografWilayahStore())
  	const { pengurus } = storeToRefs(usePengurusStore())

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
</script>
