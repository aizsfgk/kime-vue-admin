<template>
  <div class="http404-container">
    <h3 class=title>403</h3>
    <p class="content">
      HTTP 403 Forbidden - 拒绝访问!
    </p>
    <el-button class="back-home">
      <a href="/">back to Home</a>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Page403'
}
</script>

<style lang="scss" scoped>
.http404-container {
  min-height: 100%;
  width:100%;
  overflow: hidden;
  text-align: center;

  background-color: #F3F3FA;

  .title {
    display: block;
    font-size: 5em;
  }

  .content {
    font-size: 3em;
  }

  .back-home {
    // border: 1px solid #2d8cf0;
  }
}
</style>


