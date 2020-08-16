<template>
  <div id="table">
    <el-table :data="tableData" style="width: 100%" @row-click='towClick'>
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  props:{
    tableData:Array
  },
  methods:{
    towClick(row){
      this.$emit('delArticle',row)
    }
  }
};
</script>

<style>
.updatabtn {
  background-color: #00b5ad;
}
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 50px;
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 50px;
}
</style>