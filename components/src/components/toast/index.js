import toast from './toast.vue'
import { resolve } from 'path';

const Toast =  {}
Toast.install = function (Vue, options) {
  const ToastInstance = Vue.extend(toast)
  let currentToast
  let queue = []
  let isRunning = false
  const initInstance = () => {
    currentToast = new ToastInstance()
    let toastEl = currentToast.$mount().$el
    document.body.appendChild(toastEl)
  }
  // let getInstance = () => {
  //   if (queue.length > 0) {
  //     let instance = queue.shift()
  //     return instance
  //   } 
  //   return new ToastInstance()
  // }
  // function addToast (instance) {
  //   return new Promise((resolve ,reject) => {
  //     this.queue.push({instance, resolve, reject})
  //   })
  // }
  // function removeDom (evnent) {
  //   if(event.target.parentNode) {
  //     event.target.parentNode.removeChild(event.target)
  //   }
  // }
  // Vue.prototype.$toast = {
  //   open(options) {

  //     if(typeof options === 'string') {
  //       currentToast.message = options
  //     } else if (typeof options ==="object") {
  //       Object.assign(currentToast, options)
  //     }
  //     Vue.nextTick(function() {
  //       currentToast.visible = true
  //       setTimeout(() => currentToast.visible = false,1000)
  //     })
  //     return currentToast
  //   },
  // }
  Vue.prototype.$toast = {
    open(options) {
      let duration = options.duration || 3000
      if(!currentToast) {
        initInstance()
      } else {

      }
      if(typeof options === 'string') {
        currentToast.message = options
      } else if (typeof options ==="object") {
        Object.assign(currentToast, options)
      }
      Vue.nextTick(function() {
        currentToast.visible = true
        setTimeout(() => currentToast.visible = false,1000)
      })
      return currentToast
    },
  }
}
export default Toast
