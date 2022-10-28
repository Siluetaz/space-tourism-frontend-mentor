<script setup>
import { ref, onMounted, watch } from "@vue/runtime-core"
import data from './../../data.json'

let jsonData = data
let planetSelected = ref(jsonData.destinations[0])

onMounted(() => {

})
</script>

<template>
    <div class="content-planet">
        <div class="planet-side">
            <div class="title"><strong>01</strong> Pick your destination</div>
            <div class="planet-img">
                <img :src="planetSelected.images.png" alt="">
            </div>
        </div>
        <div class="info-side">
            <div class="navigation-planet">
                <div v-for="planet in jsonData.destinations" :key="planet"
                    :class="['btn-planet', planetSelected.name === planet.name ? 'active' : '']"
                    @click="planetSelected = planet">
                    {{ planet.name }}
                </div>
            </div>
            <div class="name-planet">{{ planetSelected.name }}</div>
            <div class="description-planet">{{ planetSelected.description }}
            </div>
            <div class="line"></div>
            <div class="data-section">
                <div class="data">
                    <div class="title-info">AVG. DISTANCE</div>
                    <div class="info">{{ planetSelected.distance }}</div>
                </div>
                <div class="data">
                    <div class="title-info">EST. TRAVEL TIME</div>
                    <div class="info">{{ planetSelected.travel }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
