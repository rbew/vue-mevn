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
    component: () => import('../components/CreateStudentComponent'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListStudentComponent'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditStudentComponent'),
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
