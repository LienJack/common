<template>
  <div class="lien-nav-bar lien-nav-bar-fixed" :style="style">
    <div class="lien-nav-bar-left" @click="$emit('click-left')">
      <slot name="left">
        <icon
          name="keyboard_arrow_left"
          class="lien-icon"
          v-if="leftArrow"
        />
        <span
          v-if="leftText"
          v-text="leftText"
          class="lien-nav-bar-text"
        />
      </slot>
    </div>
    <div class="lien-nav-bar-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="lien-nav-bar-right" @click="$emit('click-left')">
      <slot name="right" >
        <span
          v-if="rightText"
          v-text="rightText"
          class="lien-nav-bar-text"
        />
         <icon
          name="keyboard_arrow_right"
          class="lien-icon"
          v-if="rightArrow"
        />
      </slot>
    </div>
  </div>
</template>
<script>
import icon from '../icon/icon.lien.vue'
export default {
  name: 'nav-bar',

  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    rightArrow: Boolean,
    zIndex: {
      type: Number,
      default: 1,
    }
  },
  components: { icon,},
  computed: {
    style() {
      return {
        zIndex: this.zIndex
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

