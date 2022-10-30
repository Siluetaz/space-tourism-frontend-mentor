<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Home from './components/Home.vue'
import Destiantion from './components/Destination.vue'

const route = useRoute()
let backgroundImage = ref('')
let loaded = ref('./assets/load.gif')
let device = ref('')
let imgSection = ref('home')
let iconLink = ref('./../../assets/shared/icon-hamburger.svg')
let icon = ref('hamburguer')
let menuAction = ref('closeModal')
const iconState = (iconValue) => {
  if (iconValue === 'hamburger') {
    icon.value = 'close'
    menuAction.value = 'openModal'
  } else {
    icon.value = 'hamburger'
    menuAction.value = 'closeModal'
  }
  iconLink.value = `./../../assets/shared/icon-${icon.value}.svg`
}
const catchSize = () => {
  let screenSize = document.body.clientWidth.toFixed();
  if (screenSize <= 426) {
    device.value = 'mobile'
  } else if (screenSize <= 768) {
    device.value = 'tablet'
  } else {
    device.value = 'desktop'
  }
  console.log(screenSize)
  console.log(device.value)
  backgroundImage.value = './../../assets/' + imgSection.value + '/background-' + imgSection.value + '-' + device.value + '.jpg'
}

window.addEventListener('resize', catchSize)

watch(route, async (newValue) => {

  switch (newValue.name) {
    case 'Home':
      imgSection.value = 'home'
      break;
    case 'Destination':
      imgSection.value = 'destination'
      break;
    case 'Crew':
      imgSection.value = 'crew'
      break;
    case 'Technology':
      imgSection.value = 'technology'
      break;
  }
  backgroundImage.value = './../../assets/' + imgSection.value + '/background-' + imgSection.value + '-' + device.value + '.jpg'
})
onMounted(() => {
  setTimeout(() => {
    loaded.value = ''
  }, 0)
  catchSize()
})

</script>

<template>
  <div class="loading" v-if="loaded !== ''"><img src="./assets/load.gif" alt=""></div>
  <transition name="fade" v-else>
    <img class="background" :src="backgroundImage" :key="backgroundImage" alt="">
  </transition>
  <div class="container">
    <header class="navbar">
      <div class="img-logo">
        <img src="./../assets/shared/logo.svg" alt="">
      </div>
      <hr class="line">
      <transition name="fade-menu">
        <img class="img-menu" :src="iconLink" @click="iconState(icon)" :key="iconLink">
      </transition>
      <div :class="['nav', device === 'mobile' ? menuAction : '']">
        <div class="nav-options">
          <router-link to="/space-tourism/dist/" class="nav-btn">
            <div><strong>00</strong> HOME</div>
          </router-link>
          <router-link to="/space-tourism/dist/destination" class="nav-btn">
            <div><strong>01</strong> DESTINATION</div>
          </router-link>
          <router-link to="/space-tourism/dist/crew" class="nav-btn">
            <div><strong>02</strong> CREW</div>
          </router-link>

          <router-link to="/space-tourism/dist/technology" class="nav-btn">
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

.fade-menu-enter-active,
.fade-menu-leave-active {
  transition: opacity 0.4s ease;
}

.fade-menu-enter-from,
.fade-menu-leave-to {
  opacity: 0;
}
</style>
