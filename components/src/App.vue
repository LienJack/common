<template>
  <div id="app">
    <xf-button @click.native="show">confirm</xf-button>
    <!-- <xf-actionsheet :actions="actions" v-model="isShow"></xf-actionsheet> -->
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
      // this.$alert.open("今晚一起吃烤肉1").then(()=>console.log("1"))
      // this.$alert.open("今晚一起吃烤肉2").then(()=>console.log("2"))
      // this.$alert.open("今晚一起吃烤肉3").then(()=>console.log("3"))
      this.$alert.open("今晚一起吃烤肉1")
      this.$alert.open("今晚一起吃烤肉2")
      this.$alert.open("今晚一起吃烤肉3")
    }
  }
}
</script>

<style scoped>
</style>

