<style scoped lang="less">

</style>
<template>
    <div class="sideBar">
        <div class="sideBarContent">
            <div class="personImg">
                <img src="./image/stu.png" alt="">
                <p>name</p>
            </div>
            <ul>
                <li style="background:rgba(15,147,223,1)">
                    <router-link to="ontrain">
                        <div class="single">
                            <img src="./image/peixun.png" alt="">
                            <span>在线培训</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="class">
                        <div class="single">
                            <img src="./image/dangan.png" alt="">
                            <span>个人档案</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="test">
                        <div class="single">
                            <img src="./image/jifen.png" alt="">
                            <span>我的积分</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="person">
                        <div class="single">
                            <img src="./image/chengji.png" alt="">
                            <span>我的成绩</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="points">
                        <div class="single">
                            <img src="./image/renwu.png" alt="">
                            <span>任务派遣</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="score">
                        <div class="single">
                            <img src="./image/renwu.png" alt="">
                            <span>任务123</span>
                        </div>
                    </router-link>
                </li>
                 <li>
                     <router-link to="tasking">
                        <div class="single">
                            <img src="./image/renwu.png" alt="">
                            <span>任3</span>
                        </div>
                    </router-link>
                </li>
            </ul>
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
