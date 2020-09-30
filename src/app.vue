<template>
  <el-container>
    <el-header>
      <Nav />
    </el-header>

    <el-main class="main-box">
      <Sidebar />

      <router-view />
    </el-main>
  </el-container>
</template>

<style>
body {
  margin: 0;
  font-family: 'PingFang SC', "Helvetica Neue", Helvetica,
    "microsoft yahei", arial, STHeiTi, sans-serif;
}
.page-box .grid-card {
  margin-top: 15px;
}

.el-main.main-box {
  position: absolute;
  top: 60px;
  left: 180px;
  right: 0;
  bottom: 0;
  overflow: scroll;
}
/* 隐藏滚动条槽位 */
.el-main.main-box::-webkit-scrollbar {
  width: 0;
}
</style>

<script>
import Nav from '@/components-shared/nav.vue';
import Sidebar from '@/components-shared/sidebar.vue';

export default {
  components: {
    Nav,
    Sidebar,
  },
};
</script>
