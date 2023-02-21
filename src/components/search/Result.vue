<template>
	<main class="my-4">
		<v-card :to="'/summary/' + kodeWilayah" class="mx-auto p-2 border border-dark" outlined>
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
			kode: {type: String}, 
			nama: {type: String},
		})

	const labelLevel = computed(() => {
		if(props.kode.substring(7, 10)!='000') return 'Desa/Kelurahan';
		else if(props.kode.substring(4, 7)!='000') return 'Kecamatan';
		else if(props.kode.substring(2, 4!='00')) return 'Kabupaten/Kota';
		else return 'Provinsi';
	})

	const kodeWilayah = computed(() => {
		if(props.kode.substring(7, 10)!='000') return props.kode;
		else if(props.kode.substring(4, 7)!='000') return props.kode.substring(0,7);
		else if(props.kode.substring(2, 4!='00')) return props.kode.substring(0,4);
		else return props.kode.substring(0,2);
	})
</script>