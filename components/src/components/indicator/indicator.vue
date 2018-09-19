<template>
  <transition name="xf-indicator">
    <div class="xf-indicator" >
      <div class="xf-indicator-wrapper" style="padding:15px">
        <xf-spinner class="xf-indicator-spin"></xf-spinner>
        <span class="xf-indicator-text">1234</span>
      </div>
      <div class="xf-indicator-mask"></div>
    </div>
  </transition>
</template>

<script>
import XfSpinner from 'components/spinner/index'
export default {
  components: { XfSpinner }
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
.#{$prefix}-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  background: transparent;
  z-index: 3000;
}


</style>




