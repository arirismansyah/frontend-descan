<template>
  <v-card>
    <v-card-title>
      <strong>Peta Wilayah {{ geoJson }}</strong>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" id="mapid" class="d-flex" style="height: 400px">
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  	import { ref, computed, onMounted, inject  } from "vue";
	import leaflet from "leaflet";
  	import axios from 'axios'
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'

	const urlApi = inject('urlApi')
    let mymap;

  	const { infoWilayah } = storeToRefs(useMonografWilayahStore())

	const geoJson = computed(() => {
		return infoWilayah.nama
		// if(infoWilayah){
		// 	console.log("berisi");
		// 	return "berisi";
		// 	// let urlGeo = "";
		// 	// if(infoWilayah.kode_kec!='000'){
		// 	// 	urlGeo = `${urlApi}geo/final_desa_${infoWilayah.kode_prov}${infoWilayah.kode_kab}`;
		// 	// }
		// 	// else{
		// 	// 	urlGeo = `${urlApi}geo/final_kab_${infoWilayah.kode_prov}${infoWilayah.kode_kab}`;
		// 	// }

		// 	// axios
		// 	// 	.get(`${urlGeo}`)
		// 	// 	.then(({data})=>{
		// 	// 		console.log(data);
		// 	// 		return data;
		// 	// 	}).catch(({ response })=>{
		// 	// 		console.error(response)
		// 	// 	})
		// }
		// else{
		// 	// return [];
		// 	console.log("kosong");
		// 	return "kosong";
		// }
	})

	async function loadGeojson(){
		let urlGeo = "";
		if(infoWilayah.kode_kec!='000'){
			urlGeo = `${urlApi}geo/final_desa_${infoWilayah.kode_prov}${infoWilayah.kode_kab}`;
		}
		else{
			urlGeo = `${urlApi}geo/final_kab_${infoWilayah.kode_prov}${infoWilayah.kode_kab}`;
		}

		await axios
			.get(`${urlGeo}`)
			.then(({data})=>{
				console.log(data);
				return data;
			}).catch(({ response })=>{
				console.error(response)
			})
	}

	onMounted(() => {
		mymap = leaflet.map("mapid").setView([-2.9655006, 104.7335063], 13);
		leaflet
			.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
				maxZoom: 19,
				attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
			})
			.addTo(mymap);

		// let circle = leaflet
		// 	.circle([-2.9655006, 104.7335063], {
		// 	color: "red",
		// 	fillColor: "#f03",
		// 	fillOpacity: 0.5,
		// 	radius: 2000,
		// 	})
		// 	.addTo(mymap);
	})
</script>
