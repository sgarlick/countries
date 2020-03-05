import Vue from 'vue'
import Router from 'vue-router'
//import firebase from 'firebase'
import store from '@/store'
import Register from '@/components/auth/Register.vue'
import Login from '@/components/auth/Login'
import Results from '@/components/Results'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/results',
            name: 'Results',
            component: Results,
            // meta: {
            //     authRequired: true
            // }
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
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/'
            });
        } else {
          next({
            path: '/results'
        });
        }
    } else {
      next();
    }
});

export default router;