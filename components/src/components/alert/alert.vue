<template>
  <div class="xf-msgbox-wrapper">
    <transition name="fade">
      <div class="xf-msgbox-mask" @click.stop="isClickClose && cancel()" v-show="isShow"></div>
    </transition>
    <transition name="popup">
      <div v-show="isShow">
        <div class="xf-msgbox">
          <div class="xf-msgbox-header">
            <div class="xf-msgbox-title">
              <slot name="header"> {{title}} </slot>
            </div>
          </div>
          <div class="xf-msgbox-content">
            <div class="xf-msgbox-message">
              <slot name="content">{{content}}</slot>
            </div>
          </div>
          <div class="xf-msgbox-btns">
            <button class="confirmButton" @click="confirm">{{confirmBtn}}</button>
            <button class="cancelButton" @click="cancel">{{cancelBtn}}</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import bus from '@/bus.js'
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default:'内容'
    },
    confirmBtn: {
      type: String,
      default: '确定'
    },
    cancelBtn: {
      type: String,
      default: '取消'
    },
    isClickClose: {
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      isShow: true,
      resolve: '',
      reject: '',
      promise: '',
    }
  },
  methods: {
    confirm () {
      this.isShow = false
      this.$emit('ok')
      this.resolve(true)
      this.remove()
    },
    cancel() {
      this.isShow = false
      // this.reject(false)
      this.remove()
    },
    showAlert() {
      this.isShow = true
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve
        // this.reject = reject
      })
      return this.promise
    },
    remove() {
      this.destory()
    },
    destory() {
      this.$destroy()
      document.body.removeChild(this.$el)
    }
  }
}
</script>

<style lang="scss" scoped>
$prefix: "xf-msgbox";
.#{$prefix} {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  width: 85%;
  border-radius: 3px;
  font-size: 16px;
  overflow: hidden;
  backface-visibility: hidden; // 背面是不可见的
  z-index: 1000;
}
.#{$prefix}-mask {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(55,55,55,.6);
  height: 100vh;
  z-index: 990;
}
.#{$prefix}-header {
  padding: 15px 0 0;
}

.#{$prefix}-content {
  padding: 10px 20px 15px;
  border-bottom: 1px solid #ddd;
  min-height: 36px;
  position: relative;
}

.#{$prefix}-title {
  text-align: center;
  padding-left: 0;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.#{$prefix}-message {
  color:#999;
  margin: 0;
  text-align: center;
  line-height: 36px;
}

.#{$prefix}-btns {
  display: flex;
  height: 40px;
  line-height: 40px;
  button {
    line-height: 35px;
    display: block;
    background-color: #fff;
    flex: 1;
    margin: 0;
    border: 0;
  }
  .confirmButton {
    color: #26a2ff;
    width: 50%;
    &:active {
      color: #26a2ff;
    }
  }
  .cancelButton {
    width: 50%;
    border-right: 1px solid #ddd;
    &:active {
      color: #000;
    }
  }
}
.fade-enter-active, .popup-enter-active {
  transition: all .2s ease;
}
.fade-leave-active, .popus-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-to,.popup-enter, .popup-leave-to
 {
  opacity: 0;
}
.popup-enter, .popup-leave-to {
  transform: scale(0.6)
}
</style>


