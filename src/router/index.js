import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import WorkHistory from '../components/WorkHistory.vue'
import ContactMe from '../components/ContactInfo.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/workhistory', component: WorkHistory },
  { path: '/contact', component: ContactMe },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
