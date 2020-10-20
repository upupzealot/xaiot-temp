<template>
  <el-row
    :gutter="20"
    class="page-box"
  >
    <el-col>
      <Breadcrumb
        :breadcrumbs="[{
          label: '设备管理',
        }, {
          label: 'xx 设备',
        }]"
      />
    </el-col>
    <el-col>
      <el-card class="grid-card">
        <TTable
          :fields="fields"
          :model="deviceModel"
        />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '@/components-shared/breadcrumb.vue';

import TTable from '@/components-shared/table.vue';
import DataModel from '@/components-shared/data-model';

export default {
  components: {
    Breadcrumb,
    TTable,
  },
  data() {
    const deviceModel = new DataModel({
      createApi: 'http://47.114.145.81:3000/mock/41/api/device',
      getListApi: 'http://47.114.145.81:3000/mock/41/api/device',
      updateApi: 'http://47.114.145.81:3000/mock/41/api/device/:id',
      deleteApi: 'http://47.114.145.81:3000/mock/41/api/device/:id',
    });

    return {
      fields: [{
        label: 'ID',
        prop: 'id',
        width: '80px',
      }, {
        label: '设备名称',
        prop: 'name',
      }, {
        label: '设备负责人',
        prop: 'owner',
      }],
      deviceModel,
    };
  },
};
</script>
