import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CreditsView from '../views/CreditsView.vue'
import LetterBoxView from '../views/LetterBoxView.vue'
import LetterWriteView from '../views/LetterWriteView.vue'

import CarouselView from '../views/CarouselView.vue'
import WriteCardView from '../views/WriteCardView.vue'
import NotFound from '../views/NotFound.vue'
import ShareView from '../views/ShareView.vue'

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
    path: '/write-card/:id',
    name: 'write-card',
    component: WriteCardView
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
    path: '/ma-lettre/:id',
    name: 'letterWrite',
    component: LetterWriteView
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
  {
    path: '/reussie',
    name: 'success',
    component: ShareView
  },
  {
      path:"/:pathMatch(.*)*",
      name:"NotFound",
      component: NotFound,
      meta: {
          hideNavbarElem: true,
          hideAllNav: true
      },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
