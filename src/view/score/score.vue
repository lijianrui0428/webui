<template>
    <div class="scoreAll">
        <div class="title">
            <div>
                <span class="useshu">|</span>
                <b>我的成绩</b>
            </div>
        </div>
        <Dropdown trigger="click" style="margin-top:25px;">
            <Button type="primary">
                培训类型
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
        <div style="margin-top:34px;">
            <!-- <Table :columns="columns1" :data="data1" height='398' :stripe='true'></Table> -->
            <ul class="scoreList">
              <li>

              </li>
            </ul>
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
          title: '课程名称',
          key: 'name',
          minWidth: 120
        },
        {
          title: '总课时',
          key: 'age',
          minWidth: 80
        },
        {
          title: '完成进度',
          key: 'address',
          minWidth: 80
        },
        {
          title: '培训情况',
          key: 'address',
          minWidth: 80
        },
        {
          title: '考试情况',
          key: 'address',
          minWidth: 80
        },
        {
          title: '操作',
          minWidth: 100,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  // size: 'small',
                  // icon: 'compose',
                  loading: params.row.btnLoading
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: (e) => {
                    this.updateVod(params.row.Id)
                  }
                }
              }, '补考'),
              h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': (e) => {
                    this.deleteVod(params.row.Id)
                  }
                }
              }, [
                h('Button', {
                  props: {
                    type: 'error'
                    // size: 'small',
                    // icon: 'me-trash'
                  }
                }, '查看详情')
              ])
            ])
          }
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
