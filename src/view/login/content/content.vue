<style scoped lang="less">

</style>
<template>
    <div class="content">
        <div class="contentBox">
            <p>专业类别<span>PROFESSIONAL CATEGORY</span></p>
            <div class="part1">
                <div class="imgContent" v-for="(item,index) in showData" :key = index>
                    <img :src="item.imgUrl" alt="">
                    <div class="conBox">{{item.title}}</div>
                </div>
            </div>
            <p style="margin-top:50px;border-bottom:1px solid #ddd;padding-bottom:20px;">文化理念<span>CULTURAL CONCEPT</span></p>
             <div class="part1">
                <!-- <div class="imgContent" v-for="(item,index) in showData" :key = index>
                    <img :src="item.imgUrl" alt="">
                    <div class="conBox">{{item.title}}</div>
                </div> -->
                <div class="contentText">
                    <p>队伍目标</p>
                    <p style=" font-size:12px;font-family:MicrosoftYaHei;font-weight:400;color:#000;">公平公正，清正廉洁</p>
                    <img src="./image/8.png" alt="">
                </div>
                <div class="contentText">
                    <p>队伍目标</p>
                    <p style=" font-size:12px;font-family:MicrosoftYaHei;font-weight:400;color:#000;">公平公正，清正廉洁</p>
                    <img src="./image/8.png" alt="">
                </div>
                <div class="contentText">
                    <p>队伍目标</p>
                    <p style=" font-size:12px;font-family:MicrosoftYaHei;font-weight:400;color:#000;">公平公正，清正廉洁</p>
                    <img src="./image/8.png" alt="">
                </div>
                <div class="contentText">
                    <p>队伍目标</p>
                    <p style=" font-size:12px;font-family:MicrosoftYaHei;font-weight:400;color:#000;">公平公正，清正廉洁</p>
                    <img src="./image/8.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './index.less'
export default {
  data () {
    return {
      showData: [
        {'imgUrl': 'view/login/content/image/1.png', 'title': '食品检查员'},
        {'imgUrl': 'src/component/content/image/2.png', 'title': '食品添加剂检查员'},
        {'imgUrl': 'src/component/content/image/3.png', 'title': '特殊食品检查员'},
        {'imgUrl': 'src/component/content/image/4.png', 'title': '药品GMP检查员'},
        {'imgUrl': 'src/component/content/image/5.png', 'title': '药品GSP检查员'},
        {'imgUrl': 'src/component/content/image/6.png', 'title': '医疗器械检查员'},
        {'imgUrl': 'src/component/content/image/7.png', 'title': '化妆品检查员'}
      ]
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
