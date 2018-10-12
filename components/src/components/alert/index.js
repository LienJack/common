import Vue from "vue"
import alertComponent from './alert'

const Alert = {}
Alert.install = function(Vue, options) {
  // const alertConstrunctor = Vue.extend(alertComponent)
  // let  currentAlert
  // const initInstance = () => {
  //   currentAlert = new alertConstrunctor()
  //   let AlertEl = currentAlert.$mount().$el
  //   document.body.appendChild(AlertEl)
  // }
  // Vue.prototype.$alert = {
  //   open: (options) => {
  //     initInstance()
  //     if(typeof options === 'string') {
  //       currentAlert.content = options
  //     } else if (typeof options === 'object') {
  //       object.assign(currentAlert, options)
  //     }
  //     currentAlert.isShow = true
  //     return currentAlert.showAlert()
  //     .then( val => {
  //       currentAlert = null
  //       return Promise.resolve(val)
  //     })
  //     .catch( err => {
  //       currentAlert = null
  //       return Promise.reject(err)
  //     })
      
  //   },
  //   close: () => {
  //     currentAlert.isShow = false
  //   }
  // }
  const alertConstrunctor = Vue.extend(alertComponent)
  // let  currentAlert
  const queue = new PromiseQueue()
  // const next = () => {
  //   if (alertArray.length === 0) {
  //     return
  //   }
  //   const vm = alertArray[0]
  //   const alertEl = vm.$mount().$el
  //   document.body.appendChild(alertEl)
  //   return vm.showAlert().then(val => {
  //     // debugger
  //     alertArray.shift()
  //     next()
  //     return Promise.resolve()
  //   })
  // }
  Vue.prototype.$alert = {
    open: (options) => {
      // initInstance()
      const vm = new alertConstrunctor()
      if(typeof options === 'string') {
        vm.content = options
      } else if (typeof options === 'object') {
        object.assign(vm, options)
      }
      queue.add(vm)
    },
    close: () => {
      // currentAlert.isShow = false
    }
  }
}
class PromiseQueue {
  constructor(config = {} ) {
    const { interval = 0, } = config
    this.config = { interval }
    this.config = config
    this.isRuning = false
    this.queue = []
  }
  add (vm) {
    return new Promise ((resolve, reject) => {
      this.queue.push({ vm, resolve, reject })
      if(!this.isRuning) {
        this._checkNext()
      }
    })
  }
  _checkNext () {
    this.isRuning = true
    if (!this.queue.length) { return this.isRuning = false }
    if (this.queue.length) {
      const { vm, resolve, reject } = this.queue.shift()
      const alertEl = vm.$mount().$el
      document.body.appendChild(alertEl)
      vm.showAlert().then((data)=> {
        resolve(data)
        this._checkNext()
      }).catch(err => {
        reject(err)
      }).then(()=>{this._checkNext()})
      
    }
  }
}
export default Alert