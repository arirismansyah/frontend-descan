<template>
    <v-app-bar>
        <template v-slot:prepend>
            <img height="45" src="@/assets/images/logo/logo.png" />
            <v-app-bar-title  @click="goHome()" class="mx-4">Desa Bumi Sriwijaya</v-app-bar-title>
        </template>

        <v-toolbar-items>
            <v-divider vertical></v-divider>
            <v-btn @click="searchWilayah" variant="text">Pilih Wilayah</v-btn>

            <v-divider vertical></v-divider>
            <v-btn @click="goToPilihTematik" variant="text">Peta Tematik</v-btn>
        </v-toolbar-items>

        <div class="col-lg-5">
            <input type="text" class="form-control col-xs-3" 
                v-model="keyword" 
                v-on:keyup.enter="searchWilayah"
                placeholder="Cari wilayah...">
        </div>

        <v-spacer></v-spacer>
        <v-btn :icon="fullscreen === 'true' ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
            @click="fullScreenBrowser()"></v-btn>

        <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="changeTheme()"></v-btn>
    </v-app-bar>
</template>

<script setup>
    import { ref } from 'vue'
	import { useRouter } from 'vue-router'
    

    const router = useRouter()
    const keyword = ref("");

	function searchWilayah(){
        console.log(keyword.value)
        if(keyword.value=='') router.push({name: 'search'})
        else router.push({name: 'search', query: { keyword: keyword.value }})
	}

	function goToPilihTematik(){
		console.log("masuk wilayah");
	}

	function goHome(){
        router.push({name: 'home'})
	}
</script>