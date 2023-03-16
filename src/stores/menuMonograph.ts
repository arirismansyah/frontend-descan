import { defineStore } from "pinia";
export const useMenuStore = defineStore("menu", {
  state: () => ({
    menu: "monograph",
  }),
  actions: {
    changeMenu(selectedMenu: string) {
      this.menu = selectedMenu;
    },
  },
});
