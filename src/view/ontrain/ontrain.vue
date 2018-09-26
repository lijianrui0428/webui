<style scoped lang="less">

</style>
<template>
    <div class="onTrain">
        <div class="title">
            <div>
                <span class="useshu">|</span>
                <b>在线培训</b>
            </div>
            <Dropdown style="margin:20px 0 40px 10px">
                <Button type="primary">
                    学习状态
                    <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem disabled>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem divided>北京烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown style="margin:20px 0 40px 20px ">
                <Button type="primary">
                    考试类型
                    <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem disabled>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem divided>北京烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <div class="trainContent">
                <div class="trainContents">
                    <img src="./image/kec.png" alt="">
                    <p class="trainTile">工贸企业（非高危企业）管理人员安全生产与职业卫生一体化培训</p>
                    <div class="trainmiddle">
                        <span>
                            <img src="./image/time.png" alt="">
                            <b>30课时</b>
                        </span>
                         <span style="float:right;width:80px;">
                            <img src="./image/study.png" alt="">
                            <b>未学习</b>
                        </span>
                    </div>
                    <Button style="background:#E96060;color:#fff;margin-right:15px;">开始学习</Button>
                    <Button type="primary">开始考试</Button>
                </div>
                <div class="trainContents">
                    <img src="./image/kec.png" alt="">
                    <p class="trainTile">工贸企业（非高危企业）管理人员安全生产与职业卫生一体化培训</p>
                    <div class="trainmiddle">
                        <span>
                            <img src="./image/time.png" alt="">
                            <b>30课时</b>
                        </span>
                         <span style="float:right;width:80px;">
                            <img src="./image/study.png" alt="">
                            <b>未学习</b>
                        </span>
                    </div>
                    <Button style="background:#E96060;color:#fff;margin-right:15px;">开始学习</Button>
                    <Button type="primary">开始考试</Button>
                </div>
                <div class="trainContents">
                    <img src="./image/kec.png" alt="">
                    <p class="trainTile">工贸企业（非高危企业）管理人员安全生产与职业卫生一体化培训</p>
                    <div class="trainmiddle">
                        <span>
                            <img src="./image/time.png" alt="">
                            <b>30课时</b>
                        </span>
                         <span style="float:right;width:80px;">
                            <img src="./image/study.png" alt="">
                            <b>未学习</b>
                        </span>
                    </div>
                    <Button style="background:#E96060;color:#fff;margin-right:15px;">开始学习</Button>
                    <Button type="primary">开始考试</Button>
                </div>
                <div class="trainContents">
                    <img src="./image/kec.png" alt="">
                    <p class="trainTile">工贸企业（非高危企业）管理人员安全生产与职业卫生一体化培训</p>
                    <div class="trainmiddle">
                        <span>
                            <img src="./image/time.png" alt="">
                            <b>30课时</b>
                        </span>
                         <span style="float:right;width:80px;">
                            <img src="./image/study.png" alt="">
                            <b>未学习</b>
                        </span>
                    </div>
                    <Button style="background:#E96060;color:#fff;margin-right:15px;">开始学习</Button>
                    <Button type="primary">开始考试</Button>
                </div>
                <div class="trainContents">
                    <img src="./image/kec.png" alt="">
                    <p class="trainTile">工贸企业（非高危企业）管理人员安全生产与职业卫生一体化培训</p>
                    <div class="trainmiddle">
                        <span>
                            <img src="./image/time.png" alt="">
                            <b>30课时</b>
                        </span>
                         <span style="float:right;width:80px;">
                            <img src="./image/study.png" alt="">
                            <b>未学习</b>
                        </span>
                    </div>
                    <Button style="background:#E96060;color:#fff;margin-right:15px;">开始学习</Button>
                    <Button type="primary">开始考试</Button>
                </div>
            </div>
        </div>
        <div class="pages">
            <Page :total="100"  show-total  :current="2" />

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
  },
  mounted () {
    $('.ivu-page-total').html('总数:100')
    $('.ivu-page-prev').before(`<li class="ivu-page-item ivufirst" title="首页" > <a>首页</a></li>`)
    $('.ivu-page-next').after(`<li class="ivu-page-item ivulast" title="末页" > <a>末页</a></li>`)
  }
}
</script>
