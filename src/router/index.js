import { createRouter, createWebHashHistory } from 'vue-router'
import HomeMain from "@/views/HomeMain";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeMain,
    meta: {
      title: "Login - Super gestão"
    }
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import( '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
