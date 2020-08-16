<template>
  <div id="addclassify">
    <div class="content">
      <el-input v-model="name" placeholder="请输入分类"></el-input>
      <el-button type="info" class="back" @click="backClick">返回</el-button>
      <el-button type="success" @click="addClick">增加</el-button>
    </div>
  </div>
</template>

<script>
import { addClassIfyData } from "network/classIfy";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    async addClick() {
      if (this.name == "") {
        this.$message("输入分类内容");
        return;
      }
      let name = this.name;
      let message = await addClassIfyData({ name })
      if (message) {
        this.$message({
          message: "增加成功",
          type: "success",
        });
      } else {
        this.$message({
          message: "增加失败",
          type: "warning",
        });
      }
    },
  },
};
</script>
<style>
#addclassify {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#addclassify .content {
  width: 700px;
  display: flex;
}
#addclassify .content .back {
  margin-left: 10px;
}
</style>