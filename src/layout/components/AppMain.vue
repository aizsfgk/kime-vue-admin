<template>
  <section class="app-main">
    <transition name="fade-transform" mode="in-out"> <!-- ease-in-out|out-in -->
      <router-view :key="key"/> <!-- 路由的组件将渲染到这里 -->
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /* 解释vh : https://www.cnblogs.com/luxiaoxing/p/7544375.html */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  /* overflow: hidden; */
}
</style>

<style lang="scss">
// 需要碰到了再看
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
