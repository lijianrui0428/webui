import axios from '@/libs/api.request'

export const getTableData = (page, pageSize, data) => {
  return axios.request({
    url: '/Management/TrainingPlan/TrainingPlans',
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

export const saveTrain = (data) => {
  return axios.request({
    url: '/Management/TrainingPlan/SaveTrainingPlan',
    data,
    method: 'post'
  })
}

export const trainInfo = (id) => {
  return axios.request({
    url: '/Management/TrainingPlan/TrainingPlan',
    params: {
      id
    },
    method: 'post'
  })
}
// 删除培训计划
export const deleteInfo = (id) => {
  return axios.request({
    url: '/Management/TrainingPlan/DeleteTrainingPlan',
    params: {
      id
    },
    method: 'post'
  })
}
// 配置
export const configInfo = (pid) => {
  return axios.request({
    url: '/Management/TrainingPlan/TrainingPlanInfos',
    params: {
      pid
    },
    method: 'post'
  })
}
// 保存培训试题
export const saveTrainingPlan = (data) => {
  return axios.request({
    url: '/Management/TrainingPlan/SaveInfos',
    data,
    method: 'post'
  })
}
// 上传头像
export const UploadImages = (data) => {
  return axios.request({
    url: '/Management/TrainingPlan/UploadImage',
    data,
    method: 'post'
  })
}
