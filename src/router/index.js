import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import NotFound from '../pages/NotFound.vue'
import PhotoDeProfil from '../pages/PhotoDeProfil.vue'


const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/PhotoDeProfil",
    name: "PhotoDeProfil",
    component: PhotoDeProfil,
  },
  {
    path: "/:catchAll(.*)",
    name:'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
