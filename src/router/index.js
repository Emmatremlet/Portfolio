import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import NotFound from '../pages/NotFound.vue'


const routes = [
  {
    path: "/",
      name: "Accueil",
      component: Home,
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
