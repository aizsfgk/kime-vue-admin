import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

// 使用路由插件
Vue.use(VueRouter)

// 静态路由
export const constantRoutes = [
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
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '外部链接', icon: 'link' }
      }
    ]
  }
]
// 动态路由

const createRouter = () => new VueRouter({
  // 设置滚动条行为
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
