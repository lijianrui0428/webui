<style scoped lang="less">

</style>
<template>
    <div class="pubfoot">
        <div class="pubfooter">
            <p>技术支持：北京博奥网络教育科技股份有限公司<span style="margin-left:40px">电话：400-070-1000</span></p>
        </div>
    </div>
</template>
<script>
import './index.less'
export default {
  data () {
    return {
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
