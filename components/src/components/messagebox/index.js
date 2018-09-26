import msgBox from './messagebox'

const MessageBox = {};
MessageBox.install = function (Vue, options) {
  const MessageBoxInstance = Vue.extend(msgBox)
  let currentMsg
  const initInstance = () => {
    currentMsg = new MessageBoxInstance()
    let msgBoxEl = currentMsg.$mount().$el
    document.body.appendChild(msgBoxEl)
  }
  Vue.prototype.$msgBox = {
    open(options) {
      if(!currentMsg) {
        initInstance()
      }
      if(typeof options === 'string') {
        currentMsg.content = options
      } else if (typeof options === 'object') {
        Object.assign(currentMsg, options) // 不是很理解
      }
      return currentMsg.showMsgBox()
        .then(val => {
          currentMsg = null
          return Promise.resolve(val)
        })
        .catch(err => {
          currentMsg = null
          return Promise.reject(err)
        })
    }
  }
}

export default MessageBox