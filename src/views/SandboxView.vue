<template>
    <SandboxLayout></SandboxLayout>
</template>

<script setup lang="ts">
  	import { onMounted } from "vue";
    import SandboxLayout from "@/components/layouts/SandboxLayout.vue";

	onMounted(() => {
		const pluginScript = document.createElement("script");
        pluginScript.setAttribute("src","/src/assets/sandbox/js/plugins.js");
        document.head.appendChild(pluginScript);

		const themeScript = document.createElement("script");
        themeScript.setAttribute("src","/src/assets/sandbox/js/themes.js");
        document.head.appendChild(themeScript);
	})
</script>
