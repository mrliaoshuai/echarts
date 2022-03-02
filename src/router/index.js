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
    path: '/bar',
    component: () => import('@/pages/bar')
  },
  {
    path: '/map',
    component: () => import('@/pages/map')
  },
  {
    path: '/scatter',
    component: () => import('@/pages/scatter')
  },
  {
    path: '/pie',
    component: () => import('@/pages/pie')
  },
  {
    path: '/gauge',
    component: () => import('@/pages/gauge')
  },
  {
    path: '/radar',
    component: () => import('@/pages/radar')
  }
]

const router = new VueRouter({
  routes
})

export default router
