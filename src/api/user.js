import axios from '@/libs/api.request'

export const login = ({ userName, password, code }) => {
  const data = {
    userName,
    password,
    code
  }
  return axios.request({
    url: '/Management/Account/Login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/Management/Account/Info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: '/Management/Account/Logout',
    method: 'post'
  })
}
