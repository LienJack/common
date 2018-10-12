<template>
    <div>
      <transition name="float">
        <div class="xf-actionsheet" v-show="value">
          <ul class="xf-actionsheet-list">
            <li v-for="( item, index ) in actions" class="xf-actionsheet-list-item">{{ item.name }}</li>
          </ul>
          <a class="xf-actionsheet-button">{{ cancelText }}</a>
        </div>
    </transition>
    <div class="xf-actionsheet-mask" v-show="value" @click="close()"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: ()=> []
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    close() {
      this.value = false
    }
  }
}
</script>

<style lang="scss" scoped>
 $prefix: "xf-actionsheet";
  .#{$prefix} {
    position: fixed;
    background: #e0e0e0;
    width: 100%;
    bottom: 0;
    left: 50%;
    max-height: 100%;
    overflow-y: auto;
    transform: translate3d(-50%, 0, 0);
    transition: transform .3s ease-out;
    z-index: 1000;
  }
  .#{$prefix}-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .#{$prefix}-list-item, .#{$prefix}-button {
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    color: #333;
    text-align: center;
    background-color: #fff;
    &:active {
      background-color: #f0f0f0;
    }
  }
  .#{$prefix}-list-item {
    border-bottom: 1px solid #e0e0e0;
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
  .float-enter,
  .float-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }
</style>

