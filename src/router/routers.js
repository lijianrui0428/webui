import Main from '@/view/main'
import forget from "./forget";
import ontrain from "./ontrain";
import Home from '@/view/myhome/home.vue'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    // redirect: '/home',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: Home,
    children: [
          {
            path: '/',
            name: 'ontrain',
            meta: {
              hideInMenu: true,
              title: '首页',
              // notCache: true
            },
            component: () => import('@/view/ontrain/ontrain.vue')
          },
          {
            path: '/ontrain',
            name: 'ontrain',
            meta: {
              hideInMenu: true,
              title: '首页',
              notCache: true
            },
            component: () => import('@/view/ontrain/ontrain.vue')
          },
          {
            path: '/class',
            name: 'class',
            meta: {
              hideInMenu: true,
              title: '首页',
              notCache: true
            },
            component: () => import('@/view/class/class.vue')
          },
          {
            path: '/test',
            name: 'test',
            meta: {
              hideInMenu: true,
              title: '首页',
              notCache: true
            },
            component: () => import('@/view/mytest/mytest.vue')
          },
          {
            path: '/person',
            name: 'person',
            meta: {
              hideInMenu: true,
              title: '首页',
              notCache: true
            },
            component: () => import('@/view/person/person.vue')
          },
          {
            path: '/points',
            name: 'points',
            meta: {
              hideInMenu: true,
              title: '首页',
              notCache: true
            },
            component: () => import('@/view/points/points.vue')
          },
          {
            path: '/score',
            name: 'score',
            meta: {
              hideInMenu: true,
              title: '首页',
              notCache: true
            },
            component: () => import('@/view/score/score.vue')
          },
          {
            path: '/tasking',
            name: 'tasking',
            meta: {
              hideInMenu: true,
              title: '首页',
              notCache: true
            },
            component: () => import('@/view/tasking/tasking.vue')
          }
        ]
  },
  forget,
]
