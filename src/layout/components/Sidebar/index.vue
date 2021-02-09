<template>
  <div :class="{'has-logo': showLogo}">
    <!-- 1. logo -->
    <logo v-if="showLogo" :collapse="isCollapse" />

    <!-- 2. sidebar 总体 -->
    <!-- 这里有个滑动栏 -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import Logo from './Logo'
import variables from '@/styles/variables.scss'

export default {
  components: {
    SidebarItem,
    Logo
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    // 获取全部路由
    routes () {
      return this.$router.options.routes
    },
    // 激活的菜单
    activeMenu () {
      const route = this.$route
      console.log("route: ", route)
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    // 是否展示Logo
    showLogo () {
      return this.$store.state.settings.sidebarLogo
    },
    // 变量
    variables () {
      return variables
    },
    // 是否折叠
    isCollapse () { // ???
      return !this.sidebar.opened
    }
  }
}
</script>
