import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TwoUrlParams',
    component: Home,
    props:true
  },
  {
    path: '/about',
    name: 'NoURLParams',
    component:About
  }
]

const router = new VueRouter({
  routes
})

export default router
