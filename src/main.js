// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.use(VueI18n)
Vue.use(ElementUI, { size: 'small' })
// Vue.config.lang = 'zh-cn'
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
