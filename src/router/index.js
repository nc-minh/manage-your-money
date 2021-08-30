import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../configs/firebase.js'
// Auth Guards
const requireAuth = (to, from, next) =>{
  const user = projectAuth.currentUser
  console.log('before enter router: ', user);
  if(!user){
    next({ name: 'Login', params: {} })
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      text: 'Heyy!',
      leading: true
    },
    component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'auth',
      text: 'Register',
      leading: true
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth',
      text: 'Login',
      leading: true
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      text: 'Profile',
      leading: false
    },
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile'),
    beforeEnter: requireAuth
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: {
      text: 'Logout',
      leading: true
    },
    component: () => import(/* webpackChunkName: "logout" */ '../views/logout')
  },
  {
    path: '/report',
    name: 'Report',
    meta: {
      text: 'Report',
      leading: true
    },
    component: () => import(/* webpackChunkName: "report" */ '../views/report')
  },
  {
    path: '/budget',
    name: 'Budget',
    meta: {
      text: 'Budget',
      leading: true
    },
    component: () => import(/* webpackChunkName: "budget" */ '../views/budget')
  },
  {
    path: '/new_transaction',
    name: 'New_transaction',
    component: () => import(/* webpackChunkName: "new_transaction" */ '../views/new_transaction')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
