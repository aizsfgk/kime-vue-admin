<template>
  <div class="goods-container">
    <el-row>
      <el-col  :xs="24" :sm="12" :lg="8" :xl="6"  v-for="o in 15" :key="o" >
        <el-card  class="box-card" shadow="hover">
          <div class="img-container">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          </div>
          <div class="content-container">
            <span class="title">好吃的汉堡</span>
            <p class="desc">
              每天一次，好吃不腻
            </p>
            <div class="bottom clearfix">
              <el-button type="mini" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      currentDate: (new Date()).toString()
    }
  },
  methods: {
    handleClick () {
      console.log('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-container {
  display: flex;
  flex-wrap:wrap;
  margin:20px;

  .box-card {
    // width: 30%;
    // min-width: 320px;
    text-align: center;
    margin: 0 10px 10px 0;
    // &:last-of-type {
    //   border: 1px solid red;
    // }

    .img-container {
      min-width: 200px;
      height: 200px;
      width: 80%;
      overflow: hidden;
      margin: 0px auto;
      line-height:200px;

      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }

      .image {
        display: inline-block;
        vertical-align: middle;
      }
    }

    .content-container {
      margin-top: 20px;

      .title {
        font-weight: bold;
      }
      .desc {
        font-size: 14px;
        color: #999
      }
    }
  }
}
</style>>
