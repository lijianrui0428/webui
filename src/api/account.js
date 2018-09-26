import axios from '@/libs/api.request'
// 查询
export const getTableData = (page, pageSize, data) => {
  return axios.request({
    url: '/Management/Account/Accounts',
    params: {
      page,
      pageSize
    },
    data,
    method: 'post'
  })
}

export const saveAccount = (data) => {
  return axios.request({
    url: '/Management/Account/SaveAccount',
    data,
    method: 'post'
  })
}

export const accountInfo = (id) => {
  return axios.request({
    url: '/Management/Account/Account',
    params: {
      id
    },
    method: 'post'
  })
}
// /Management/Account/ResetPassword
// 删除
export const deleteAccount = (id) => {
  return axios.request({
    url: '/Management/Account/DeleteAccount',
    params: {
      id
    },
    method: 'post'
  })
}
