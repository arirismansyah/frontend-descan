<template>
  <v-app :theme="theme">
    <!-- NAVBAR -->
    <v-app-bar>
      <template v-slot:prepend>
        <img height="45" src="@/assets/images/logo/logo.png" />
        <v-app-bar-title class="mx-4">Desa Bumi Sriwijaya</v-app-bar-title>
      </template>

      <v-toolbar-items>
        <v-divider vertical></v-divider>
        <v-btn variant="text">Pilih Wilayah</v-btn>

        <v-divider vertical></v-divider>

        <v-btn variant="text">Peta Tematik</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn :icon="fullscreen === 'true' ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
        @click="fullScreenBrowser()"></v-btn>

      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="changeTheme()"
      ></v-btn>
    </v-app-bar>
    <!-- NAVBAR -->

    <v-main>
      <!-- SUB NAV WILAYAH -->
      <SubNav :kode="props.kode"></SubNav>
      <!-- SUB NAV WILAYAH -->

      <!-- MAIN CONTENT -->
      <v-container fluid ma-0 pa-0 fill-height>
        <!-- row 1 -->
        <v-row>
          <v-col cols="12">
            <!-- DESC -->
            <DescSummary></DescSummary>
            <!-- DESC -->
          </v-col>
        </v-row>
        <!-- row 1 -->

        <!-- row 2 -->
        <v-row>
          <v-col cols="12">
            <!-- INFORMASI UMUM -->
            <GeneralSummary></GeneralSummary>
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
      </v-container>
      <!-- MAIN CONTENT -->
    </v-main>

    <!-- FOOTER -->
    <v-footer>
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} - BPS Provinsi Sumatera Selatan
        </v-col>
      </v-row>
    </v-footer>
    <!-- FOOTER -->
  </v-app>
</template>

<script setup lang="ts">
  	import { ref, onMounted, inject } from "vue";
  	import axios from 'axios'
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'

	import SubNav from "@/components/navigation/SubNav.vue";
	import DescSummary from "../summary/DescSummary.vue";
	import GeneralSummary from "../summary/GeneralSummary.vue";
	import EduSummary from "../summary/EduSummary.vue";
	import MapSummary from "../summary/MapSummary.vue";
	import DemographSummary from "../summary/DemographSummary.vue";
	import EmploySummary from "../summary/EmploySummary.vue";
	
	const monografStore = useMonografWilayahStore()

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
				monografStore.setWilayah(data.datas.result, data.datas.info_induk);
			}).catch(({ response })=>{
				console.error(response)
			})
	}

	onMounted(() => {
		loadWilayah();
	})
</script>
