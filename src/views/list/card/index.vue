<template>
  <div class="card-container">
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
    <el-card class="box-card">
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
  .box-card {
    display: inline-block;
    max-width: 360px;
    margin: 20px;
    width: 30%;
    border:1 px dotted black;

    .content {
      min-height: 80px;
    }

    .btn {
      margin: 20px;
      float: right;
    }
  }
}
</style>>
