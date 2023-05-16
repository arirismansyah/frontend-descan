import { defineStore } from "pinia";
import type { DataDashboard } from "@/models/DataDashboard";
export const useDataMonographStore = defineStore("dataMonograph", {
  state: () => ({
    datas: [] as DataDashboard[],
  }),
  actions: {
    setData(listData: DataDashboard[]) {
      this.datas = listData;
    },
  },
});
