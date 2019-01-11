<template>
  <div id="app">
    <br/>
    <slider v-model="slider" :min="0"/>
  </div>
</template>

<script>
import alert from './components/alert/alert'
import tableRender from './components/table-render/table-render'
import checkBox from './components/checkbox/index'
import comRadio from './components/radio/index'
import navBar from './components/nav-bar/index'
import slider from './components/slider/index'
export default {
  name: 'App',
  components: {
    tableRender,
    checkBox,
    comRadio,
    navBar,
    slider
  },
  data() {
    return {
      slider:50,
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

