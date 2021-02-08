<template>
  <!-- <siderbar class="sidebar-container" /> -->
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Sidebar } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      }
    }
  },
  methods: {
    handleClickOutside() { }
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
}

</style>
