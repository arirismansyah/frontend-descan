<template>
	<v-app :theme="theme">
		<Header />

		<v-main>
			<v-container fluid ma-0 pa-0 fill-height>
				<v-row>
					<v-col cols="2"></v-col>
					<v-col cols="8">
						<input type="text" class="form-control mb-8 border border-dark" 
							v-model="propsShadow.keyword"
							v-on:keyup.enter="loadSearchWilayah"
							placeholder="Cari wilayah...">

		  				<Result v-for="(data, idx) in state.wilayahs" :key="idx" 
						   	:kode="(data.kode_prov+data.kode_kab+data.kode_kec+data.kode_desa)"
						  	:nama="data.nama"/>
					</v-col>
					<v-col cols="2"></v-col>
				</v-row>
			</v-container>
		</v-main>

		<Footer/>
  	</v-app>
</template>

<script setup lang="ts">
  	import { ref, reactive, onMounted, inject } from "vue";
  	import axios from 'axios'

	import Header from "@/components/navigation/Header.vue";
	import Footer from "@/components/navigation/Footer.vue";
	import Result from "@/components/search/Result.vue";

	const urlApi = inject('urlApi')
	const theme = ref("light");
	const fullscreen = ref("false");

	let props = defineProps({ 
		keyword: String,
	})

	const state = reactive({
		wilayahs: []
	});

	let propsShadow = Object.assign({}, props)

	function changeTheme() {
		theme.value = theme.value === "light" ? "dark" : "light";
	}

	function fullScreenBrowser() {
		fullscreen.value = fullscreen.value === "true" ? "false" : "true";
	}

	async function loadSearchWilayah(){
		await axios.post(`${urlApi}wilayah/search`, {
					keyword: propsShadow.keyword,
				}).
				then(({data}) => {
					console.log(propsShadow.keyword)
					if(data.status=='success'){
						state.wilayahs = data.datas;
						console.log(wilayahs)
					}
					else{
						console.log("Data gagal disimpan, silahkan ulangi lagi")
					}
				});
	}

	onMounted(() => {
		loadSearchWilayah();
	})
</script>
