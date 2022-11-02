<script setup>
import { ref, onMounted, watch } from "@vue/runtime-core"
import data from './../../data.json'

let jsonData = data
let personSelected = ref(jsonData.crew[0])

onMounted(() => {


})

</script>

<template>
    <main class="content-crew">
        <h1 class="title"><strong>02</strong> Meet your crew</h1>
        <section class="crew-info-side">
            <div class="role">{{ personSelected.role }}</div>
            <div class="name">{{ personSelected.name }}
            </div>
            <p class="bio">{{ personSelected.bio }}
            </p>
            <div class="navigation-crew">
                <div v-for="person in jsonData.crew" :key="person"
                    :class="['circle', personSelected.name === person.name ? 'active' : '']"
                    @click="personSelected = person">
                </div>
            </div>
        </section>
        <section class="person-side">
            <div class="person-img">
                <transition name="fade-crew">
                    <img :src="personSelected.images.webp" :key="personSelected.images.webp" alt="">
                </transition>
            </div>
        </section>

    </main>
</template>

<style lang="scss" scoped>
.fade-crew-enter-active {
    display: none;
    transition: all .35s;
}

.fade-crew-leave-active {
    transition: all .35s cubic-bezier(1.0, 1.0, 1.0, 1.0);
}

.fade-crew-enter,
.fade-crew-leave-to {
    opacity: 0;
}
</style>
