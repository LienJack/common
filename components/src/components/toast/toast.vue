<template>
  <transition name="pop">
    <div class="xf-toast" v-show="visible" :class="customClass" :style="{'padding':iconClass === '' ? '10px':'20px'}">
      <i class="xf-toast-icon xf-icon" :class="iconClass" v-if="iconClass != ''"></i>
      <span class="xf-toast-text" :style="{'padding-top':iconClass === '' ? '0':'10px'}">{{message}}</span>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    message: String,
    position: {
      type:String,
      default: 'middle'
    },
    iconClass: {
      type:String,
      default: ''
    }
  },
  data() {
    return {
      visible: true
    }
  },
  computed: {
    customClass() {
      var classes = []
      switch(this.position) {
        case 'top':
          classes.push('placetop')
          break
        case 'bottom':
          classes.push('placebottom')
          break
        default:
          classes.push('placemiddle')  
      }
      classes.push(this.clasNmae)

      return classes.join(' ')
    }
  }
}
</script>


<style lang="scss" scoped>
 $prefix: "xf-toast";
  .#{$prefix} {
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color:#fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    // transition: opacity 0.3s linear;
  }
  .#{$prefix}-icon {
    display: block;
    text-align: center;
    font-size: 50px;
  }
  .#{$prefix}-text {
    font-size: 14px;
    display: block;
    text-align: center;
  }
  .placemiddle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .placebottom {
    bottom:50px;
    left: 50%;
    transform: translate(-50%, 0)
  }
  .placetop {
    top:50px;
    left: 50%;
    transform: translate(-50%, 0)
  }
  .pop-enter,.pop-leave-to{
    opacity: 0;
  }
  .pop-enter-active,.pop-leave-active {
    transition: .3s all ease;
  }
</style>

