import axios from '@/libs/api.request'

export const getTableData = (page, pageSize, data) => {
  return axios.request({
    url: '/Management/Order/Orders',
    params: {
      page,
      pageSize
    },
    data,
    method: 'post'
  })
}
