import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface Wilayah {
  kode_prov: string
  kode_kab: string
  kode_kec: string
  kode_desa: string
  nama: string
}

export const useMonografWilayahStore = defineStore('monografWilayah', {
  state: () => ({ 
      infoWilayah: null as Wilayah | null,
      indukWilayah: [] as Wilayah[], 
  }),
  getters: {
    labelWilayah: (state) => {
		// state.count * 2,
		let result = "";
		if(state.infoWilayah!=null){
			if(state.infoWilayah.kode_desa!='000'){
				result = "Desa/Kelurahan";
			}
			else if(state.infoWilayah.kode_kec!='000'){
				result = "Kecamatan";
			}
			else if(state.infoWilayah.kode_kab!='00'){
				let kodeKabKota = state.infoWilayah.kode_kab.substring(2, 3);
				if(kodeKabKota=="7") result = "Kota";
				else result = "Kabupaten";
			}
			else if(state.infoWilayah.kode_prov!='00'){
				result = "Provinsi";
			}
		}

		return result;
	},
  },
  actions: {
    setWilayah(info: Wilayah, induk: Wilayah[]){
      this.infoWilayah = info;
      this.indukWilayah = induk;
    }
    // increment() {
    //   this.count++
    // },
  },
})