<script setup>
import { ref, onMounted, watch } from "@vue/runtime-core"
import data from './../../data.json'

let jsonData = data
let techSelected = ref(jsonData.technology[0])
onMounted(() => {

})
</script>

<template>
    <div class="content-tech">
        <div class="title"><strong>03</strong> Space launch 101</div>
        <div class="tech-info-side">
            <div class="tech">
                <div class="navigation-tech">
                    <div v-for="(tech, index) in jsonData.technology" :key="tech"
                        :class="['circle-tech', techSelected.name === tech.name ? 'active' : '']"
                        @click="techSelected = tech">{{ index + 1 }}
                    </div>
                </div>
                <div class="text-tech">
                    <div class="subtitle">THE TERMINOLOGY...</div>
                    <div class="name">{{ techSelected.name }}
                    </div>
                    <div class="description-tech">{{ techSelected.description }}
                    </div>
                </div>
            </div>
        </div>
        <div class="img-side">
            <div class="tech-img">
                <transition name="slide-fade">
                    <img :src="techSelected.images.portrait" :key="techSelected.images.portrait" alt="">
                </transition>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
