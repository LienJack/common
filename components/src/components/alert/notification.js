import Alert from './alert.vue'
import Vue from 'vue'

Alert.newInstance = properties => {
  const props = properties || {}

  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props: props
      })
    }
  })

  const component = Instance.$mount()
  
}
