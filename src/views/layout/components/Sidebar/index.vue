<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
<!--    <span style="display: flex;justify-content: center;width: 100%;padding: 20px 0" class="base-color" v-show="!isCollapse">-->
<!--          <img src="https://ss-platform-test.shijicloud.com/shop-xd-web/images/shiji-logo-white.png" style="width: 96px;height: 50px;">-->
<!--    </span>-->
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#1a65ba"
      text-color="#bfcbd9"
      active-text-color="#ffffff"
    >
      <sidebar-item v-for="route in permission_routes" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar',
      'permission_routes'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
