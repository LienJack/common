<template>
  <div id="app">
    <com-radio/>
  </div>
</template>

<script>
import alert from './components/alert/alert'
import tableRender from './components/table-render/table-render'
import checkBox from './components/checkbox/index'
import comRadio from './components/radio/index'
export default {
  name: 'App',
  components: {
    tableRender,
    checkBox,
    comRadio
  },
  data() {
    return {
    }
  },
  mounted() {
 
  },
  methods: {
    show(e) {
      console.log(e)
    }

  }
}
</script>

<style scoped>
</style>

