import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/HomePage.vue'
import Projects from '../components/WorkHistory.vue'
import ContactMe from '../components/ContactInfo.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/aboutme', component: AboutPage },
  {
    path: '/',
    redirect: '/myprojects'
  },
  { path: '/myprojects', component: Projects },
  { path: '/contact', component: ContactMe },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
