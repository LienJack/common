<template>
  <label class="xf-switch">
    <input  class="xf-switch-input" type="checkbox" :disabled="disabled" @change="$emit('change', currentValue)" v-model="currentValue">
    <span class="xf-switch-core"></span>
    <div class="xf-switch-label"> <slot></slot></div>
  </label>
</template>

<script>
/**
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 * @example
 * <xf-switch v-model="value"></xf-switch>
 */
export default {
  props: {
    value: Boolean,
    disabled : {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/var.scss';
$prefix: "xf-switch";
.#{$prefix} {
  display: flex;
  align-items: center;
  position: relative;
  * {
    pointer-events: none;
  }
}

.#{$prefix}-label {
  margin-left: 10px;
  display: inline-block;
}

.#{$prefix}-core {
  display: inline-block;
  position: relative;
  width: 52px;
  height: 32px;
  border: 1px solid $color-grey;
  border-radius: 16px;
  box-sizing: border-box;
  background: $color-grey;
  &::after, &::before {
      content: " ";
      position: absolute;
      top: 0;
      right: 0;
      transition:transform .3s;
      border-radius: 15px;
    }
    &::after {
      width: 30px;
      height: 30px;
      background-color: $color-white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
    }
    &::before {
      width: 50px;
      height: 30px;
      background-color: #fdfdfd;
    }
}
.#{$prefix}-input {
  display: none;
  &:checked {
    + .#{$prefix}-core {
        border-color: $color-blue;
        background-color: $color-blue;

        &::before {
          transform: scale(0);
        }

        &::after {
          transform: translateX(-21px);
        }
      }
  }
}
</style>


