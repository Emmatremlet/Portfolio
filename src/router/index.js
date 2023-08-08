import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../components/NotFound.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Modal from '../components/Modal.vue'
import Presentation from '../components/Presentation.vue'
import Contact from '../components/Contact.vue'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: App,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
    {
      path: "/Header",
      component: Header,
    },
    {
      path: "/Presentation",
      component: Presentation,
    },
    {
      path: "/Modal",
      component: Modal,
    },
    {
      path: "/Contact",
      component: Contact,
    },
    {
      path: "/Footer",
      component: Footer,
    },
  ]
})

export default router
