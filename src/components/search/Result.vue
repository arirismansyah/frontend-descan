<template>
	<main class="my-4">
		<v-card class="mx-auto p-2 border border-dark" outlined>
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="text-h6 mb-2 text-info">
						{{ props.nama }}
					</v-list-item-title>

					<v-list-item-subtitle>{{ props.rincian }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-card>
  	</main>
</template>

<script setup>
  	import { onMounted } from "vue";
	const props = defineProps({ 
			kode: String, 
			nama: String, 
			rincian: String
		})


	onMounted(() => {
		console.log(props);
	})
</script>