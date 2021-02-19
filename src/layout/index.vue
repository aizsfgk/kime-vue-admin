<template>
  <!-- <siderbar class="sidebar-container" /> -->
  <div :class="classObj" class="app-wrapper">
    <!-- 侧边栏容器 -->
    <sidebar class="sidebar-container" />
    <!-- 主界面 -->
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <!-- 标签页 -->
        <tags-view v-if="needTagsView" :title="tagsViewTitle"/>

        <app-main class="main"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { AppMain, Sidebar, Navbar, TagsView } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    Navbar,
    TagsView
  },
  computed: {
    ...mapState({ // 使用vuex的方式
      needTagsView: state => state.settings.tagsView
    }),
    sidebar () {
      return this.$store.state.app.sidebar
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      }
    },
    fixedHeader () {
      return this.$store.state.settings.fixedHeader
    },
    tagsViewTitle () {
      return this.$route.meta.title
    }
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  .main {
    // background-color: $menuBg;
    margin: 2px 0 0 2px;
  }
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

</style>
