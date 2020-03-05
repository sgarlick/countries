import Vue from 'vue'
import Router from 'vue-router'
//import firebase from 'firebase'
import store from '@/store'
import Register from '@/components/auth/Register.vue'
import Login from '@/components/auth/Login'
import Results from '@/components/Results'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/results',
            name: 'Results',
            component: Results,
            meta: {
                authRequired: true
            }
        },
        
        {
          path: '/#/results',
          name: 'BRResults',
          component: Results,
          meta: {
              authRequired: true
          }
      },
        {
          path: '/',
          name: 'Login',
          component: Login
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        }
    ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({ name: 'Login' })
    } else {
      next({ name: 'Results' })
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router;