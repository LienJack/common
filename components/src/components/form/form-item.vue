<template>
  <div>
    <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">{{label}}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
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
      this.initialValue = this.fieldValue
      this.setRules()
    }
  },
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this);
  },
  data() {
    return {
      isRequired: false,
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
    setRules() {
      let rules = this.getRules()
      if(rules.length) {
        // 这里为何要用every有疑问
        rules.some(rule => {
          this.isRequired = rule.required
          return this.isRequired
        })
      }
      this.$on('on-form-blur',this.onFieldBlur)
      this.$on('on-form-change',this.onFieldChange)
    },
    getRules() {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    getFiltereRule(trigger) {
      const rules = this.getRules()
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    resetField () {
      this.validateState = '';
      this.validateMessage = '';

      this.form.model[this.prop] = this.initialValue;
    },
    // 重置数据

    /**
     * 验证数据
     */
    validate(trigger, callback=function(){}){
      let rules = this.getFiltereRule(trigger)
      if(!rules || rules.length ===0) {
        return true
      }
      this.validateState = 'validating'
      let descriptor = {}
      descriptor[this.prop] = rules
      const validator = new AsyncValidator(descriptor)

      let model = {}
      model[this.prop] = this.fieldValue
      validator.validate(model,{ firstFields:true }, error => {
        this.validateState = !error ? 'success' : 'error'
        this.validateMessage = error ? error[0].message: ''
        callback(this.validateMessage)
      })
    },
    onFieldBlur(){
      this.validate('blur')
    },
    // test
    onFieldChange() {
      this.validate('change')
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
}
</script>
<style>
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>

