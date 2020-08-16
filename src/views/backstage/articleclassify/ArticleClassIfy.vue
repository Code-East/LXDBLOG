<template>
  <div id="article_class_ify">
    <div class="content">
      <back-table>
        <table-info :tableData="data" @delArticle="rowClick">
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column label="操作">
            <el-button type="primary" class="updatabtn" @click="setData">修改</el-button>
            <el-button type="danger" @click="delBtnClick">删除</el-button>
          </el-table-column>
        </table-info>
      </back-table>

      <div class="add_article">
        <div class="font">
          <span>一共{{datalength | getLegth}}页，当前第{{count}}页,一共{{datalength}}种分类</span>
        </div>
        <el-button type="primary" class="updatabtn" icon="el-icon-edit" @click="addClick">新增</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import BackTable from "components/backtable/BackTable";
import tableInfo from "components/backtable/tableInfo";

import { getClassIfyData, delClassIfyData} from "network/classIfy";
export default {
  data() {
    return {
      data: Array,
      datalength: Number,
      count: 1,
      id: Number,
      name:String
    };
  },
  methods: {
    // 增加数据
    addClick() {
      this.$router.push("/backstage/addclassify");
    },
    rowClick(row) {
      this.id = row.id;
    },
    // 点击删除
    async delBtnClick() {
      this.$confirm("此操作将永久删除该分类, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        let message;
        setTimeout(async () => {
          message = await delClassIfyData(this.id);
        }, 10);
        let index = this.data.indexOf(this.id);
        this.data.splice(index, 1);
        if (message.data) {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        } else {
          console.log("失败");
        }
      });
    },
    // 点击修改
    setData(){
      setTimeout(()=>{
         this.$router.push('/backstage/setclassify/'+this.id);
      })
    }
  },
  components: {
    BackTable,
    tableInfo,
  },
  filters: {
    getLegth(data) {
      return Math.ceil(data / 7);
    },
  },
  async created() {
    //   获取分类数据
    let classIfyData = await getClassIfyData();
    if (classIfyData.data) {
      this.data = classIfyData.data;
      this.datalength = this.data.length;
    } else {
      console.log("错误");
    }
  },
};
</script>
<style>
#article_class_ify {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#article_class_ify .content {
  margin-top: 80px;
  width: 900px;
}
#article_class_ify .add_article {
  position: relative;
  width: 100%;
  height: 85px;
  background-color: #f8f3f3;
  text-align: center;
}
#article_class_ify .add_article .font {
  display: flex;
  justify-content: center;
  padding: 10px;
}
#article_class_ify .add_article .nextbtn {
  /* padding-right: 100px; */
  float: right !important;
}
</style>