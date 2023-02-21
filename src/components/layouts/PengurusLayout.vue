<template>
	<v-app :theme="theme">
		<Header />
		
		<v-main>
			<SubNav :kode="props.kode"></SubNav>
			
			<!-- MAIN CONTENT -->
			<v-container fluid ma-0 pa-0 fill-height>
				<v-row>
					<RightNav jenis="pengurus" :kode="props.kode" />

					<!-- MAIN CONTENT -->
					<v-col cols="9"> 
						<ListPengurus />
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
	import RightNav from "../navigation/RightNav.vue";

	import ListPengurus from "@/components/pengurus/ListPengurus.vue";
	
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
