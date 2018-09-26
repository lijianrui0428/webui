<template>
  <div>
      <div id="app11" style="margin:0 auto">
        <publicHeader></publicHeader>
        <div class="centerContent">
          <div class="container" style="margin:30px auto">
              <div class="sideLeft">
                  <SideBar ></SideBar>
              </div>
              <div class="sideRight">
                <router-view/>
              </div>
              <!-- <Row>
                  <Col span="4"  style="text-align:center" class="homeLeft">
                      <SideBar ></SideBar>
                  </Col>
                  <Col span="17" style="padding-top: 20px;padding-left:30px" class="homeRight">

                  </Col>
              </Row> -->
          </div>
        </div>

        <PubFooter></PubFooter>
        <!-- <router-view></router-view> -->
    </div>

  </div>
</template>

<script>
import publicHeader from './../header/publicHeader.vue'
import PubFooter from './../publicfoot/publicfoot.vue'
import SideBar from './../sidebar/sideBar.vue'
import Ontrain from './../ontrain/ontrain.vue'
import Class from './../class/class.vue'
import './index.less'
export default {
  name: 'home',
  components: {
    publicHeader,
    PubFooter,
    SideBar,
    Ontrain,
    Class
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.$nextTick(function () { // 页面加载完成后执行
          // console.log(val)
          console.log($('.sideRight').height())
          if (val.name == 'ontrain') {
            this.leftHeight = $('.sideRight').height() - 150
          } else {
            this.leftHeight = $('.sideRight').height()
          }
          $('.sideLeft').css('height', this.leftHeight)
        })
      },
      // 深度观察监听
      deep: true
    }
  },
  data () {
    return {
      leftHeight: 0
    }
  },
  mounted () {
    console.log(this.$route.path)
    console.log($('.sideRight').height())
    if (this.$route.path == '/ontrain' || this.$route.path == '/home') {
      this.leftHeight = $('.sideRight').height() - 150
    } else {
      this.leftHeight = $('.sideRight').height()
    }
    $('.sideLeft').css('height', this.leftHeight)
  }
}
</script>

<style lang="less">

.count-style{
  font-size: 50px;
}
</style>
