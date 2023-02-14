<template>
  <v-breadcrumbs :items="items" class="bg-blue">
    <template v-slot:prepend>
      <v-icon size="small" icon="mdi-map-search"></v-icon>
    </template>
  </v-breadcrumbs>
</template>
<script setup lang="ts">
  	import { ref, computed, onMounted  } from "vue";
	import { useMonografWilayahStore } from '@/stores/monografWilayah'

	const monografStore = useMonografWilayahStore()
	const props = defineProps({ kode: String, })

	const items = computed(() => {
		let result = [];
		for(let i=0;i<monografStore.indukWilayah.length;i++){
			let title = "";
			switch(i) {
				case 0:
					title = "Provinsi";
					break;
				case 1:
					let kodeKabKota = props.kode.substring(2, 3);
					if(kodeKabKota=="7") title = "Kota";
					else title = "Kabupaten";
					break;
				case 2:
					title = "Kecamatan";
					break;
				case 3:
					title = "Desa/Kelurahan";
					break;
				default:
					title = "Provinsi";
			}

			result.push({
				title: `${title}: ${monografStore.indukWilayah[i].nama}` ,
				disabled: false,
				href: "breadcrumbs_dashboard",
			});
		}

		let infoTitle = ""

		if(monografStore.infoWilayah!=null){
			result.push({
				title: `${monografStore.labelWilayah.current}: ${monografStore.infoWilayah.nama}` ,
				disabled: false,
				href: "breadcrumbs_dashboard",
			});
		}

		return result;
	})
</script>
