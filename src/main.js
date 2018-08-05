import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {  routes } from './routes'
import axios from 'axios'

Vue.config.productionTip = false
// axios.defaults.baseURL = "http://...."
Vue.prototype.http = axios;

Vue.use(VueRouter)



const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0,  y: 0 };
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')