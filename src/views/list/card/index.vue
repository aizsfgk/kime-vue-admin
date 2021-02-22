<template>
  <div class="card-container">
    <el-row>
      <el-col  :xs="24" :sm="12" :lg="8" :xl="6"  v-for="o in 15" :key="o" >
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div class="content">
          我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        </div>
        <div class="btn">
          <el-button class="box-btn" type="text" @click="handleClick()">操作按钮</el-button>
          <el-button class="box-btn" type="text">操作按钮</el-button>
        </div>
      </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods: {
    handleClick () {
      console.log('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-wrap:wrap;
  margin:20px;
  .box-card {
    display: inline-block;
    // max-width: 320px;
    // min-width: 300px;
    // min-height: 300px;
    margin: 0 30px 30px 0;
    border:1 px dotted black;

    .btn {
      margin: 20px;
      float: right;
    }
  }
}
</style>>
