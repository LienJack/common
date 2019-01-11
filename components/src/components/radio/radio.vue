<template>
  <div class="xf-radiolist" @change="$emit('change', currentValue)">
    <label class="xf-radiolist-title" v-text="title"></label>
    <xf-cell v-for="(option, index) in options" :key="index">
      <label class="xf-radiolist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="xf-radio">
          <input
            class="xf-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="xf-radio-core"></span>
        </span>
        <span class="xf-radio-label" v-text="option.label || option"></span>
      </label>
    </xf-cell>
  </div>
</template>

<script>
import XfCell from 'components/cell/cell'
/**
 * mt-radio
 * @module components/radio
 * @desc 单选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <xf-radio v-model="value" :options="['a', 'b', 'c']"></xf-radio>
 */
export default {
  components: { XfCell },
  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    }
  },

};
</script>

<style lang="scss" scoped>
@import 'assets/style/var.scss';
$prefix: 'xf-radiolist';
$radio: 'xf-radio';
.#{$prefix}-label {
  display: block;
  padding: 0 10px;
}
.#{$prefix}-title {
  font-size: 12px;
  margin: 8px;
  display: block;
  color: $radio-title-color;
}
.#{$prefix} /deep/ .xf-cell {
  padding: 0;
}

.#{$radio} .is-right {
  float: right;
}
.#{$radio}-label {
  vertical-align: middle;
  margin-left: 6px;
}
.#{$radio}-input {
  display: none;
  &:checked {
    + .xf-radio-core {
      background-color: $color-blue;
      border-color:$color-blue;

      &::after {
        background-color: $color-white;
        transform: scale(1)
      }
    }
  }

  &[disabled] + .#{$radio}-core {
    background-color: $color-grey;
    border-color: #ccc;
  }
}
.#{$radio}-core {
  box-sizing: border-box;
  display: inline-block;
  background-color: $color-white;
  border:1px solid #ccc;
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  border-radius: 100%;

  &::after {
    content: " ";
    border-radius: 100%;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 8px;
    height: 8px;
    transition: transform .2s;
    transform: scale(0);
  }
}
</style>

