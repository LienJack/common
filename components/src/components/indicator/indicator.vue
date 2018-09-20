<template>
  <transition name="xf-indicator" >
    <div class="xf-indicator" v-show="visible">
      <div class="xf-indicator-wrapper" :style="{'padding':text ? '20px': '15px'}">
        <xf-spinner class="xf-indicator-spin" :type="selectSpinnerType" :size="32"></xf-spinner>
        <span class="xf-indicator-text" v-text="text"></span>
      </div>
      <div class="xf-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<script>
import XfSpinner from 'components/spinner/index'
export default {
  components: { XfSpinner },
  data() {
    return {
      visible: false,
      text: null,
      type: 'snake',
      // onShow: () => {},
      // onHide: () => {},
    }
  },
  computed: {
    selectSpinnerType() {
      switch (this.type) {
        case 'double-bounce':
          return 1;
        case 'triple-bounce':
          return 2;
        case 'fading-circle':
          return 3;
        case '1':
          return 1;
        case '2':
          return 2;
        case '3':
          return 3;
        default:
          return 0;
      }
    },
  },
  methods: {
    open(params) {
      if (params) {
        this.text = typeof params === 'string' ? params : params.text || ''
        this.type = params.type || 'snake'
      } else {
        this.text = null
        this.type = 'snake'
      }
      this.visible = true
    },
    close() {
      this.visible = false
    }
  },
  watch: {
    // visible (val) {
    //   if(val && typeof this.onShow === 'function') {
    //     this.onShow()
    //   } else if (!val && typeof this.onHide === 'function') {
    //     this.onHide()
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
$prefix: "xf-indicator";
.#{$prefix} {
  transition: opacity .2s linear;
}
.#{$prefix}-wrapper {
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  box-sizing: border-box;
  text-align: center;
  z-index: 3000;
}
.#{$prefix}-spin {
  display: inline-block;
  text-align: center;
}
.#{$prefix}-text {
  display: block;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
}
.#{$prefix}-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  background: transparent;
  z-index: 2500;
}

.#{$prefix}-enter,
.#{$prefix}-leave-active {
  opacity: 0;
}

</style>




