import Vue from "vue"
import confirmCom from './confirm'

const confirm = {}
confirm.install = function(Vue, options) {
  let i =0
  const confirmConstrunctor = Vue.extend(confirmCom)
  Vue.prototype.$confirm = {
    open: (options) => {
      return new Promise (resolve => {
        const vm = new confirmConstrunctor()
        if(typeof options === 'string') {
          vm.content = options
        } else if (typeof options === 'object') {
          object.assign(vm, options)
        }
        const el = vm.$mount().$el
        document.body.appendChild(el)
        vm.$on('confirm', ()=> resolve(true))
        vm.$on('cancel', ()=> reject(false))
        Promise.resolve(true)
      })     
    },
  }
}



// const Alert = {}
// Alert.install = function(Vue, options) {
//   const alertConstrunctor = Vue.extend(alertComponent)
//   const queque = []
//   const next = () => {
//     if (queque.length === 0) return
//     const vm = queque[0]
//     const el = vm.$mount().$el
//     document.body.appendChild(el)
//   }
//   Vue.prototype.$alert = {
//     open: (options) => {
//       return new Promise (resolve => {
//         let currentAlert = new alertConstrunctor()
//         if(typeof options === 'string') {
//           currentAlert.content = options
//         } else if (typeof options === 'object') {
//           object.assign(currentAlert, options)
//         }
//         queque.push(currentAlert)
//         if(queque.length === 1) {
//           const vm = queque[0]
//           const el = vm.$mount().$el
//           document.body.appendChild(el)
//           vm.$on('close', ()=> queque.shift())
//           vm.$on('confirm', ()=> resolve(true))
//         }
//       })     
//     },
//     close: () => {
//       currentAlert.isShow = false
//     }
//   }
// }
export default confirm