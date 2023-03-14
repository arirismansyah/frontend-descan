import { defineStore } from "pinia";
export const useThemeStore = defineStore("theme", {
  state: () => ({
    light: true,
    fullscreen: false,
  }),
  actions: {
    changeTheme() {
      this.light = !this.light;
    },

    changeFull() {
      this.fullscreen = !this.fullscreen;
    },
  },
});
