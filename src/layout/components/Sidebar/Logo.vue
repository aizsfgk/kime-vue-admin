<template>
  <div class="sidebar-logo-container" :class="{'collapse': collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      title: 'KVA管理系统',
      logo: 'kva.png'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 60px; // 这里的高度很重要
  line-height: 60px;
  background: #191a23!important;
  text-align: center;
  overflow: hidden;
  color: #fff;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    text-align: center;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      margin: 0 auto;
      vertical-align: middle;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #F3F3FA;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: $fontFamily;
      vertical-align: middle;
    }
  }
}

</style>
