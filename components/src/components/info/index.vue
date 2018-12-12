<template>
  <transition name="pop-down" appear>
    <div class="info">
        <i class="material-icons">check_circle</i>
        <span class="text">{{ infoStr }}</span>
    </div>
  </transition>
</template>
<script>
export default {
  props:{
    infoStr: {
      type: String,
    }
  },
}
</script>


<style scoped>
.info {
    position: fixed;
    top: 3%;
    left: 50%;
    display: block;
    padding: 8px 48px 8px 16px;
    border-radius: 4px;
    border: 1px solid #8ce6b0;
    background-color: #edfff3;
    min-width: 250px;
    max-width: 400px;
    color: #515a6e;
    font-size: 12px;
    vertical-align: text-top;
    margin-bottom: 10px;
    transform: translate3d(-100%, -100%)
  }
  .info .text {
    line-height: 1;
    position: relative;
    font-size: 18px;
    top: -3px;
    margin-left: 10px;
  }
  .info .material-icons {
    color: #8ce6b0;
  }
.pop-down-enter {
  transform: translate3d(0,-100%,0);
}
.pop-down-enter-active,
.pop-down-leave-active {
  transition: all .5s;
}
.pop-down-leave-to {
  transform: translate3d(0,100%,0);
}
</style>

