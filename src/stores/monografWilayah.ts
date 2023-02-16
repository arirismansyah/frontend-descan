import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface Wilayah {
	kode_prov: string
	kode_kab: string
	kode_kec: string
	kode_desa: string
	nama: string
}

interface Pengurus {
	kode_prov: string
	kode_kab: string
	kode_kec: string
	kode_desa: string
	nama_ketua: string,
	path_foto: string,
	nama_wakil: string,
	nama_sekretaris: string,
	pengurus_lainnya: string,
	periode_awal_aktif: string,
	periode_akhir_aktif: string,
	status_aktif: number,
	encId: string
}

export const useMonografWilayahStore = defineStore('monografWilayah', {
	state: () => ({ 
		infoWilayah: null as Wilayah | null,
		indukWilayah: [] as Wilayah[], 
		childWilayah: [] as Wilayah[],
	}),
	getters: {
		labelWilayah: (state) => {
			let result = {
				current: "",
				child: "",
			};

			if(state.infoWilayah!=null){
				if(state.infoWilayah.kode_desa!='000'){
					result = {
						current: "Desa/Kelurahan",
						child: ""
					}
				}
				else if(state.infoWilayah.kode_kec!='000'){
					result = {
						current: "Kecamatan",
						child: "Desa/Kelurahan"
					}
				}
				else if(state.infoWilayah.kode_kab!='00'){
					let kodeKabKota = state.infoWilayah.kode_kab.substring(2, 3);
					let current = ""
					if(kodeKabKota=="7") current = "Kota";
					else current = "Kabupaten";

					result = {
						current: current,
						child: "Kecamatan"
					}
				}
				else if(state.infoWilayah.kode_prov!='00'){
					result = {
						current: "Provinsi",
						child: "Kabupaten/Kota"
					}
				}
			}

			return result;
		},
	},
	actions: {
		setWilayah(info: Wilayah, induk: Wilayah[], child: Wilayah[]){
			this.infoWilayah = info;
			this.indukWilayah = induk;
			this.childWilayah = child
		}
	},
})