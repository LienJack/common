<template>
  <div>
    <i-form :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input type="text" v-model="formValidate.name"/>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input type="text" v-model="formValidate.mail" />
      </i-form-item>
    </i-form>
    
  </div>
</template>
<script>
import iForm from './form'
import iFormItem from './form-item'
import iInput from './input'
export default {
  components:{iForm, iFormItem, iInput},
  data() {
    return {
      formValidate: {
        name:'',
        mail: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
      }
    }
  }
}
</script>
