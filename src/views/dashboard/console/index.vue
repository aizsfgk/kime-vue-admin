<template>
  <div class="console-container">

    <div class="first">
      <el-row>
        <el-col  :xs="24" :sm="12" :lg="8" :xl="6">
          <card class="box-card">
            <template v-slot:header>
              <span>访问量</span>
            </template>
            <template v-slot:body>
              <div class="content">
                <p style="font-size: 1.5em; font-weight:bold;">232343</p>
                <div class="tip">
                  日同比<span style="color: red; padding-left:10px;">12.5%</span>
                  周同比<span style="color: green; padding-left:10px;">5%</span>
                </div>
              </div>
            </template>
          </card>
        </el-col>

        <el-col  :xs="24" :sm="12" :lg="8" :xl="6">
          <card class="box-card">
            <template v-slot:header>
              <span>销售额</span>
            </template>
            <template v-slot:body>
              <div class="content">
                <p>当前销售额：10000</p>
                <p>目标销售额：30000</p>
                <el-progress :stroke-width="10" :percentage="rate" :format="format"></el-progress>
              </div>
            </template>
          </card>
        </el-col>
      </el-row>
    </div>
    
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Console',
  components: {
    Card
  },
  data() {
    return {
      rate: 50
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    }
  }
  // 接口数据应该存在哪里呢???
  // data ???
  // 还是methods ???
}
</script>

<style lang="scss" scoped>
.first {
  margin: 15px 15px 0 15px;
}
</style>
