<template>
	<v-card elevation="8">
		<v-card-text>
			<v-row class="d-flex justify-center mb-8">
				<template v-if="infoWilayah">
					<v-col cols="12" class="d-flex justify-center">
						<v-avatar color="blue mx-16" size="153">
							<v-avatar color="white" size="150">
								<img class="img-responsive"
									src="@/assets/images/prov-logo/logo1600.png"
									alt="" />
							</v-avatar>
						</v-avatar>

						<v-avatar v-if="infoWilayah.kode_kab!='00'" color="blue mx-16" size="153">
							<v-avatar color="white" size="150">
								<img class="img-responsive"
                    				:src="getKabLogoAssets(infoWilayah.kode_kab)"
									alt="" />
							</v-avatar>
						</v-avatar>
					</v-col>
				</template>
			</v-row>

			<v-row>
				<v-col cols="12" class="d-flex justify-center align-center">
				<h3 v-if="infoWilayah">{{ labelWilayah.current }} {{ infoWilayah.nama }}</h3>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12" class="d-flex justify-center align-center">
				<p class="subtitle-text">Deskripsi singkat mengenai daerah</p>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
  	import { ref, computed, onMounted  } from "vue";
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'

  	const { infoWilayah, labelWilayah } = storeToRefs(useMonografWilayahStore())

    function getKabLogoAssets(kode){
        return new URL(`../../assets/images/kabs-logo/logo16${kode}.png`, import.meta.url).href
    }
</script>
