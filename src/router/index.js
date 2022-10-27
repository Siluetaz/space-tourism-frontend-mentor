
import { createRouter, createWebHistory } from 'vue-router'

import Home from './../components/Home.vue'
import Destination from './../components/Destination.vue'
import Crew from './../components/Crew.vue'
import Technology from './../components/Technology.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/destination', name: 'Destination', component: Destination },
    { path: '/crew', name: 'Crew', component: Crew },
    { path: '/technology', name: 'Technology', component: Technology },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router