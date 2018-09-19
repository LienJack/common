<template>
  <div @change="$emit('change', currentValue)" class="mint-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="xf-checklist-title" v-text="title"></label>
    <xf-cell v-for="(option, index) in options" :key='index'>
      <label class="xf-checklist-label" slot="title">
        <span
          class="xf-checkbox"
          :class="{'is-right': align === 'right'}"
        >
          <input 
            class="xf-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option"
            >
          <span class="xf-checkbox-core"></span>
        </span>
        <span class="xf-checkbox-label" v-text="option.label"></span>
      </label>
    </xf-cell>
  </div>
</template>

<script>
/**
 *
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 *
 * @example
 * <mt-checklist :v-model="value" :options="['a', 'b', 'c']"></mt-checklist>
 */
import XfCell from 'components/cell/cell'
export default {
  components: { XfCell },
    props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },
  data() {
    return {
      currentValue: this.value
    }
  },

  computed: {
    limit() {
      return this.max < this.currentValue.length
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      if(this.limit) { val.pop()}
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/sytle/var.scss';
$prefix: 'xf-checklist';
$checkbox: 'xf-checkbox';
.#{$prefix}-label {
  display: block;
  padding: 0 10px;
} 
.#{$prefix}-title {
  color: $checklist-title-color;
  display: block;
  font-size: 12px;
  margin: 8px;
}
.#{$checkbox}-label {
  vertical-align: middle;
  margin-left: 6px;
} 
.#{$checkbox}-input {
  display: none;
  &:checked {
    + .#{$checkbox}-core {
      background-color: $color-blue;
      border-color: $color-blue;
      &::after {
        border-color: $color-white;
        transform: rotate(45deg) scale(1)
      }
    }
  }
  &[disabled] + .#{$checkbox}-core {
    background-color: $color-grey;
    border-color: #ccc;
  }
}
.#{$checkbox}-core {
  display: inline-block;
  background-color: $color-white;
  border-radius: 100%;
  border:1px solid #ccc;
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  transition: transform .2s;
  &::after {
    border: 2px solid transparent;
    border-left: 0;
    border-top: 0;
    content: " ";
    position: absolute;
    top: 3px;
    right: 7px;
    width: 4px;
    height: 8px;
    transform: rotate(45deg) scale(0);
    transition: transform .2s;
  }
}
.#{$prefix} /deep/ .xf-cell {
  padding: 0;
}
</style>


