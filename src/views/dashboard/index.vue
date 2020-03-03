<template>
  <div class="dashboard-container">
    <panel-group></panel-group>
    <span v-permission="['ADMIN','TEST']">admin</span>
    <span v-permission="['TEST']">test</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from './components/PanelGroup'
export default {
  name: 'dashboard',
  components: { PanelGroup },
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
