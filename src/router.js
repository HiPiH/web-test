
import Vue from 'vue'
import Router from 'vue-router'


import store from './store'


import LoginPage  from './components/LoginPage'
import Main      from './components/Main'

import world1 from './components/reports/World1';
import world2 from './components/reports/World2';


Vue.use(Router);


let  router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name:'main', component: Main,meta: {requiresAuth: true}, 
      children:[
            {path :'world/map' , component: world1},
            {path :'world/table' , component: world2},
            {path :'russia' , component: world1},
            {path :'russia/moscow/map' , component: world1},
            {path :'russia/moscow/table' , component: world2},
      ]
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