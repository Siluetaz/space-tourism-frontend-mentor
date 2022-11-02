<script setup>
import { ref, onMounted, watch } from "@vue/runtime-core"
import data from './../../data.json'

let jsonData = data
let planetSelected = ref(jsonData.destinations[0])

onMounted(() => {

})
</script>

<template>
    <main class="content-planet">
        <section class="planet-side">
            <h1 class="title"><strong>01</strong> Pick your destination</h1>
            <div class="planet-img">
                <transition name="fade-planet">
                    <img :src="planetSelected.images.webp" :key="planetSelected.images.webp" alt="">
                </transition>
            </div>
        </section>
        <section class="info-side">
            <div class="navigation-planet">
                <div v-for="planet in jsonData.destinations" :key="planet"
                    :class="['btn-planet', planetSelected.name === planet.name ? 'active' : '']"
                    @click="planetSelected = planet">
                    {{ planet.name }}
                </div>
            </div>
            <div class="name-planet" :key="planetSelected.name">{{ planetSelected.name }}</div>
            <p class="description-planet">{{ planetSelected.description }}
            </p>
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
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>
