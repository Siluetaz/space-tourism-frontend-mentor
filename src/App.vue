<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Home from './components/Home.vue'
import Destiantion from './components/Destination.vue'

let active = ref('')
const route = useRoute()
let backgroundImage = ref('home')
let loaded = ref('./assets/load.gif')
const changeActive = (view) => {
  active.value = view
}

onMounted(async () => {
  setTimeout(() => {
    loaded.value = ''
  }, 3000)
})
watch(route, async (newValue) => {
  switch (newValue.name) {
    case 'Home':
      backgroundImage.value = 'home'
      break;
    case 'Destination':
      backgroundImage.value = 'destination'
      break;
    case 'Crew':
      backgroundImage.value = 'crew'
      break;
    case 'Technology':
      backgroundImage.value = 'technology'
      break;
  }
  active.value = newValue.name
})
</script>

<template>

  <div class="loading" v-if="loaded !== ''"><img src="./assets/load.gif" alt=""></div>

  <transition name="fade" v-if="loaded === ''">
    <img class="background"
      :src="'./../../assets/' + backgroundImage + '/background-' + backgroundImage + '-desktop.jpg'"
      :key="backgroundImage" alt="">
  </transition>
  <div class="container">
    <header class="navbar">
      <div class="img-logo">
        <img src="./../assets/shared/logo.svg" alt="">
      </div>
      <hr class="line">
      <div class="nav">
        <div class="nav-options">
          <router-link to="/" :class="['nav-btn', active === 'Home' ? 'active' : '']">
            <div><strong>00</strong> HOME</div>
          </router-link>
          <router-link to="/destination" :class="['nav-btn', active === 'Destination' ? 'active' : '']">
            <div><strong>01</strong> DESTINATION</div>
          </router-link>
          <router-link to="/crew" :class="['nav-btn', active === 'Crew' ? 'active' : '']">
            <div><strong>02</strong> CREW</div>
          </router-link>

          <router-link to="/technology" :class="['nav-btn', active === 'Technology' ? 'active' : '']">
            <div><strong>03</strong> TECHNOLOGY</div>
          </router-link>
        </div>
      </div>
    </header>
    <router-view class="content-view"></router-view>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-load-enter-active,
.fade-load-leave-active {}

.fade-load-enter-from,
.fade-load-leave-to {}

.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  background-color: black;
}
</style>
