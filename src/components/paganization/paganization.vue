<template>
    <div class="pagess">
        <ul class="ivu-pages">
            <span class="ivu-pages-total">共{{total}}条</span>
            <span class="first" @click="gofirst">首页</span>
            <li class="prev" @click="prev">
                <!-- <Button :disabled="canclickprev"><</Button> -->
            </li>
            <li @click="changePage(item)" v-for="(item, index) in pagenum" :key="index" :class="{'page-num ': true, 'current': current == item}">
                <span>{{item}}</span>
            </li>
            <li class="next" @click="next">
                <Button :disabled="canclicknext">></Button>
            </li>
            <span class="last">末页</span>
        </ul>
        <!-- <Page :total="total"  @on-change="pageChange" show-total  :current="1" />-->
        <div class="add">
            <span>页数:{{current}}/{{Math.ceil(total/limit)}}</span>
            <input type="text" v-model="pageNum"/>
            <i @click="jumpPage">GO</i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Paganization',
  props: [
    'total',
    'limit'
  ],
  data () {
    return {
      pageNum: '',
      current: 1,
      // pagenum: [1, 2, 3, 4, 5],
      canclickprev: true,
      canclicknext: false
    }
  },
  computed: {
    pagenum () {
      const c = this.current
      const t = Math.ceil(this.total / this.limit)
      if (t <= 5) {
        return [1, 2, 3, 4, 5]
      } else {
        // if (t - c >= 5) {
        //     return [c, c+1, c+2, c+3, c+4]
        // } else {
        //     return [t-4, t-3, t-2, t-1, t]
        // }
        if (c > 3) {
          return [c - 2, c - 1, c, c + 1, c + 2]
        } else if (t - c >= 5) {
          return [c, c + 1, c + 2, c + 3, c + 4]
        } else if (t - c < 5) {
          return [t - 4, t - 3, t - 2, t - 1, t]
        }
      }
      // if (c <= 5) {
      //     return [1, 2, 3, 4, 5, 6, 7, 8, 9, '...', t]
      // } else if (c >= t - 4) {
      //     return [1, '...', t-8, t-7, t-6, t-5, t-4, t-3, t-2, t-1, t]
      // } else {
      //     return [1, '...', c-3, c-2, c-1, c, c+1, c+2, c+3, '...', t]
      // }
    }
  },
  methods: {
    gofirst () {
      this.current = 1
    },
    prev () {
      this.current = this.current - 1
      if (this.current <= 1) {
        this.canclickprev = true
      } else {
        this.canclickprev = false
      }
    },
    next () {
      this.current = this.current + 1
      if (this.current >= Math.ceil(this.total / this.limit)) {
        this.canclicknext = true
      }
    },
    jumpPage () {
      this.current = this.pageNum
    },
    changePage (item) {
      this.current = item
      if (this.current < 1) {
        this.canclickprev = true
      } else {
        this.canclickprev = false
      }
      if (this.current >= Math.ceil(this.total / this.limit)) {
        this.canclicknext = true
      } else {
        this.canclicknext = false
      }
    },
    firstPage () {
      console.log(this.current)
      this.current = 1
    }

  },
  mounted () {
    $('.ivu-page-prev').before(`<li class="ivu-page-item ivufirst" title="首页" onclick="firstPage()" > <a>首页</a></li>`)
    $('.ivu-page-next').after(`<li class="ivu-page-item ivulast" title="末页" > <a>末页</a></li>`)
  }
}
</script>

<style lang="less" scoped>
.pages {
    display: inline-block
}
    .add {
        display: inline-block;
        top: 1px;
        position: absolute;
        margin-left: 10px;
    }
    .add span {
        color: #747474;
        margin-right: 14px;
    }
    .add i {
        display: inline-block;
        width: 32px;
        height: 32px;
        background-color: #0F93DF;
        line-height: 32px;
        text-align: center;
        border-radius: 16px;
        margin-left: 20px;
        color: #fff;
    }
    .add input  {
        width: 58px;
        height: 24px;
    }
    .ivu-pages{
        text-align: center;
        display: inline-block;
        color: #454545;
        font-size: 16px;
        li {
            list-style: none;
            float: left;
            width: 32px;
            height: 32px;
            margin-right: 20px;
            line-height: 32px;
        }
        li.current {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-color: #0F93DF;
            line-height: 44px;
            color: #fff;
            text-align: center;
            margin-top: -6px;
        }
        .ivu-pages-total {
            margin-right: 28px;
            display: block;
            float: left;
            height: 32px;
            line-height: 32px;
        }
        .first {
            margin-right: 20px;
            display: block;
            float: left;
            height: 32px;
            line-height: 32px;
        }
        .last {
            margin-right: 20px;
            display: block;
            float: left;
            height: 32px;
            line-height: 32px;
        }
        .prev {
            color: #B8B8B8;
            width: 32px;
            height: 32px;
            line-height: 32px;
            display: inline-block;
            .ivu-btn.ivu-btn-default {
                border: none;
                background-color: transparent;
                font-size: 16px;
            }
        }
        .next {
            color: #B8B8B8;
            width: 32px;
            height: 32px;
            line-height: 32px;
            display: inline-block;
            .ivu-btn.ivu-btn-default {
                border: none;
                background-color: transparent;
                font-size: 16px;
            }
        }
        // margin:50px;
    }
    .ivu-page-item{
        border-radius: 50% !important;
        border:none !important;
    }
    .ivu-page-item-active{
        background:#2d8cf0 !important;
        a{
            color:#fff !important;
        }
    }
    .ivu-page-prev,.ivu-page-next{
        border: none !important;
    }
</style>
