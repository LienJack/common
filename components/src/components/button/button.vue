<template>
  <button
    :class="[classes, cname]"
    :disabled="disabled"
    @click="handleClick">
    <span>
      <!-- <slot name="btn-left" class="btn-left"/> -->
      <i class="material-icons">3d_rotation</i>
    </span>
    <label class="xf-button-label"><slot></slot></label>
    <span>
      <slot name="btn-right"/>
    </span>
  </button>
</template>

<script>
/**
 * @moudle button 
 * @param {string} [cnclass] - 接受父级传递class
 * @param {string} [color=bule] - 显示颜色，接受 blue, green
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [icon] - 图标
 * @param {slot} - 显示文本
 * 
 * @example
 * <xf-button size="large" color="bule">按钮</xf-button>
 */
const prefix = "xf-btn"
export default {
  props: {
    disabled: Boolean,
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].includes(value)
      }
    },
    cname: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'blue',
      validator(value) {
        return [
          'blue',
          'green',
        ].includes(value)
      }
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
  computed: {
    classes () {
      return [
        `${prefix}`,
        `${prefix}-${this.size}`,
        `${prefix}-${this.primary}`
        ,{
          [`${prefix}-disabled`]:this.disabled,
        }
      ]
    }
  },
}
</script>
<style lang="scss" type="text/css">
@import 'assets/sytle/var.scss';
@import 'assets/sytle/element.scss'; // button 样式
$prefix: "xf-btn";
  .#{$prefix} {
    @include button
  }
  .#{$prefix}-large {
    display: block;
    width: 100%;
  }
  .#{$prefix}-normal {
    display: inline-block;
    padding: 0 12px;
  }
  .#{$prefix}-small {
    display: inline-block;
    font-size: 14px;
    height: 33px;
  }
  .#{$prefix}-disabled {
    opacity: .6;
    background: $color-grey
  }
  .#{$prefix}-blue {
    background-color: $color-blue;
  }
  .#{$prefix}-green {
    background-color: $color-green;
  }
  .#{$prefix}-left, .#{$prefix}-right {
    vertical-align: middle;
    display: inline-block;
  }
  .#{$prefix}-label {
    display: inline-block;
  }
  

</style>

