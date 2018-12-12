<template>
  <div>
    组件 B
  </div>
</template>
<script>
  import { findComponentUpward, findComponentsUpward } from '../utils/assist.js';

  export default {
    name: 'componentB',
     data () {
      return {
        name: 'Aresn'
      }
    },
    mounted () {
      const comA = findComponentsUpward(this, 'componentA');
      
      if (comA) {
        // console.log(comA)
      }
    },
    methods: {
      sayHello () {
        console.log('Hello, Vue.js');
      }
    }
  }
</script>