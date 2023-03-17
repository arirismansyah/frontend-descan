import { defineStore } from "pinia";
import type { Wilayah } from "@/models/Wilayah";

export const useMonografWilayahStore = defineStore("monografWilayah", {
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

      if (state.infoWilayah != null) {
        if (state.infoWilayah.kode_desa != "000") {
          result = {
            current: "Desa/Kelurahan",
            child: "",
          };
        } else if (state.infoWilayah.kode_kec != "000") {
          result = {
            current: "Kecamatan",
            child: "Desa/Kelurahan",
          };
        } else if (state.infoWilayah.kode_kab != "00") {
          result = {
            current: "Kab/Kota",
            child: "Kecamatan",
          };
        } else if (state.infoWilayah.kode_prov != "00") {
          result = {
            current: "Provinsi",
            child: "Kab/Kota",
          };
        }
      }

      return result;
    },
  },
  actions: {
    setWilayah(info: Wilayah, induk: Wilayah[], child: Wilayah[]) {
      this.infoWilayah = info;
      this.indukWilayah = induk;
      this.childWilayah = child;
    },
  },
});
