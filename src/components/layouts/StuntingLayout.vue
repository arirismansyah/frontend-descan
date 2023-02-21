<template>
	<v-app :theme="theme">
		<Header />
		
		<v-main>
			<SubNav :kode="props.kode"></SubNav>
			
			<!-- MAIN CONTENT -->
			<v-container fluid ma-0 pa-0 fill-height>
				<v-row>
					<!-- RIGHT CONTENT -->
					<RightNav jenis="stunting"  :kode="props.kode" />
					<!-- RIGHT CONTENT -->

					<!-- MAIN CONTENT -->
					<v-col cols="9"> 
						<!-- row 1 -->
						<v-row>
							<v-col cols="12">
								<DescSummary></DescSummary>
							</v-col>
						</v-row>
						<!-- row 1 -->

						<!-- row 2 -->
						<v-row>
							<v-col cols="12">
								<!-- INFORMASI UMUM -->
								<AdministrasiSummary></AdministrasiSummary>
								<!-- INFORMASI UMUM -->
							</v-col>
						</v-row>
						<!-- row 2 -->

						<!-- row 3 -->
						<v-row class="d-flex align-stretch">
							<v-col cols="8" height="100%">
								<v-row>
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
								<DemographSummary class="align-self-auto" style="height: 100%"></DemographSummary>
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

	import { useMonografWilayahStore } from '@/stores/monografWilayah'
	import { usePengurusStore } from '@/stores/pengurusWilayah'

	import Header from "@/components/navigation/Header.vue";
	import Footer from "@/components/navigation/Footer.vue";
	import SubNav from "@/components/navigation/SubNav.vue";

	import DescSummary from "../summary/DescSummary.vue";
	import AdministrasiSummary from "../summary/AdministrasiSummary.vue";
	import EduSummary from "../summary/EduSummary.vue";
	import MapSummary from "../summary/MapSummary.vue";
	import DemographSummary from "../summary/DemographSummary.vue";
	import EmploySummary from "../summary/EmploySummary.vue";

	import RightNav from "../navigation/RightNav.vue";
	import MenuKemiskinan from "../summary/MenuKemiskinan.vue";
	import MenuStunting from "../summary/MenuStunting.vue";
	import MenuUmkm from "../summary/MenuUmkm.vue";
	
	const monografStore = useMonografWilayahStore()
	const pengurusStore = usePengurusStore()

	const props = defineProps({ kode: {type: String} })
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
	}

	onMounted(() => {
		loadWilayah();
	})
</script>
