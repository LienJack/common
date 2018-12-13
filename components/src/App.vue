<template>
  <div id="app">
    <table-render/>
  </div>
</template>

<script>
import alert from './components/alert/alert'
import tableRender from './components/table-render/table-render'

export default {
  name: 'App',
  components: {
    tableRender
  },
  data() {
    return {
    }
  },
  mounted() {
 
  },
  methods: {
    close () {
    },
    show() {
      this.$Alert.info({'content':'1'})
      this.$Alert.info({'content':'12'})
      this.$Alert.info({'content':'123'})
      this.$Alert.info({'content':'1234'})
    }
  }
}
</script>

<style scoped>
</style>

