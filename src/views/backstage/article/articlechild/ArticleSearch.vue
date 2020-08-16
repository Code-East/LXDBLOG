<template>
  <div id="article_search">
    <div class="search">
      <el-input v-model="title" placeholder="标题" class="inp" @change="titlechange"></el-input>
      <el-input v-model="type" placeholder="分类" class="inp" @change="titlechange"></el-input>
      <el-button type="success" icon="el-icon-search" class="btn" @click="btnClick">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      type: "",
    };
  },
  methods: {
    // 点击搜索按钮
    btnClick() {
      if (this.title == "" && this.type == "") {
        this.$message({
          message: "请输入内容进行查询哦！",
          type: "warning",
        });
        return;
      }
      let title = this.title;
      let type = this.type;
      this.$emit("searchClick", { title, type });
    },
    titlechange(){
      let title = this.title;
      let type = this.type;
      this.$emit("searchChange", { title, type });
    }
  },
};
</script>

<style>
#article_search {
  width: 100%;
  height: 70px;
  background-color: #f8f3f3;
  border-radius: 5px;
  margin-bottom: 20px;
}
#article_search .search {
  line-height: 70px;
}
#article_search .search .inp {
  width: 200px;
  margin-left: 20px;
}
#article_search .search .btn {
  margin-left: 20px;
  background-color: #00b5ad;
}
</style>