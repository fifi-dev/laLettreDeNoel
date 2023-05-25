import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CreditsView from '../views/CreditsView.vue'
import LetterBoxView from '../views/LetterBoxView.vue'

import CarouselView from '../views/CarouselView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cards',
    name: 'cards',
    component: CarouselView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/boite-aux-lettres',
    name: 'letterBox',
    component: LetterBoxView
  },
  {
    path: '/credits',
    name: 'credits',
    component: CreditsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
