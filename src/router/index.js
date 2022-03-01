import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/line'
  },
  {
    path: '/line',
    component: () => import('@/pages/line')
  },
  {
    path: '/pie',
    components: () => import('@/pages/pie')
  }
]

const router = new VueRouter({
  routes
})

export default router
