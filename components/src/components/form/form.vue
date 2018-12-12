<template>
  <form >
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'iForm',
  data() {
    return {
      fields: []
    }
  },
  provide() {
    return {
      form: this
    }
  },
  created() {
    this.$on('on-form-item-add', (field)=> {
      if(field) this.fields.push(field)
    })
    this.$on('on-form-item-remove', (field)=> {
      if(field.prop) this.fields.splice(this.fields.indexOf(field),1)
    })
  },
  props:{
    model:{
      type: Object
    },
    rules: {
      type: Object
    }
  }
}
</script>
