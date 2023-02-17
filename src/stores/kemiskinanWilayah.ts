import { defineStore } from "pinia";
import type { Keluarga } from "@/models/Keluarga";
import type { PaginationData } from "@/models/PaginationData";

export const useKeluargaStore = defineStore('keluarga', {
	state: () => ({ 
		dataKeluarga: null as PaginationData<Keluarga>| null
	}),
	actions: {
		setKeluarga(keluargas: PaginationData<Keluarga>){
			this.dataKeluarga = keluargas
		}
	},
})