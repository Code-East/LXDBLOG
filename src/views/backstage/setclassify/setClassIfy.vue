<template>
  <div id="setclassify">
    <div class="content">
      <el-input v-model="name" placeholder="请输入分类"></el-input>
      <el-button type="info" class="back" @click="backClick">返回</el-button>
      <el-button type="success" @click="setClick">修改</el-button>
    </div>
  </div>
</template>

<script>
import { setClassIfyData, getClassIfyData } from "network/classIfy";
export default {
  data() {
    return {
      name: "",
      id: Number,
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    async setClick() {
      if (this.name == "") {
        this.$message("输入分类内容");
        return;
      }
      let name = this.name;
      let id = this.id;
      let message = await setClassIfyData({ name, id });
      if (message) {
        this.$router.back();
        this.$message({
          message: "修改成功",
          type: "success",
        });
      } else {
        this.$message({
          message: "修改失败",
          type: "warning",
        });
      }
    },
  },
  async created() {
    let id = this.$route.params.id;
    console.log(id);
    let res = await getClassIfyData({ id });
    this.id = res.data[0].id;
    this.name = res.data[0].name;
  },
};
</script>
<style>
#setclassify {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#setclassify .content {
  width: 700px;
  display: flex;
}
#setclassify .content .back {
  margin-left: 10px;
}
</style>