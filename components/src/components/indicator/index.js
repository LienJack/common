import Vue from 'vue'
import Indicator from './indicator.vue'
export default {
  install (Vue) {
    const VueIndicator = Vue.extend(Indicator)
    let instance = null
    function indicator () {
      if(!instance) {
        instance = new VueIndicator()
        instance.$mount()
        document.body.appendChild(instance.$el)
      }
      return instance
    }
    Vue.prototype.$indicator = indicator()
  }
}
