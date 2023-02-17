import { defineStore } from "pinia";
import type { Pengurus } from "@/models/Pengurus";

export const usePengurusStore = defineStore('pengurus', {
	state: () => ({ 
		pengurus: [] as Pengurus[]
	}),
	actions: {
		setPengurus(pengurus: Pengurus[]){
			this.pengurus = pengurus
		}
	},
})