import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

// 使用路由插件
Vue.use(VueRouter)

// 静态路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/console',
    meta: { title: '仪表盘', icon: 'dashboard' },
    children: [
      {
        path: 'console',
        name: 'Console',
        component: () => import('@/views/dashboard/console/index'),
        meta: { title: '主控台' }
      },
      {
        path: 'monitor',
        name: 'Monitor',
        component: () => import('@/views/dashboard/monitor/index'),
        meta: { title: '监控项' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/user',
    meta: { title: '系统管理', icon: 'user' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/system/user/index'),
        meta: { title: '用户管理' }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/system/role/index'),
        meta: { title: '角色管理' }
      },
      {
        path: 'permission',
        name: 'Permission',
        component: () => import('@/views/system/permission/index'),
        meta: { title: '权限管理' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/form-base',
    name: 'Form',
    meta: { title: '表单页面', icon: 'form' },
    children: [
      {
        path: 'form-base',
        name: 'FormBase',
        component: () => import('@/views/form/base/index'),
        meta: { title: '基础表单' }
      },
      {
        path: 'form-advance',
        name: 'FormAdvance',
        component: () => import('@/views/form/advance/index'),
        meta: { title: '高级表单' }
      }
    ]
  },
  {
    path: '/list',
    component: Layout,
    redirect: '/list/list-base',
    name: 'List',
    meta: { title: '列表页面', icon: 'table' },
    children: [
      {
        path: 'list-base',
        name: 'ListBase',
        component: () => import('@/views/list/base/index'),
        meta: { title: '基础列表' }
      },
      {
        path: 'list-advance',
        name: 'ListAdvance',
        component: () => import('@/views/list/card/index'),
        meta: { title: '卡片列表' }
      },
      {
        path: 'list-goods',
        name: 'ListGoods',
        component: () => import('@/views/list/goods/index'),
        meta: { title: '商品列表' }
      }
    ]
  },
  {
    path: '/detail',
    component: Layout,
    redirect: '/detail/base',
    name: 'Detail',
    meta: { title: '详情页面', icon: 'example' },
    children: [
      {
        path: 'detail-base',
        name: 'DetailBase',
        component: () => import('@/views/detail/base/index'),
        meta: { title: '基础详情' }
      }
    ]
  },
  {
    path: '/exception',
    component: Layout,
    meta: { title: '异常页面', icon: 'nested' },
    children: [
      {
        path: 'Page-404',
        name: 'Page404',
        component: () => import('@/views/404'),
        meta: { title: '404页面' }
      },
      {
        path: 'Page-403',
        name: 'Page403',
        component: () => import('@/views/403'),
        meta: { title: '403页面' }
      }
    ]
  },
  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: '/',
        meta: { title: '外部链接', icon: 'link' }
      }
    ]
  },

  // 如果页面不存在，则跳到404
  { path: '*', redirect: '/404', hidden: true }
]
// 动态路由

const createRouter = () => new VueRouter({
  // 设置滚动条行为
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
