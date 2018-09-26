import axios from '@/libs/api.request'
// 获取列表信息
export const getTableData = (page, pageSize, data) => {
  return axios.request({
    url: '/Management/Train/Courses',
    // get
    params: {
      page,
      pageSize
    },
    // post
    data,
    method: 'post'
  })
}
// 查询考试信息
export const getExaminfo = (courseId) => {
  return axios.request({
    url: '/Management/Train/ExamLogs',
    params: {
      courseId
    },
    method: 'post'
  })
}
