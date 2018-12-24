<template>
  <transition :name="currentTransition">
    <div v-show="value" class="xf-popup" :class="[position ? 'xf-popup-' + position : '']">
      <slot/>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    popupTransition: {
      type: String,
      default: 'popup'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>


