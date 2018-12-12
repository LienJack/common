// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'assets/sytle/reset.css'
import 'assets/fonts/icons.css'
import messagebox from 'components/messagebox/index.js'
import toast from 'components/toast/index.js'
import alert from 'components/alert/index.js'
import info from 'components/info/index.js'
Vue.config.productionTip = false

Vue.use(messagebox)
Vue.use(toast)
Vue.use(alert)
Vue.use(info)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
