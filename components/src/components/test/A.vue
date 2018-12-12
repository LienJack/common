<template>
  <div>
    组件 A
    <component-b></component-b>
  </div>
</template>
<script>
  import componentB from './B.vue';
  import { findComponentDownward } from '../utils/assist.js';
  export default {
    name: 'componentA',
    components: { componentB },
    data () {
      return {
        name: 'Aresn'
      }
    },
    mounted() {
      const comB = findComponentDownward(this, 'componentB')
      if(comB) {
        console.log(comB)
      }
    },
    methods: {
      sayHello () {
        console.log('Hello, Vue.js');
      }
    }
  }
</script>