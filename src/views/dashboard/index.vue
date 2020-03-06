<template>
  <div class="dashboard-container">
    <panel-group></panel-group>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
    nowData: [110, 12, 99, 84, 32, 142, 145],
  }
}
export default {
  name: 'dashboard',
  components: { PanelGroup,LineChart },
  data(){
    return {
      lineChartData:lineChartData.newVisitis
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    background-color: #f0f2f5;
    padding: 32px;

  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
