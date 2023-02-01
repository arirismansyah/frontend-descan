<script setup>
    defineProps({
        kodeWilayah: String,
        name: String
    })

    function getLogoAssets(kode){
        return new URL(`../../assets/images/kabs-logo/logo${kode}.png`, import.meta.url).href
    }
</script>

<template>
    <div class="card mx-1">
        <div class="card-body px-3 py-3">
        <figure
            class="img-responsive overlay overlay-1 hover-scale rounded mb-0"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            :data-bs-original-title="name">
            <a :href="'/summary/'+kodeWilayah">
                <img
                    class="img-responsive"
                    :src="getLogoAssets(kodeWilayah)"
                    alt=""
                    style="max-height: 80px; width: auto" />
                    <span class="bg"></span>
            </a>
            <figcaption>
            <small class="mdi md-map from-top"></small>
            </figcaption>
        </figure>
        </div>
        <!--/.card-body -->
    </div>
</template>