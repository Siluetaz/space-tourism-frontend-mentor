<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Home from './components/Home.vue'
import Destiantion from './components/Destination.vue'

let active = ref('')
const route = useRoute()

const changeActive = (view) => {
  active.value = view

}

onMounted(async () => {
})
watch(route, async (newValue) => {
  // switch (newValue.name) {
  //   case 'Home':
  //     document.body.style.backgroundImage = 'url(./../../assets/home/background-home-desktop.jpg)'
  //     break;
  //   case 'Destination':
  //     document.body.style.backgroundImage = 'url(./../../assets/destination/background-destination-desktop.jpg)'
  //     break;
  //   case 'Crew':
  //     document.body.style.backgroundImage = 'url(./../../assets/crew/background-crew-desktop.jpg)'
  //     break;
  //   case 'Technology':
  //     document.body.style.backgroundImage = 'url(./../../assets/technology/background-technology-desktop.jpg)'
  //     break;
  // }
  active.value = newValue.name
})
</script>

<template>
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

</style>
