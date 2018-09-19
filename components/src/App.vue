<template>
  <div id="app">
    <!-- <xf-cell title="title" value="value"><p>文本</p></xf-cell>  -->
    <!-- <xf-field title="title" text-align="right" placeholder="请输入" v-model="test"></xf-field> -->
    <!-- <xf-switch v-model="test">11+{{test}}</xf-switch> -->
    <!-- <xf-radio :options='options' v-model="value"></xf-radio> -->
    <xf-indicator :type="type" :text="text"></xf-indicator>
  </div>
</template>

<script>
import XfButton from './components/button/button'
import Swiper from './components/swiper/swiper'
import XfCell from './components/cell/cell'
import XfField from './components/field/field'
import Icon from './components/icon/icon'
import XfSwitch from './components/switch/switch'
import XfRadio from './components/radio/radio'
import XfIndicator from './components/indicator/indicator'

export default {
  name: 'App',
  components: {
    XfButton,
    Swiper,
    XfCell,
    XfField,
    Icon,
    XfSwitch,
    XfRadio,
    XfIndicator,
  },
  data() {
    return {
      options:[{label:'1',value:'1'},{label:'2',value:'2'}],
      value:'',
      color: 'red',
      type:'fading-circle',
      text: '1234'
    }
  },
}
</script>

<style scoped>
</style>

