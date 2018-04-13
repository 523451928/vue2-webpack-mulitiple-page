
import Vue from 'vue'
import App from './listApp'

import Vuerouter from 'vue-router'
import index from './index'
import listApp from './listApp'
import child from './child'
Vue.use(Vuerouter)
const routes = [
  { path: '/', redirect: 'list' },
  { path: '/index', component: index, children: [
    { 
      path: 'child',
      component: child
    }
  ]},
  { path: '/list', component: listApp }
]
const router = new Vuerouter({
  routes
})

new Vue({
  router
}).$mount('#app')
