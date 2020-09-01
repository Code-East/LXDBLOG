<template>
  <div id="search">
    <div id="headerbg">
      <div class="veil">
        <div class="content">
          <div class="title">搜索结果</div>
          <div class="txt">人生就是一个不断寻找的过程</div>
        </div>
      </div>
    </div>
    <div class="search_body">
      <div class="content">
        <div class="search_count">
          <div class="text">搜索结果</div>
          <div class="count">
            共
            <span>{{ListLen}}</span>
            个
          </div>
        </div>
        <div class="search_list">
          <article-list :datalist="showList" class="showlist"/>
        </div>
      </div>
    </div>
    <buttom/>
  </div>
</template>

<script>
import { getArticleLen } from "network/article";
import ArticleList from "components/articlelist/ArticleList";
import Buttom from "components/buttom/Buttom";

export default {
  data() {
    return {
      ListLen: 0,
      articleData: "",
      showList: [],
    };
  },
  components: {
    ArticleList,
    Buttom
  },
  async mounted() {
    this.$bus.$on("setbut", async (res) => {
      let title = res;
      this.showList = this.articleData.filter((item) => {
        return item.title.indexOf(title) != -1;
      });
      this.ListLen = this.showList.length;
    });
  },
  async created() {
    let data = await getArticleLen();
    this.articleData = data.data;
    this.showList = this.articleData;
  },
};
</script>
<style>
#search #headerbg {
  width: 100%;
  height: 320px;
  background: url("~assets/img/headerimg/header-img3.jpg") no-repeat;
  background-size: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  background-position: center;
  text-align: center;
}
#search #headerbg .content {
  text-align: center;
}
#search #headerbg .content .title {
  font-family: "STXingkai";
  font-size: 80px;
  color: aliceblue;
}
#search #headerbg .content .txt {
  font-family: "STXingkai";
  color: aliceblue;
  font-size: 30px;
}
#search #headerbg .veil {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#search .search_body {
  width: 100%;
  margin-top: -45px;
}
#search .search_body .content {
  width: 1155px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 5px;
}
#search .search_body .content .search_count {
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-radius: 5px 5px 0 0;
  padding:0 5px;
}
#search .search_body .content .search_count .text {
  color: #00b5ad !important;
  font-size: 17px;
  font-weight: 800;
  line-height: 60px;
  float: left;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  margin-left: 10px;
}
#search .search_body .content .search_count .count {
  float: right;
  line-height: 60px;
  font-size: 16px;
  margin-right: 10px;
}
#search .search_body .content .search_count .count span {
  color: #f2711c !important;
  font-size: 22px;
}
#search .search_body .content .search_list {
  width: 100%;
  margin-top: 30px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:0 5px;
}
#search .search_body .content .showlist{
    margin: 0 auto;
}
</style>