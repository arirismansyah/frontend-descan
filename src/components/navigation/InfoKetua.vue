<template>
	<v-card elevation="8">
		<v-card-text>
			<v-row class="d-flex justify-center">
				<v-col cols="12" class="d-flex justify-center">
					<v-avatar color="blue" size="160">
						<v-avatar color="white" size="153">
							<v-img v-if="pengurus[0]"
								class="bg-white"
								width="150"
								:aspect-ratio="1"
								:src="pengurus[0].foto"
							></v-img>
						</v-avatar>
					</v-avatar>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12" class="d-flex justify-center align-center">
					<h3 v-if="pengurus[0]">{{ pengurus[0].nama_ketua }}</h3>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia'
	import { usePengurusStore } from '@/stores/pengurusWilayah'

  	const { pengurus } = storeToRefs(usePengurusStore())
</script>
