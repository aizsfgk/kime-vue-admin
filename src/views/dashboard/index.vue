<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      我是dashboard
      name : {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    name: () => {
      return 'eee'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
