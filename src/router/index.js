
import { createRouter, createWebHistory } from 'vue-router'

import Home from './../components/Home.vue'
import Destination from './../components/Destination.vue'
import Crew from './../components/Crew.vue'
import Technology from './../components/Technology.vue'

const routes = [
    { path: '/space-tourism/dist/', name: 'Home', component: Home },
    { path: '/space-tourism/dist/destination', name: 'Destination', component: Destination },
    { path: '/space-tourism/dist/crew', name: 'Crew', component: Crew },
    { path: '/space-tourism/dist/technology', name: 'Technology', component: Technology },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router