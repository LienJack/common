import infoCom from './index.vue'

const info = {}
info.install = function(Vue, options) {
  const infoConstructor = Vue.extend(infoCom)
  const queue = []
  let current = null
  function create(vm) {
    queue.push(vm)
    _checkNext()
  }
  async function _checkNext() {
    if(!current && queue.length) {
      current = queue.shift()
      const el = current.$mount().$el
      document.body.appendChild(el)
      await sleep(2*1000)
      el.remove()
      await sleep(300)
      current.$destroy()
      current = null
      await sleep(200)
      _checkNext()
    }
  }
  Vue.prototype.$info = function(options) {
    const vm = new infoConstructor()
    vm.infoStr = options
    create(vm)
   
  }

}

function sleep (timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}
export default info
