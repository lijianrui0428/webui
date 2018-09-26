<style scoped lang="less">

</style>
<template>
    <div class="footer">
        <div class="footerContent">
            <div class="imgs">
                <img src="./image/footlogo.png" alt="">
            </div>
            <ul  class="footList">
                <li>
                    <p>联系我们</p>
                    <p>学术权威</p>
                    <p>APP下载</p>
                </li>
                <li>
                    <p>操作指南</p>
                    <p>服务条款</p>
                    <p>隐私政策</p>
                </li>
                <li>
                    <p>邮政编码:100088</p>
                    <p>地址：中国北京德胜门外大街85号</p>
                    <p>Email:webmaster@ccccltd.cn</p>
                </li>
            </ul>
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
