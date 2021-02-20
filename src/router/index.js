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
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '仪表盘', icon: 'dashboard' }
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
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
