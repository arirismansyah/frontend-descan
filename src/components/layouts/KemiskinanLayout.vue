<template>
	<v-app :theme="theme">
		<Header />
		
		<v-main>
			<SubNav :kode="props.kode"></SubNav>
			
			<!-- MAIN CONTENT -->
			<v-container fluid ma-0 pa-0 fill-height>
				<v-row>
					<RightNav jenis="kemiskinan"  :kode="props.kode" />

					<!-- MAIN CONTENT -->
					<v-col cols="9"> 
						<!-- row 3 -->
						<v-row class="d-flex align-stretch">
							<v-col cols="8" height="100%">
								<v-row>
									<v-col cols="12">
										<DaftarKeluarga :kode="props.kode" />
									</v-col>

									<v-col cols="12">
										<MapSummary></MapSummary>
									</v-col>
								</v-row>
								<v-row>
								<v-col cols="12">
									<EduSummary></EduSummary>
								</v-col>
								</v-row>
							</v-col>
							<v-col cols="4" fill-height class="align-self-auto">
								<!-- <v-col cols="12"> -->
								<ChartKemiskinan class="align-self-auto" style="height:100%"></ChartKemiskinan>
								<!-- </v-col> -->
							</v-col>
						</v-row>
						<!-- row 3 -->

						<!-- row 4 -->
						<v-row>
							<v-col cols="12">
								<EmploySummary></EmploySummary>
							</v-col>
						</v-row>
						<!-- row 4 -->
					</v-col>
					<!-- MAIN CONTENT -->
				</v-row>

			</v-container>
			<!-- MAIN CONTENT -->
		</v-main>

		<Footer/>
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

	import ChartKemiskinan from "@/components/kemiskinan/ChartKemiskinan.vue";
	import DaftarKeluarga from "@/components/kemiskinan/DaftarKeluarga.vue";
	import DescSummary from "../summary/DescSummary.vue";
	import AdministrasiSummary from "../summary/AdministrasiSummary.vue";
	import EduSummary from "../summary/EduSummary.vue";
	import MapSummary from "../summary/MapSummary.vue";
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

	async function loadWilayah(){
		await axios
			.get(`${urlApi}wilayah/${props.kode}/show`)
			.then(({data})=>{
				monografStore.setWilayah(
					data.datas.result, 
					data.datas.info_induk, 
					data.datas.info_child);
			}).catch(({ response })=>{
				console.error(response)
			})

		await axios
			.get(`${urlApi}pengurus/${props.kode}/list`)
			.then(({data})=>{
				pengurusStore.setPengurus(data.datas.data);
			}).catch(({ response })=>{
				console.error(response)
			})

		// await axios
		// 	.get(`${urlApi}keluarga_miskin/${props.kode}/list?per_page=10`)
		// 	.then(({data})=>{
		// 		keluargaStore.setKeluarga(data.datas);
		// 	}).catch(({ response })=>{
		// 		console.error(response)
		// 	})
	}

	onMounted(() => {
		loadWilayah();
	})
</script>
