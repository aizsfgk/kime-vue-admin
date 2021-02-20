<template>
  <div class="base-container">
    <el-form ref="baseForm" :model="baseForm" label-width="80px" class="base-form">

      <el-form-item label="活动名称">
        <el-input v-model="baseForm.name" placeholder="请输入名称"></el-input>
      </el-form-item>

      <el-form-item label="活动地点">
        <el-select v-model="baseForm.region" placeholder="请选择区域">
          <el-option value="shanghai"></el-option>
          <el-option value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="baseForm.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="baseForm.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="即时配送">
        <el-switch v-model="baseForm.delivery"></el-switch>
      </el-form-item>

      <el-form-item label="活动性质">
        <el-checkbox-group v-model="baseForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="特殊资源">
        <el-radio-group v-model="baseForm.resource">
          <el-radio label="1">线上品牌商赞助</el-radio>
          <el-radio label="2">线下场地免费</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="baseForm.desc"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
// import { submit } from '@/api/from'
// 这里引入api相关的操作，然后进行数据提交

export default {
  name: 'Base',
  data () {
    return {
      baseForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '1',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit: ', this.baseForm)
      // api request
    }
  }
}
</script>

<style lang="scss" scoped>
.base-container {
  width: 95%;
  margin: 20px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;

  .base-form {
    margin: 0 auto;
    width: 80%;

    &>el-form-item {
      max-width:200px;
    }
    .line {
      text-align: center;
      color: gray;
    }
  }
}
</style>
