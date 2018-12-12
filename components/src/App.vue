<template>
  <div id="app">
    <!-- <xf-button @click.native="show">confirm</xf-button> -->
    <!-- <xf-actionsheet :actions="actions" v-model="isShow"></xf-actionsheet> -->
    <checkbox></checkbox>
    <!-- <i-form></i-form> -->
    <alert></alert>
  </div>
</template>

<script>
import XfButton from './components/button/button'
import XfTotast from './components/toast/toast'
import XfActionsheet from './components/actionsheet/actionsheet'
// import XfMessagebox from './components/messagebox/messagebox'
import IForm from './components/form'
import checkbox from './components/checkbox/index'
import alert from './components/alert/alert'

export default {
  name: 'App',
  components: {
    XfButton,
    XfTotast,
    XfActionsheet,
    IForm,
    checkbox,
    alert
  },
  data() {
    return {
      options:[{label:'1',value:'1'},{label:'2',value:'2'}],
      value:'',
      color: 'red',
      type:'fading-circle',
      text: '1234',
      iconClass:'xf-icon-md-bookmark',
      actions:[{name:'上传本地'}, {name:'拍摄'}, {name:'1234'}] ,
      isShow: true
    }
  },
  mounted() {

  },
  methods: {
    close () {
    },
    show() {
      this.$info('提及1')
      this.$info('提及2')
      this.$info('提及3')
      this.$info('提及4')
    }
  }
}
</script>

<style scoped>
</style>

