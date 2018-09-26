import axios from '@/libs/api.request'
// 获取列表信息
export const getTableData = (page, pageSize, data) => {
  return axios.request({
    url: '/Management/Invoice/Invoices',
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
