<template>
	<v-container class="pa-1">
		<v-item-group>
			<v-row>
				<v-col
					v-for="(item, i) in items"
					:key="i"
					cols="12"
					md="6"
				>
					<v-item v-slot="{ isSelected, toggle }">
						<v-card elevation="4">
							<div class="text-center pt-4">
								<v-btn :icon="`mdi-${item.icon}`" 
									color="indigo"></v-btn>
								<p class="mt-2">{{ item.label }}</p>
							</div>
						</v-card>
						
					</v-item>
				</v-col>
			</v-row>
		</v-item-group>
	</v-container>
</template>

<script setup lang="ts">
	import { ref } from "vue"
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'

  	const { infoWilayah, labelWilayah } = storeToRefs(useMonografWilayahStore())

	const items = [
			{
				icon: 'view-dashboard',
				label: 'Monograph',
			},
			{
				icon: 'account',
				label: 'History Pengurus',
			},
			{
				icon: 'cash-remove',
				label: 'Kemiskinan',
			},
			{
				icon: 'account-arrow-down',
				label: 'Stunting',
			},
			{
				icon: 'bank',
				label: 'UMKM',
			},
			{
				icon: 'map',
				label: 'Peta Tematik',
			}
		];
</script>
