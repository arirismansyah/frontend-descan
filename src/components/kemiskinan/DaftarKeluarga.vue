<template>
    <v-card elevation="4">
        <v-card-title>
            <strong>Daftar Keluarga</strong>
        </v-card-title>
        <v-table density="compact">
            <thead>
                <tr>
                    <th class="text-center">Nama Kepala Keluarga</th>
                    <th class="text-center">No KK</th>
                    <th class="text-center">Tingkat Kesejahteraan</th>
                </tr>
            </thead>
            <tbody v-if="dataKeluarga">
                <tr v-for="item in dataKeluarga.data" :key="item.no_kk">
                    <td>{{ item.nama_kepala }}</td>
                    <td>{{ item.no_kk }}</td>
                    <td class="text-center">
                        <v-chip v-if="item.status_kesejahteraan==1" class="ma-2" color="green">
                            Tidak Miskin
                        </v-chip>
                        <v-chip v-else-if="item.status_kesejahteraan==2" class="ma-2" color="orange">
                            Miskin
                        </v-chip>
                        <v-chip v-else class="ma-2" color="red">
                            Sangat Miskin
                        </v-chip>
                    </td>
                </tr>
            </tbody>
        </v-table>
        
        <template v-if="dataKeluarga">
            <Bootstrap4Pagination
                :data="dataKeluarga"
                @pagination-change-page="loadKeluarga"
                class="mt-2 ml-8"
            />
        </template>
    </v-card>
</template>

<script setup lang="ts">
  	import { onMounted, inject } from "vue";
  	import axios from 'axios'
	import { storeToRefs } from 'pinia'
	import { useKeluargaStore } from '@/stores/kemiskinanWilayah'
    import { Bootstrap4Pagination } from 'laravel-vue-pagination';

	const keluargaStore = useKeluargaStore()
  	const { dataKeluarga } = storeToRefs(useKeluargaStore())
	const urlApi = inject('urlApi')
	const props = defineProps({ kode: String, })

	async function loadKeluarga(page=1){
		await axios
			.get(`${urlApi}keluarga_miskin/${props.kode}/list?per_page=10&page=${page}`)
			.then(({data})=>{
				keluargaStore.setKeluarga(data.datas);
			}).catch(({ response })=>{
				console.error(response)
			})
	}

	onMounted(() => {
		loadKeluarga();
	})
</script>
