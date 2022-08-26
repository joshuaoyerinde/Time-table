import { createRouter, createWebHistory } from 'vue-router'
import Time from '../components/Time.vue'
import Register from '../components/Register.vue'
import Table from '../components/Table.vue'
const routes = [
  {
    path: '/time',
    name: 'Home',
    component: Time
  },
  {
    path:'/time-table',
    name:'timetable',
    component:Register

  },
  {
    path:'/table-sheet',
    name:'table-sheet',
    component:Table

  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
