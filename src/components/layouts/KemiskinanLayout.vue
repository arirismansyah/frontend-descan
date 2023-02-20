<template>
	<v-app :theme="theme">
		<Header />
		<v-main>
			<SubNav :kode="props.kode"></SubNav>
			<v-container fluid ma-0 pa-0 fill-height>
				<v-row>
					<RightNav jenis="kemiskinan" :kode="props.kode" />
					<v-col cols="9">
						<v-row class="d-flex align-stretch">
							<BannerKemiskinan :kode="props.kode"></BannerKemiskinan>
						</v-row>
						<v-row class="d-flex align-stretch">
							<v-col cols="8">
								<EmploySummary></EmploySummary>

							</v-col>
							<v-col cols="4">
								<ChartBantuan :kode="props.kode"> </ChartBantuan>
							</v-col>
						</v-row>
						<v-row class="d-flex align-stretch">
							<v-col cols="12" height="100%">
								<DaftarKeluarga :kode="props.kode" />
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
		<Footer />
	</v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from "vue";
import axios from 'axios'
import { storeToRefs } from 'pinia'

import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";
import SubNav from "@/components/navigation/SubNav.vue";
import RightNav from "@/components/navigation/RightNav.vue";

import BannerKemiskinan from "../kemiskinan/BannerKemiskinan.vue";
import ChartKemiskinan from "@/components/kemiskinan/ChartKemiskinan.vue";
import ChartBantuan from "../kemiskinan/ChartBantuan.vue";
import DaftarKeluarga from "@/components/kemiskinan/DaftarKeluarga.vue";
import MapKemiskinan from "../kemiskinan/MapKemiskinan.vue";
import EmploySummary from "@/components/summary/EmploySummary.vue";


import { useMonografWilayahStore } from '@/stores/monografWilayah'
import { usePengurusStore } from '@/stores/pengurusWilayah'
import { useKeluargaStore } from '@/stores/kemiskinanWilayah'

const monografStore = useMonografWilayahStore()
const pengurusStore = usePengurusStore()
const keluargaStore = useKeluargaStore()

const props = defineProps({ kode: String })
const urlApi = inject('urlApi')
const theme = ref("light");
const fullscreen = ref("false");

function changeTheme() {
	theme.value = theme.value === "light" ? "dark" : "light";
}

function fullScreenBrowser() {
	fullscreen.value = fullscreen.value === "true" ? "false" : "true";
}

async function loadWilayah() {
	await axios
		.get(`${urlApi}wilayah/${props.kode}/show`)
		.then(({ data }) => {
			monografStore.setWilayah(
				data.datas.result,
				data.datas.info_induk,
				data.datas.info_child);
		}).catch(({ response }) => {
			console.error(response)
		})

	await axios
		.get(`${urlApi}pengurus/${props.kode}/list`)
		.then(({ data }) => {
			pengurusStore.setPengurus(data.datas.data);
		}).catch(({ response }) => {
			console.error(response)
		})
}

onMounted(() => {
	loadWilayah();
})
</script>
