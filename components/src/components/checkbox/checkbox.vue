<template>
  <label >
    <span>
      <input 
        v-if="group"
        type="checkbox"
        :value="label"
        v-model="model"
        @change="change">
      <input 
        v-else
        type="checkbox"
        :disabled='disabled'
        :checked="currentValue"
        @change="change">
    </span>
    <slot></slot>
  </label>
</template>
<script>
import { findComponentUpward } from '../utils/assist.js';
export default {
  name: 'iCheckbox',
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      // 只在当个时候使用
      type: [String, Number, Boolean],
      default: false,
    },
    trueValue: {
      type: [String, Number, Boolean ],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      model: [], // 多模式使用
      group: false,
      parent: null
    }
  },
  watch: {
    value(val) {
      if(val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw 'value shoul be trueValue or falseValue'
      }
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')

    if(this.parent) {
      this.group = true
    }

    if(this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },
  methods: {
    change(event) {
      if(this.disabled) {
        return false
      }

      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value) 

      if(this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value)
        this.dispatch('iFormItem', 'on-form-change', value);
      }
    },
    updateModel() {
      this.currentValue = this.value === this.trueValue
    }
  }
}
</script>

