<template>
  <div>
    <i-checkbox-group v-model="multiple">
      <i-checkbox label="option1">选项 1</i-checkbox>
      <i-checkbox label="option2">选项 2</i-checkbox>
      <i-checkbox label="option3">选项 3</i-checkbox>
      <i-checkbox label="option4">选项 4</i-checkbox>
    </i-checkbox-group>
  </div>
</template>
<script>
import ICheckboxGroup from './checkboxGroup'
import ICheckbox from './checkbox'
export default {
  components: { ICheckboxGroup, ICheckbox },
  data() {
    return {
      multiple: ['option1','option4']
    }
  }
}
</script>

