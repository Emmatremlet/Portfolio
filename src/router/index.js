import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../components/NotFound.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Modal from '../components/Modal.vue'
import Presentation from '../components/Presentation.vue'
import Contact from '../components/Contact.vue'
import App from '../App.vue'


const routes = [
  {
    path: "/",
      name: "Accueil",
      component: App,
  },
  {
    path: "/404",
    name:'NotFound',
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
