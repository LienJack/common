<template>
    <div>
      <div class="xf-actionsheet">
        <ul class="xf-actionsheet-list">
          <li class="xf-actionsheet-list-item">1234</li>
          <li class="xf-actionsheet-list-item">1234</li>
          <li class="xf-actionsheet-list-item">1234</li>
        </ul>
      </div>
    </transition>
    <div class="xf-actionsheet-mask"></div>
  </div>
</template>

<script>
export default {
  
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
  .#{$prefix}-list-item, button {
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
</style>

