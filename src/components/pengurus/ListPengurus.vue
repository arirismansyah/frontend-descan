<template>
	<v-card elevation="4">
		<v-card-title>
			<strong>Rincian Pengurus Semua Periode</strong>
		</v-card-title>

		<v-card-text>
			<v-container fluid>
				<v-row>
					<v-col v-if="pengurus" cols="12">
						<v-card v-for="(item, index) in pengurus">
							<h4>Periode {{ formatDate(item.periode_awal_aktif) }} sd {{ formatDate(item.periode_akhir_aktif) }}</h4>
							<v-table>
								<tbody>
									<tr>
										<td>Ketua Wilayah</td><td>:</td>
										<td style="width: 70%">{{ item.nama_ketua }}</td>
									</tr>
									<tr>
										<td>Wakil Ketua Wilayah</td><td>:</td>
										<td>{{ item.nama_wakil }}</td>
									</tr>
									<tr>
										<td>Sekretaris Wilayah</td><td>:</td>
										<td>{{ item.nama_sekretaris }}</td>
									</tr>
									<tr class="align-top">
										<td>Pengurus Lainnya</td><td>:</td>
										<td v-html="item.pengurus_lainnya"></td>
									</tr>
								</tbody>
							</v-table>
						</v-card>
					</v-col>
					<v-col cols="12">Data pengurus pada wilayah ini tidak ditemukan</v-col>
				</v-row>
			</v-container>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia'
	import { usePengurusStore } from '@/stores/pengurusWilayah'

  	const { pengurus } = storeToRefs(usePengurusStore())

	function formatDate(date) {
		const month_label = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();


		return [day, month_label[month-1], year].join(' ');
	}
</script>
