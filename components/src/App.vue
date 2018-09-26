<template>
  <div id="app">
    <xf-button @click.native="show">comfirm</xf-button>
    <xf-actionsheet></xf-actionsheet>
  </div>
</template>

<script>
import XfButton from './components/button/button'
import XfTotast from './components/toast/toast'
import XfActionsheet from './components/actionsheet/actionsheet'
// import XfMessagebox from './components/messagebox/messagebox'
import test from './components/test/test'

export default {
  name: 'App',
  components: {
    XfButton,
    XfTotast,
    XfActionsheet,
  },
  data() {
    return {
      options:[{label:'1',value:'1'},{label:'2',value:'2'}],
      value:'',
      color: 'red',
      type:'fading-circle',
      text: '1234',
      iconClass:'xf-icon-md-bookmark' 
    }
  },
  mounted() {

  },
  methods: {
    close () {
    },
    show() {
      //  this.$msgBox.open({'title':'注意','content':'内容','isClickClose':true}).then(() => console.log('hello')).catch(()=> console.log('no'))
      this.$toast.open("123")
      this.$toast.open("456")
    }
  }
}
</script>

<style scoped>
</style>

