<template>
	<v-col cols="3">
		<v-row>
			<v-col cols="12">
				<InfoKetua />
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<InformasiUmum />
			</v-col>
		</v-row>
		
		<v-row>
			<v-col cols="12">
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
											<v-btn @click="goToPage(item.tag)" v-if="props.jenis==item.tag" 
												:icon="`mdi-${item.icon}`" 
												size="x-large"
												color="indigo" />
											<v-btn @click="goToPage(item.tag)" v-else :icon="`mdi-${item.icon}`" 
												color="grey" />
											<p class="mt-2">{{ item.label }}</p>
										</div>
									</v-card>
									
								</v-item>
							</v-col>
						</v-row>
					</v-item-group>
				</v-container>
			</v-col>
		</v-row>
	</v-col>
</template>

<script setup lang="ts">
	import { ref } from "vue"
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'

	import InfoKetua from "./InfoKetua.vue";
	import InformasiUmum from "./InformasiUmum.vue";
	import { useRouter } from 'vue-router'

    const router = useRouter()

  	const { infoWilayah, labelWilayah } = storeToRefs(useMonografWilayahStore())

	const props = defineProps({ jenis: String, kode: String })

	const items = [
			{ icon: 'view-dashboard', label: 'Monograph', tag: 'summary'},
			{ icon: 'account', label: 'History Pengurus', tag: 'pengurus' },
			{ icon: 'cash-remove', label: 'Kemiskinan', tag: 'kemiskinan'},
			{ icon: 'account-arrow-down', label: 'Stunting', tag: 'stunting' },
			{ icon: 'bank', label: 'UMKM', tag: 'umkm'},
			{ icon: 'map', label: 'Peta Tematik',tag: 'tematik'}
		];


	function goToPage(page_name){
        router.push({name: page_name})
	}
</script>
