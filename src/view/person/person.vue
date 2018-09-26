<template>
    <div class="personAll">
        <div class="title">
            <div>
                <span class="useshu">|</span>
                <b>个人档案</b>
            </div>
            <Button type="primary">修改</Button>
        </div>
        <div class="personContent">
            <div class="personLeft">
                <Form ref="personForm" :model="form" :label-width="100">
                    <FormItem prop="userName" label="姓名" style="margin-bottom:42px;">
                        <Input v-model="form.userName" placeholder="请输入用户名">
                        </Input>
                    </FormItem>
                    <FormItem prop="password" label="身份证号" style="margin-bottom:42px;">
                        <Input type="password" v-model="form.password" placeholder="请输入身份证号码">
                        </Input>
                    </FormItem>
                    <FormItem prop="password" label="手机号" style="margin-bottom:42px;">
                        <Input type="password" v-model="form.password" placeholder="请输入手机号">
                        </Input>
                    </FormItem>
                    <FormItem prop="password" label="邮箱" style="margin-bottom:42px;">
                        <Input type="password" v-model="form.password" placeholder="请输入邮箱">
                        </Input>
                    </FormItem>
                </Form>
            </div>
            <div class="personRight">
                <Form>
                    <FormItem label="性别">
                        <RadioGroup v-model="form.radio">
                            <Radio label="male" style="margin-left:30px;">男</Radio>
                            <Radio label="female" style="margin-left:60px;">女</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="头像采集" style="margin-top:50px;height:196px">
                        <!-- <Input type="password"  v-model="form.password" style="width:40px;">
                        </Input> -->
                        <!-- <Upload
                            ref="upload"
                            :show-upload-list="false"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            multiple
                            type="drag"
                            style="display: inline-block;width:58px;">
                            <div style="width: 58px;height:58px;line-height: 58px;">
                                <Icon type="ios-camera" size="20"></Icon>
                            </div>
                        </Upload> -->
                        <div class="imgkuang"></div>
                    </FormItem>
                </Form>
                <Button style="margin-left:60px;" @click="openModal">拍照</Button>
                <Button>本地上传</Button>
            </div>
            <div >
                <Modal
                    v-model="modalState"
                    title="Common Modal dialog box title"
                    width='1010'
                    height='658'
                   >
                   <div class="texts">
                       <div class="textsLeft">
                            <p style="margin-bottom:26px;text-align:left">请确保面部对准虚线框</p>
                            <img src="./image/31.png" alt="" style="width:441px;height:314px;">
                            <div class="takephoto">拍照</div>
                            <Button type="primary" style="width:104px;height:42px;margin-right:71px;">提交</Button>
                            <Button style="width:104px;height:42px;border-color:#E91E40;color:#E91E40">重拍</Button>
                       </div>
                        <div class="textsRight">
                            <img src="./image/12.png" alt="" style="width:281px;height:473px;">
                        </div>
                   </div>
                </Modal>
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
      form: {
        userName: 'super_admin',
        password: '',
        radio: 'male'
      },
      modalState: false

    }
  },
  methods: {
    openModal () {
      this.modalState = true
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">

.count-style{
  font-size: 50px;
}
</style>
