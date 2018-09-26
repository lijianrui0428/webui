<style scoped lang="less">

</style>
<template>
    <div class="firstHeader">
        <div class="headerContent">
           <img src="./image/logo.png" alt="">
           <Menu mode="horizontal" :theme="theme1" active-name="1" style="display:inline-block;float:right">
            <MenuItem name="1" >
                首页
            </MenuItem>
            <MenuItem name="2">
                培训信息
            </MenuItem>
            <MenuItem name="3">
                联系我们
            </MenuItem>
        </Menu>
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
