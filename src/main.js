import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import fastclick from 'fastclick'
import EventBus from '@/common/js/EventBus'

import '@/common/js/vconsole'

// 解决移动端浏览器点击300毫秒的延迟
fastclick.attach(document.body)

Vue.prototype.$eventBus = EventBus

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.dispatch('setPageConfig', {
    preventGoBack: to.meta.preventGoBack,
    showBack: to.meta.showBack,
    headerTitle: to.meta.headerTitle,
    keepAlive: to.meta.keepAlive
  })
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
