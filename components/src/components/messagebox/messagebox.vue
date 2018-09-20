<template>
  <div class="xf-msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="xf-msgbox">
        <div class="xf-msgbox-header">
          <div class="xf-msgbox-title">
            <slot name="header"> title </slot>
          </div>
        </div>
        <div class="xf-msgbox-content">
          <div class="xf-msgbox-message">
            <slot name="content">message</slot>
          </div>
        </div>
        <div class="xf-msgbox-btns">
          <button class="confirmButton"></button>
          <button class="cancelButton"></button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$prefix: "xf-btn";
.#{$prefix} {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  width: 85%;
  border-radius: 3px;
  font-size: 16px;
  
}
</style>


