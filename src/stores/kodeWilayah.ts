import { defineStore } from "pinia";
export const useKodeWilayahStore = defineStore("kode", {
  state: () => ({
    kode: "16",
  }),
  actions: {
    changeKode(kodeWilayah: string) {
      this.kode = kodeWilayah;
    },
  },
});
