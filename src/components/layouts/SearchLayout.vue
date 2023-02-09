<template>
	<v-app :theme="theme">
		<Header />

		<v-main>
			<v-container fluid ma-0 pa-0 fill-height>
				<v-row>
					<v-col cols="2"></v-col>
					<v-col cols="8">
						<input type="text" class="form-control mb-8 border border-dark" 
							v-model="keyword" 
							v-on:keyup.enter="searchWilayah"
							placeholder="Cari wilayah...">

						<Result nama="Ogan Komering Ilir" rincian="Provinsi Sumatera Selatan Kabupaten ..." />
						<Result nama="Ogan Komering Ulu" rincian="Provinsi Sumatera Selatan Kabupaten ..." />
					</v-col>
					<v-col cols="2"></v-col>
				</v-row>
			</v-container>
		</v-main>

		<Footer/>
  	</v-app>
</template>

<script setup lang="ts">
  	import { ref, onMounted, inject } from "vue";
  	import axios from 'axios'

	import Header from "@/components/general/Header.vue";
	import Footer from "@/components/general/Footer.vue";
	import Result from "@/components/search/Result.vue";

	const urlApi = inject('urlApi')
	const theme = ref("light");
	const fullscreen = ref("false");

	function changeTheme() {
		theme.value = theme.value === "light" ? "dark" : "light";
	}

	function fullScreenBrowser() {
		fullscreen.value = fullscreen.value === "true" ? "false" : "true";
	}

	onMounted(() => {
	})
</script>
