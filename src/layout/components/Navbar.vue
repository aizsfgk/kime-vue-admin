<template>
  <div class="navbar">
    <!-- 汉堡包 -->
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSidebar" />

    <!-- 面包屑 -->
    <breadcrumb class="breadcrumb-container" />

    <!-- 右部菜单 -->
    <div class="right-menu">
      <!-- 下拉菜单 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span style="display:block;">
            {{ name }}
          </span>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              主页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出</span>
          </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name'
    ])
  },
  methods: {
    toggleSidebar () {
      this.$store.dispatch('app/toggleSideBar')
    },
    logout () {
      this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.navbar {
  height: $topLogoNavHeight;
  overflow: hidden;
  position: relative;
  // background: #F3F3FA;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  transition: width 0.28s;
  
  & .hamburger-container {
    line-height: 60px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: backgroud .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px; /// TODO

    &:focus {
      outline: none;
    }
  }
  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      height: 100%;
      line-height: 60px;
      padding: 0 15px;
      cursor: pointer;
      position: relative;

      &:hover {
          background: rgba(0, 0, 0, .025)
      }
    }
  }
}
</style>
