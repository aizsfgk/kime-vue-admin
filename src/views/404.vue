<template>
  <div class="http404-container">
    <h3 class=title>404</h3>
    <p class="content">
      this page is not found!
    </p>
    <el-button class="back-home">
      <a href="/">back to Home</a>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Page404'
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


