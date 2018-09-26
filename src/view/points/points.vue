<template>
    <div class="pointsAll">
        <div class="title">
            <div>
                <span class="useshu">|</span>
                <b>我的积分</b>
            </div>
            <Dropdown style="margin-left: 20px">
                <Button type="primary">
                    年度历史积分
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
        </div>
        <div class="pointsContent">
            <p>
                <span>总积分：</span>
                360
            </p>
            <div class="myPoints">
                <p class="myTtitle">积分记录</p>
                <ul class="pointsList">
                    <li>
                        <div class="plistLeft">
                            <span>
                                <img src="./image/jifen.png" alt="">
                            </span>
                            30积分
                        </div>
                        <div class="plistMiddle">
                            2018年度地区抽查食品安全安全安全秘密抽查安全安全安密抽查..
                        </div>
                        <div class="plistRight">
                            已完成
                        </div>
                    </li>
                    <li>
                        <div class="plistLeft">
                            <span>
                                <img src="./image/jifen.png" alt="">
                            </span>
                            30积分
                        </div>
                        <div class="plistMiddle">
                            2018年度地区抽查食品安全安全安全秘密抽查安全安全安密抽查..
                        </div>
                        <div class="plistRight">
                            已完成
                        </div>
                    </li>
                    <li>
                        <div class="plistLeft">
                            <span>
                                <img src="./image/jifen.png" alt="">
                            </span>
                            30积分
                        </div>
                        <div class="plistMiddle">
                            2018年度地区抽查食品安全安全安全秘密抽查安全安全安密抽查..
                        </div>
                        <div class="plistRight">
                            已完成
                        </div>
                    </li>
                    <li>
                        <div class="plistLeft">
                            <span>
                                <img src="./image/jifen.png" alt="">
                            </span>
                            30积分
                        </div>
                        <div class="plistMiddle">
                            2018年度地区抽查食品安全安全安全秘密抽查安全安全安密抽查..
                        </div>
                        <div class="plistRight">
                            已完成
                        </div>
                    </li>
                    <li>
                        <div class="plistLeft">
                            <span>
                                <img src="./image/jifen.png" alt="">
                            </span>
                            30积分
                        </div>
                        <div class="plistMiddle">
                            2018年度地区抽查食品安全安全安全秘密抽查安全安全安密抽查..
                        </div>
                        <div class="plistRight">
                            已完成
                        </div>
                    </li>
                    <li>
                        <div class="plistLeft">
                            <span>
                                <img src="./image/jifen.png" alt="">
                            </span>
                            30积分
                        </div>
                        <div class="plistMiddle">
                            2018年度地区抽查食品安全安全安全秘密抽查安全安全安密抽查..
                        </div>
                        <div class="plistRight">
                            已完成
                        </div>
                    </li>
                    <li>
                        <div class="plistLeft">
                            <span>
                                <img src="./image/jifen.png" alt="">
                            </span>
                            30积分
                        </div>
                        <div class="plistMiddle">
                            2018年度地区抽查食品安全安全安全秘密抽查安全安全安密抽查..
                        </div>
                        <div class="plistRight">
                            已完成
                        </div>
                    </li>
                </ul>
                <!-- <Table :columns="columns1" :data="data1" :show-header="false"></Table> -->
            </div>
        </div>
    </div>
</template>
<script>

import './index.less'
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  mounted () {
    //
  }
}
</script>
