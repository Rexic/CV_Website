import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import WorkHistory from '../components/WorkHistory.vue'
import ContactMe from '../components/ContactInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  props: { msg: 'About Me' }
  },
  {
    path: '/workhistory',
    name: 'WorkHistory',
    component: WorkHistory,
  props: { msg: 'Work History' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactMe,
  props: { msg: 'Contact Me' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
