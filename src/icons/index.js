import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 全局使用该组件
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)

// 自动导入svg文件
const requiredAll = requireContext => requireContext.keys().map(requireContext)
requiredAll(req)
