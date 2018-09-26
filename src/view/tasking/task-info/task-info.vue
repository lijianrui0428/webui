<template>
    <div class="taskinfo">
        <div class="taskList">
          <Tabs value="name1">
              <TabPane label="标签一" name="name1">
                <ul class="taskLists">
                  <li>
                    <div class="liLeft">2018年度地区抽查食品安全种地那城市</div>
                    <div  class="liMiddle">
                      <p>
                        <span>
                          <img src="./../image/jifen.png" alt="">
                        </span>
                        30积分
                      </p>
                      <p>
                        <span>
                          <img src="./../image/time.png" alt="">
                        </span>
                        剩余3天
                      </p>
                    </div>
                    <div class="liRight">
                        <Button type="primary" @click="receive">领取</Button>
                        <Button type="success" @click="finished">完成</Button>
                        <Button type="error" @click="jujue">拒绝</Button>
                    </div>
                  </li>
                </ul>
              </TabPane>
              <TabPane label="标签二" name="name2">标签二的内容</TabPane>
              <TabPane label="标签三" name="name3">标签三的内容</TabPane>
          </Tabs>
        </div>
        <Modal
            v-model="states"
            title="Common Modal dialog box title"
            @on-ok="ok"
            @on-cancel="cancel"
            width='423'
            height="224"
            >
            <p class="imgs">
              <img v-if="!refuse" src="./../image/jieshou.png" alt="">
              <img v-else src="./../image/jujue.png" alt="">
            </p>
            <p class="titles" style="font-size:16px;
                    font-family:MicrosoftYaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);">
                您已成功领取该任务
            </p>
        </Modal>
        <Modal
            width='737'
            v-model="finish"
            title="Common Modal dialog box title"
            ok-text="提交"
           >
            <Form  :label-width="80">
                <FormItem label="任务描述">
                    <Input  type="textarea"  :rows="4" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="拍照上传">
                    <!-- <Input  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input> -->
                    <div class="photoUpload">
                        <ul>
                            <li >
                                <Upload
                                    ref="upload"
                                    :show-upload-list="false"
                                    :format="['jpg','jpeg','png']"
                                    :max-size="2048"
                                    multiple
                                    type="drag"
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    style="display: inline-block;width:58px;">
                                    <div style="width: 58px;height:58px;line-height: 58px;">
                                    </div>
                                </Upload>
                            </li>
                            <li >
                                <Upload
                                    ref="upload"
                                    :show-upload-list="false"
                                    :format="['jpg','jpeg','png']"
                                    :max-size="2048"
                                    multiple
                                    type="drag"
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    style="display: inline-block;width:58px;">
                                    <div style="width: 58px;height:58px;line-height: 58px;">
                                    </div>
                                </Upload>
                            </li>
                            <li >
                                <Upload
                                    ref="upload"
                                    :show-upload-list="false"
                                    :format="['jpg','jpeg','png']"
                                    :max-size="2048"
                                    multiple
                                    type="drag"
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    style="display: inline-block;width:58px;">
                                    <div style="width: 58px;height:58px;line-height: 58px;">
                                    </div>
                                </Upload>
                            </li>
                        </ul>
                    </div>
                </FormItem>
            </Form>
        </Modal>
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
      states: false,
      url: '',
      refuse: true,
      finish: false
    }
  },
  methods: {
    receive () {
      this.refuse = false
      this.states = true
      this.url = '1'
      $('p.titles').html('您已成功领取该任务')
    },
    finished () {
      this.finish = true
    },
    jujue () {
      this.states = true
      this.url = '3'
      this.refuse = true
      console.log($('.img >.titles'))
      $('p.titles').html('您已拒绝领取该任务')
    },
    ok () {
      console.log(this.url)
    },
    cancel () {
      this.states = false
      this.refuse = false
    }
  },
  mounted () {
    //
  }
}
</script>
