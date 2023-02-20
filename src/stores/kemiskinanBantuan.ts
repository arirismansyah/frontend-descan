import { defineStore } from "pinia";
import type { Keluarga, Bantuan } from "@/models/Keluarga";
import type { PaginationData } from "@/models/PaginationData";

export const useKeluargaBantuanStore = defineStore('', {
    state: () => ({
        dataKeluargaBantuan: [] as Bantuan[]
    }),
    actions: {
        setKeluargaBantuan(bantuans: Bantuan[]) {
            this.dataKeluargaBantuan = bantuans
        }
    }
})
