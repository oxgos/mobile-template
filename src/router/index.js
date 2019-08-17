import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        headerTitle: '首页',
        preventGoBack: true,
        showBack: true,
        keepAlive: true
      }
    }
  ]
})
