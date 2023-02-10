<template>
	<main class="my-4">
		<v-card class="mx-auto p-2 border border-dark" outlined>
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="text-h6 mb-2 text-info">
						{{ props.nama }}
					</v-list-item-title>

					<v-list-item-subtitle>{{ labelLevel }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-card>
  	</main>
</template>

<script setup>
  	import { onMounted, computed } from "vue";
	const props = defineProps({ 
			kode: String, 
			nama: String,
		})

	const labelLevel = computed(() => {
		let result = "TTTEEEESS";
		console.log(props.nama)
		// console.log(props.kode.substring(8, 11))
		if(props.kode.substring(7, 10)!='000'){
			return 'Desa/Kelurahan';
		}
		else if(props.kode.substring(4, 7)!='000'){
			return 'Kecamatan';
		}
		else if(props.kode.substring(2, 4!='00')){
			return 'Kabupaten/Kota';
		}
		else{
			return 'Provinsi';
		}

		// switch(i) {
		// 	case 0:
		// 		title = "Provinsi";
		// 		break;
		// 	case 1:
		// 		let kodeKabKota = props.kode.substring(2, 3);
		// 		if(kodeKabKota=="7") title = "Kota";
		// 		else title = "Kabupaten";
		// 		break;
		// 	case 2:
		// 		title = "Kecamatan";
		// 		break;
		// 	case 3:
		// 		title = "Desa/Kelurahan";
		// 		break;
		// 	default:
		// 		title = "Provinsi";
		// }

		return result;
	})
</script>