import { defineStore } from "pinia";
import type { KodeWilayah } from "@/models/Wilayah";
export const useKodeWilayahStore = defineStore("kode", {
  state: () => ({
    kode: null as KodeWilayah | null,
  }),
  actions: {
    changeKode(kodeWilayah: string) {
      this.kode = { kode: kodeWilayah };
    },
  },
});
