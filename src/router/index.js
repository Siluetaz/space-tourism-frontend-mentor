
import { createRouter, createWebHistory } from 'vue-router'

import Home from './../components/Home.vue'
import Destination from './../components/Destination.vue'
import Crew from './../components/Crew.vue'
import Technology from './../components/Technology.vue'

const routes = [
    { path: '/space-tourism-frontend-mentor/', name: 'Home', component: Home },
    { path: '/space-tourism-frontend-mentor/destination', name: 'Destination', component: Destination },
    { path: '/space-tourism-frontend-mentor/crew', name: 'Crew', component: Crew },
    { path: '/space-tourism-frontend-mentor/technology', name: 'Technology', component: Technology },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router