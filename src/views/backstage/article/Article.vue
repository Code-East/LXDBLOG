<template>
  <div id="article">
    <div class="content">
      <article-search @searchClick="searchClick" @searchChange="searchChange" />

      <back-table>
        <table-info :tableData="articleData" @delArticle="delArticle">
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="state" label="状态"></el-table-column>
          <el-table-column prop="timer" label="更新时间"></el-table-column>
          <el-table-column label="操作">
            <el-button type="primary" class="updatabtn" @click="setBtnClick">修改</el-button>
          </el-table-column>
          <el-table-column>
            <el-button type="danger" @click="delBtnClick">删除</el-button>
          </el-table-column>
        </table-info>
      </back-table>

      <div class="add_article">
        <div class="font">
          <el-link type="primary" class="topbtn" @click="topClick">上一页</el-link>
          <span>一共{{datalength | getLegth}}页，当前第{{count}}页</span>
          <el-link type="primary" class="nextbtn" @click="nextClick">下一页</el-link>
        </div>
        <el-button type="primary" class="updatabtn" icon="el-icon-edit" @click="addClick">新增</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleSearch from "./articlechild/ArticleSearch";

import BackTable from "components/backtable/BackTable";
import tableInfo from "components/backtable/tableInfo";

import {
  getArticle,
  getArticleLen,
  searchArticle,
  delArticle,
} from "network/article";
export default {
  data() {
    return {
      articleData: [],
      datalength: "",
      count: 1,
      start: 0,
      id: Number,
    };
  },
  methods: {
    // 点击增加文章
    addClick() {
      this.$router.push("/backstage/writearticle");
    },
    // 获取文章数据
    async getArticleData(obj) {
      let res = await getArticle(obj);
      return res.data;
    },
    // 下一页数据
    async nextClick() {
      // 判断当前页面是不是最后一页
      if (this.count == Math.ceil(this.datalength / 7)) {
        this.$message({
          message: "没有更多内容了哦！",
          type: "warning",
        });
      } else {
        // 当前页数++
        this.count++;
        //一次请求7条数据
        this.start = this.start + 7;
        // 获取新的数据,下一组数据
        let start = this.start;
        let end = 7;
        let data = await this.getArticleData({start,end});
        this.articleData = data;
      }
    },
    // 上一页数据
    async topClick() {
      if (this.count == 1) {
         this.$message({
          message: "没有更多内容了哦！",
          type: "warning",
        });
      } else {
        // 当前页数--
        this.count--;
        //一次请求7条数据
        this.start = this.start - 7;
        // 获取新的数据,下一组数据
        let start = this.start;
        let end = 7;
        let data = await this.getArticleData({start,end});
        this.articleData = data;
      }
    },
    // 点击搜索按钮
    async searchClick(obj) {
      let searchData = await searchArticle(obj);
      // 判断是否有数据
      if (searchData.data.message) {
        // 修改页面的页码，并修改表格数据
        this.count = 1;
        this.articleData = searchData.data.data;
        this.datalength = Math.ceil(searchData.data.data.length / 7);
      } else {
        this.$message({
          message: "没有此类数据哦！",
          type: "warning",
        });
      }
    },
    // 搜索按钮键盘抬起
    async searchChange(obj) {
      if (obj.title == "" && obj.type == "") {
        let len = await getArticleLen();
        this.datalength = len.data.length;
        let res = await this.getArticleData(0, 7);
        this.articleData = res;
      }
    },
    // 点击行触发
    delArticle(row) {
      this.id = row.id;
    },
    // 点击删除
    async delBtnClick() {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          // 获取删除信息
          let message = await delArticle(this.id);
          if (message.data) {
            // 删除元素
            let index = this.articleData.indexOf(this.id);
            this.articleData.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            // 获取删除后文章的总数修改页码
            let len = await getArticleLen();
            this.datalength = Math.floor(len.data.length / 7);
          } else {
            this.$message({
              message: "删除失败",
              type: "warning",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 点击修改按钮
    async setBtnClick() {
      // 因为点击修改按钮获取到和id更快，所以使用定时器让他变成异步
     setTimeout(()=>{
       this.$router.push('/backstage/setarticle/'+this.id);
     },10)
    },
  },

  filters: {
    // 过滤长度变成页数
    getLegth(num) {
      return Math.ceil(num / 7);
    },
  },
  components: {
    ArticleSearch,
    BackTable,
    tableInfo,
  },
  async created() {
    //获取一列7条文章数据
    let res = await getArticle({ start: 0,end:7 });
    this.articleData = res.data;
    //获取文章总数
    let len = await getArticleLen();
    this.datalength = len.data.length;
  },
};
</script>

<style>
#article {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#article .content {
  margin-top: 80px;
  width: 900px;
}
#article .add_article {
  position: relative;
  width: 100%;
  height: 85px;
  background-color: #f8f3f3;
  text-align: center;
}
#article .add_article .font {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
#article .add_article .nextbtn {
  /* padding-right: 100px; */
  float: right !important;
}
</style>