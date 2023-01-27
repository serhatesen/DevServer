import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../components/Login.vue'
import register from '../components/register.vue'
import HomeView from '../components/login/user/userinterface.vue'
import admininterface from "@/components/login/admin/admininterface.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/home',
    name: 'userInterfaceView',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'adminInterfaceView',
    component: admininterface
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
