import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomeComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../components/LoginComponent'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/RegisterComponent'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/CreateComponent'),
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
