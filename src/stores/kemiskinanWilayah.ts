import { defineStore } from "pinia";
import type { Keluarga } from "@/models/Keluarga";
import type { PaginationData } from "@/models/PaginationData";

export const useKeluargaStore = defineStore('keluarga', {
	state: () => ({
		dataKeluarga: null as PaginationData<Keluarga> | null,
		dataSemuaKeluarga: [] as Keluarga[]
	}),
	actions: {
		setKeluarga(keluargas: PaginationData<Keluarga>) {
			this.dataKeluarga = keluargas

		},
		setSemuaKeluarga(semuakeluarga: Keluarga[]) {
			this.dataSemuaKeluarga = semuakeluarga
		}
	}
})
