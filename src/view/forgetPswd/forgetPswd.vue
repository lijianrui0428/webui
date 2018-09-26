<style scoped lang="less">

</style>
<template>
    <div class="forgetPsed">
        <publicHeader></publicHeader>
        <div class="forgetContent">
          <div class="formContent">
            <p>重置密码</p>
            <Form ref="forgetPswd" :model="form" :rules="rules" @keydown.enter.native="handleSubmit" :label-width="120" style="width: 440px">
              <FormItem prop="userName" label="请输入账号">
                <Input v-model="form.userName" placeholder="请输入用户名" >
                </Input>
              </FormItem>
              <FormItem prop="cardnum" label="请输入身份证号">
                <Input type="password" v-model="form.cardnum" placeholder="请输入身份证号" >
              </Input>
              </FormItem>
              <FormItem prop="password" label="请输入新密码">
                <Input type="password" v-model="form.password" placeholder="请输入密码" >
                </Input>
              </FormItem>
              <FormItem prop="reapetpassword" label="请确认新密码">
                <Input type="password" v-model="form.reapetpassword" placeholder="请确认新密码" >
                </Input>
              </FormItem>
              <FormItem prop="phonenum" label="请输入手机号">
                <Input type="password" v-model="form.phonenum" placeholder="请输入手机号" >
                </Input>
              </FormItem>
              <FormItem prop="imgnum" label="请输入验证码" style="width: 320px">
                <Input type="password" v-model="form.imgnum" placeholder="请输入验证码" >
                </Input>
                <Button type="primary" style="position:absolute;margin-left:24px;">获取验证码</Button>
              </FormItem>
            </Form>
            <Button type="primary" style="width:320px;height:40px;margin-left:60px;margin-bottom:40px;font-size:16px">完成</Button>
          </div>

        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import './index.less'
import publicHeader from './../header/publicHeader.vue'
import Footer from './../footer/footer.vue'
export default {
  name: 'forgetPswd',
  components: {
    publicHeader,
    Footer
  },
  data () {
    return {
      loading: false,
      form: {
        userName: 'super_admin',
        password: '',
        cardnum: '',
        reapetpassword: '',
        phonenum: '',
        imgnum: ''
      }
    }
  },
  methods: {
    handleStart () {
      this.$Modal.info({
        title: 'Bravo',
        content: 'Now, enjoy the convenience of iView.'
      })
    }
  }
}
</script>
