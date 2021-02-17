import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = [ '/login' ]

router.beforeEach((to, from, next) => {
  NProgress.start()

  document.title = 'test-zsf-title'

  const hasToken = getToken()

  // 已经登录
  if (hasToken) {
    if (to.path === '/login') {
      next({ paht: '/' })
      NProgress.done()
    } else {
      // 获取用户名
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          store.dispatch('user/getInfo')
          next()

        } catch(error) {
          store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 未登录
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
