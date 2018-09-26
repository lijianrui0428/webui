<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
        <FirstHeader></FirstHeader>
        <Logins @on-success-valid="handleSubmit"></Logins>
        <Content></Content>
        <Footer></Footer>
    </div>
  </div>
</template>

<script>
import FirstHeader from './firstheader/firstHeader.vue'
import Logins from './logins/logins.vue'
import Content from './content/content.vue'
import Footer from './footer/footer.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    FirstHeader,
    Logins,
    Content,
    Footer
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password, code }) {
      this.handleLogin({ userName, password, code }).then(res => {
        if (!res.success) {
          Message.error(res.msg)
          return
        }
        this.getUserInfo().then(res => {
          console.log(res)
          this.$router.push({
            path: '/home'
          })
        })
      })
    }
  },
  mounted () {
    this.$router.push({
      path: '/home'
    })
  }
}
</script>

<style>

</style>
