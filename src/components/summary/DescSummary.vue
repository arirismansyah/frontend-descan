<template>
  <v-card>
    <v-card-title>
      <strong>Deskripsi</strong>
    </v-card-title>
    <v-card-subtitle>{{ labelWilayah }} {{ infoWilayah.nama }}</v-card-subtitle>
    <v-card-text>
      <v-row class="d-flex justify-center">
        <v-col cols="12" class="d-flex justify-center">
          <v-avatar color="blue" size="160">
            <v-avatar color="white" size="150">
              <v-icon size="150" icon="mdi-account-circle"></v-icon>
            </v-avatar>
          </v-avatar>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <h3>{{ labelWilayah }} {{ infoWilayah.nama }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-divider class="mx-4 mb-1"></v-divider>
        <v-col cols="12" class="d-flex justify-center align-center">
          <p class="subtitle-text">Deskripsi singkat mengenai daerah</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  	import { ref, computed, onMounted  } from "vue";
	import { storeToRefs } from 'pinia'
	import { useMonografWilayahStore } from '@/stores/monografWilayah'

	// const monografStore = useMonografWilayahStore()

  	const { infoWilayah, labelWilayah } = storeToRefs(useMonografWilayahStore())
</script>
