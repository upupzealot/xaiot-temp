<template>
  <el-row
    :gutter="20"
    class="page-box"
  >
    <el-col>
      <Breadcrumb
        :breadcrumbs="[{
          label: '仪表盘',
        }]"
      />
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '@/components-shared/breadcrumb.vue';

export default {
  components: {
    Breadcrumb,
  },
};
</script>
