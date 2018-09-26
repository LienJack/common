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
Vue.config.productionTip = false

Vue.use(messagebox)
Vue.use(toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
