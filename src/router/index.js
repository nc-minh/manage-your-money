import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../configs/firebase.js'
import 'vue-router'
// Auth Guards
const requireAuth = (to, from ,next) =>{
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
      leading: true,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'auth',
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth',
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      text: 'Profile',
      leading: false,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile'),
    beforeEnter: requireAuth
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/logout')
  },
  {
    path: '/receipt',
    name: 'Receipt',
    meta: {
      text: 'Receipt',
      leading: false,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "report" */ '../views/receipt'),
    beforeEnter: requireAuth
  },
  {
    path: '/budget',
    name: 'Budget',
    meta: {
      text: 'Budget',
      leading: false,
      isShowFooter: true,
    },
    component: () => import(/* webpackChunkName: "budget" */ '../views/budget'),
    beforeEnter: requireAuth
  },
  {
    path: '/new_transaction',
    name: 'New_transaction',
    meta: {
      text: 'New Transaction',
      leading: false,
      isShowFooter: false,
    },
    component: () => import(/* webpackChunkName: "new_transaction" */ '../views/new_transaction'),
    beforeEnter: requireAuth
  },
  {
    path: '/404',
    name: '404',
    meta: {
      text: '404',
      leading: false,
      isShowFooter: false,
      requiresAuth: false,
    },
    component: () => import(/* webpackChunkName: "404" */ '../views/404'),
  },
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
