<style scoped lang="less">

</style>
<template>
    <div class="login">
        <div class="loginContent">
            <div class="loginModel">
                <p>登录</p>
                <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit" style="margin-top:15px">
                    <FormItem prop="userName">
                    <Input prefix="ios-person-outline" v-model="form.userName" placeholder="请输入用户名">
                    </Input>
                    </FormItem>
                    <FormItem prop="password">
                    <Input prefix="ios-lock-outline" type="password" v-model="form.password" placeholder="请输入密码">
                    </Input>
                    </FormItem>
                    <a href="http://www.baidu.com">忘记密码?</a>
                    <FormItem>
                    <Button @click="handleSubmit" type="primary" style="margin-top:15px" v-on:keyup.13="handleSubmit" long :loading="loading">登录</Button>
                    </FormItem>
                </Form>
                <!-- <Button type="primary" style="width:192px;margin-top:15px">登录</Button> -->
            </div>
        </div>
    </div>
</template>
<script>
import './index.less'
export default {
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      loading: false,
      form: {
        userName: 'super_admin',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        this.loading = true
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password
          })
        }
      })
    },
    handleStart () {
      this.$Modal.info({
        title: 'Bravo',
        content: 'Now, enjoy the convenience of iView.'
      })
    }
  }
}
</script>
