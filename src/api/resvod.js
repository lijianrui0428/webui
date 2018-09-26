import axios from '@/libs/api.request'

export const getTableData = (page, pageSize, data) => {
  return axios.request({
    url: '/Management/ResVod/Vods',
    params: {
      page,
      pageSize
    },
    data,
    method: 'post'
  })
}

export const saveVod = (data) => {
  return axios.request({
    url: '/Management/ResVod/SaveVod',
    data,
    method: 'post'
  })
}

export const vodInfo = (id) => {
  return axios.request({
    url: '/Management/ResVod/VodInfo',
    params: {
      id
    },
    method: 'post'
  })
}

export const deleteInfo = (id) => {
  return axios.request({
    url: '/Management/ResVod/DeleteVod',
    params: {
      id
    },
    method: 'post'
  })
}

export const importVod = '/Management/ResVod/ImportVod'
