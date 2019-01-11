import Vue from 'vue'
import Overlay from '../../overlay'
import context from './context';

const defalutConfig = {
  className: '',
  customStyle: {}
}

export default {
  open(vm, config) {
    if(!context.stack.some(item => item.vm === vm)) {
      const el = vm.$el
      const target = el && el.parentNode ? el.parentNode : document.body
      context.stack.push({ vm, config, target})
      this.update()
    }
  },

  close(vm) {
    const { stack } = context
    
    if(stack.length) {
      if(context.top.vm === vm) {
        stack.pop()
        this.update()
      } else {
        context.stack = stack.filter(item => item.vm !== vm)
      }
    }
  },

  update() {
    let { modal } = context

    if(!modal) {
      modal = new(Vue.extend(Overlay)({
        el: document.createElement('div')
      }))
      modal.$on('click', this.onClick)
      context.modal = modal
    }

    if(modal.$el.parentNode) {
      modal.visible = false
    }

    if(context.top) {
      const { target, config } = context.top
      
      target.appendChild(modal.$el)
      Object.assign(modal, defalutConfig, config, {
        visible: true
      }) 
    }
  }
}