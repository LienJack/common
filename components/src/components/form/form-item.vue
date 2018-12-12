<template>
  <div>
    <label v-if="label">{{label}}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Emitter from '../mixins/emitter.js'
import AsyncValidator from 'async-validator';
export default {
  name: 'iFormItem',
  mixins:[Emitter],
  inject: ['form'],
  mounted() {
    if(this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)
      this.setRules()
    }
  },
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this);
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
    }
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop]
    }
  },
  methods: {
    getRules() {
      let formRules = this.form.getRules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    getFiltereRule(trigger) {
      const rules = this.getRules()
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    }
  },
  props:{
    label:{
      type: String,
      default: '',
    },
    prop:{
      type: String
    }
  },
  methods:{
    setRules() {
      this.$on('on-form-blur',this.onFieldBlur)
      this.$on('on-form-change',this.onFieldChange)
    }
  }
}
</script>

