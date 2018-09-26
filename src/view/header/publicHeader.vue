<style scoped lang="less">

</style>
<template>
    <div class="publicHeader">
        <div class="headerContent">
            <img src="./image/logo.png" alt="">
            <div class="floatRight">
                <div>
                    <Icon type="ios-lock-outline" />
                    修改密码
                </div>
                <div>
                    <Icon type="ios-power-outline" />
                    安全退出
                </div>
            </div>
        </div>
        <div class="headerImg">
        </div>
    </div>
</template>
<script>
import './index.less'
export default {
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
