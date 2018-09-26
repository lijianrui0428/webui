<template>
    <div class="scoreAll">
        <div class="title">
            <div>
                <span class="useshu">|</span>
                <b>拍照上传</b>
            </div>
        </div>
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
        <div class="title" style="margin-top:39px">
            <div>
                <span class="useshu">|</span>
                <b>任务派遣</b>
            </div>
        </div>
        <taskInfo></taskInfo>
    </div>
</template>
<script>
import taskInfo from './task-info/task-info.vue'
import './index.less'
export default {
  name: 'home',
  components: {
    taskInfo
  },
  data () {
    return {
      states: false,
      url: ''
    }
  },
  mounted () {
    //
  }
}
</script>
