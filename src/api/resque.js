import axios from '@/libs/api.request'
// 分页信息
export const getTableData = (page, pageSize, data) => {
  return axios.request({
    url: '/Management/ResQuestion/Questions',
    params: {
      page,
      pageSize
    },
    data,
    method: 'post'
  })
}
// 试题信息
export const queInfo = (id) => {
  return axios.request({
    url: '/Management/ResQuestion/QuestionInfo',
    params: {
      id
    },
    method: 'post'
  })
}
// 保存试题

export const saveQes = (data) => {
  console.log(data)
  return axios.request({
    url: '/Management/ResQuestion/SaveQuestion',
    data,
    method: 'post'
  })
}
// 删除试题
export const deleteQue = (id) => {
  return axios.request({
    url: '/Management/ResQuestion/DeleteQuestion',
    params: {
      id
    },
    method: 'post'
  })
}

export const importQue = '/Management/ResQuestion/ImportQuestion'
