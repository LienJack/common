<template>
  <div>
    <i-form :model="formValidate" :rules="ruleValidate" ref="form">
      <i-form-item label="用户名" prop="name">
        <i-input type="text" v-model="formValidate.name"/>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input type="text" v-model="formValidate.mail" />
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
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
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if(valid) {
          window.alert('提交成功')
        } else {
          window.alert('验证失败')
        }
      })
    },
    handleReset() {
      this.$refs.form.resetFields()
    }
  }
}
</script>
