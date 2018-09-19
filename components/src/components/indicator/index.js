import Vue from 'vue'

const Indicator = Vue.extend(require('./indicator.vue')); // 路径要改

let instance; // 实现单例
Vue.$indicator = Vue.prototype.$indicator = Indicator;
export default {
  open(options = {}) {
    if(!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if(instance.visable) return;
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.spinnerType = options.spinnerType || 'snake';
    document.body.appendChild(instance.$el);

    Vue.nextTick(()=> {
      instance.visable = true;
    })
  },
  close () {
    if(instance) {
      instance.visable = false;
    }
  }
}

