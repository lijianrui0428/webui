<style scoped lang="less">

</style>
<template>
    <div class="testBox">
        <div class="testHeader">
            <div>
                <span class="useshu">|</span>
                <b>在线考试</b>
            </div>
        </div>
         <div class="testsAll">
            <div class="testList">
                <p>大家看法观看撒个考试院</p>
                <div class="testLists">
                    <p>一、单选题</p>
                   <ul class="exam-form" data-id="123" data-type="1">
                        <li>1、驾驶人未携带哪种证件驾驶机动车上路，交通警察可依法扣留车辆？</li>
                        <li class="xti radio icheck-primary"><input name="123" id="1"   type="radio" value="A"><label for="1">A、2K-4K</label></li>
                        <li class="xti radio icheck-primary"><input name="123" id="2"  type="radio" value="B"><label for="2">B、2K-4K</label></li>
                        <li class="xti radio icheck-primary"><input name="123" id="3"  type="radio" value="C"><label for="3">C、2K-4K</label></li>
                        <li class="xti radio icheck-primary"><input name="123" id="4"  type="radio" value="D"><label for="4">D、2K-4K</label></li>
                    </ul>
                    <ul class="exam-form" data-id="1234" data-type="2">
                        <li>4、引导应对气候变化国际合作，成为全球生态文明建设的重要</li>
                        <li class="xti checkbox icheck-primary"><input name="1234" type="checkbox" onchage="" id="primary1" value="A"><label for="primary1">A、单位内部讲师培训或师傅带徒弟</label></li>
                        <li class="xti checkbox icheck-primary"><input name="1234" type="checkbox" onchage="" id="primary2" value="B"><label for="primary2">B、承前启后、继往开来、在新的历史条件下继续夺取中国特色社会主义伟大胜利的时代</label></li>
                        <li class="xti checkbox icheck-primary"><input name="1234" type="checkbox" onchage="" id="primary3" value="C"><label for="primary3">C、决胜全面建成小康社会、进而全面建设社会主义现代化强国的时代</label></li>
                        <li class="xti checkbox icheck-primary"><input name="1234" type="checkbox" onchage="" id="primary4" value="D"><label for="primary4">D、全国各族人民团结奋斗、不断创造美好生活、逐步实现全体人民共同富裕的时代</label></li>
                    </ul>
                </div>
            </div>
            <div class="testNum">
                <div class="allShow">
                    <p>单选题</p>
                    <ul >
                        <li v-for="(item,index) in list" :key = index>{{index+1}}</li>
                    </ul>
                </div>
                <div class="allShow">
                    <p>单选题</p>
                    <ul >
                        <li v-for="(item,index) in list" :key = index>{{index+1}}</li>
                    </ul>
                </div>
                <div class="allShow">
                    <p>单选题</p>
                    <ul >
                        <li v-for="(item,index) in list" :key = index>{{index+1}}</li>
                    </ul>
                </div>
                <div class="time">
                    <img src="./image/time.png" alt="">
                    <span>倒计时：00:50:56</span>
                    <Button type="primary">提交</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './index.less'
import 'jquery'
export default {
  data () {
    return {
      value2: '1',
      list: ['1', '2', '3', '4', '5', '6', '7', '8']
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
