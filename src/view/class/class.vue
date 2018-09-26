<style scoped lang="less">

</style>
<template>
    <div class="classes">
        <div class="title">
            <div>
                <span class="useshu">|</span>
                <b>课程详情</b>
            </div>
            <div class="videoContent">
                <p>这是视频的名字</p>
                <div class="videoScreen">
                    <div id='poly_player'></div>
                </div>
                <div class="menuList">
                  <Collapse v-model="value2" accordion>
                    <Panel name="1">
                      公开课第一期
                      <p slot="content" class="active">第一集<Icon type="md-arrow-dropright-circle" /></p>
                      <p slot="content">第一集</p>
                      <p slot="content">第一集</p>
                      <p slot="content">第一集</p>
                    </Panel>
                    <Panel name="2">
                      <p slot="content">第一集</p>
                      <p slot="content">第一集</p>

                    </Panel>
                    <Panel name="3">
                      <p slot="content">第一集</p>
                      <p slot="content">第一集</p>
                    </Panel>
                  </Collapse>
                </div>
            </div>
        </div>
    </div>
</template>
<!--<script src="http://testresource.etledu.com/Scripts/player/etlplayer.js" type="text/javascript"></script>-->
<script>
import './index.less'
import 'jquery'
// import EtlPlayer from './etlplayer.js'
export default {
  data () {
    return {
      value2: '1'
    }
  },
  methods: {
    handleStart () {
      this.$Modal.info({
        title: 'Bravo',
        content: 'Now, enjoy the convenience of iView.'
      })
    }
  },
  beforeCreate () {

  },
  mounted () {
    // let player = new EtlPlayer('poly_player', {
    //   vcode: '6d93efc2-31bc-4817-8296-78824a227829',
    //   width: '100%',
    //   height: 620,
    //   autoplay: true
    // })
    // player.on('play', function () {
    //   console.log('play')
    // })
    // console.log($('#poly_player'))
  }
}
</script>
