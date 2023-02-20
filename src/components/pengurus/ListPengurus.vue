<template>
	<v-card elevation="4">
		<v-card-title>
			<strong>Rincian Pengurus Semua Periode di {{ labelWilayah.current }} {{ infoWilayah?.nama }}</strong>
		</v-card-title>

		<v-card-text>
			<v-container fluid>
				<v-row>
					<v-col v-if="pengurus.length > 0" cols="12">
						<v-card v-for="(item, index) in pengurus" class="pa-3">
							<h4>Periode {{ formatDate(item.periode_awal_aktif) }} sd {{ formatDate(item.periode_akhir_aktif)
							}}</h4>
							<v-row>
								<v-col cols="10">
									<v-table>
										<tbody>
											<tr>
												<td>Ketua Wilayah</td>
												<td>:</td>
												<td style="width: 70%">{{ item.nama_ketua }}</td>
											</tr>
											<tr>
												<td>Wakil Ketua Wilayah</td>
												<td>:</td>
												<td>{{ item.nama_wakil }}</td>
											</tr>
											<tr>
												<td>Sekretaris Wilayah</td>
												<td>:</td>
												<td>{{ item.nama_sekretaris }}</td>
											</tr>
											<tr class="align-top">
												<td>Pengurus Lainnya</td>
												<td>:</td>
												<td v-html="item.pengurus_lainnya"></td>
											</tr>
										</tbody>
									</v-table>
								</v-col>
								<v-col cols="2" class="d-flex justify-center">
									<v-avatar color="blue" class="rounded-0 w-100 h-100" :style="{ 'max-height': '200px' }">
										<v-avatar color="white" class="rounded-0"
											:style="{ 'height': '95%', 'width': '95%' }">
											<v-img v-if="item.path_foto" class="bg-white" width="150" :aspect-ratio="1"
												:src="item.foto"></v-img>
										</v-avatar>
									</v-avatar>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
					<v-col v-else cols="12">Data pengurus pada wilayah ini tidak ditemukan</v-col>
				</v-row>
			</v-container>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePengurusStore } from '@/stores/pengurusWilayah'
import { useMonografWilayahStore } from '@/stores/monografWilayah';

const { pengurus } = storeToRefs(usePengurusStore())
const { infoWilayah, labelWilayah } = storeToRefs(useMonografWilayahStore())

function formatDate(date) {
	const month_label = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();


	return [day, month_label[month - 1], year].join(' ');
}
</script>
