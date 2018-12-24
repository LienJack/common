<template>
  <div>
    <i-radio-group v-model="multiple">
      <i-radio label="option1">选项 1</i-radio>
      <i-radio label="option2">选项 2</i-radio>
      <i-radio label="option3">选项 3</i-radio>
      <i-radio label="option4">选项 4</i-radio>
    </i-radio-group>
  </div>
</template>
<script>
import IRadioGroup from './radioGroup'
import IRadio from './radio.lien'
export default {
  components: { IRadioGroup, IRadio },
  data() {
    return {
      multiple: 'option1'
    }
  }
}
</script>