
import Vue from 'vue'
import Router from 'vue-router'


import store from './store'


import LoginPage  from './components/LoginPage'
import Hello      from './components/HelloWorld'



Vue.use(Router);


let  router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name:'main', component: Hello,
      meta: { 
        requiresAuth: true
      }
    },
    { path: '/login', name:'login', component: LoginPage }
  ]
});



router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters["user/isAuth"]) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router 