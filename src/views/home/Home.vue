<template>
  <div id="home">
    <home-index />
    <bar-info class="home_barinfo">
      <i class="el-icon-tickets"></i>
      最新文章
    </bar-info>
    <div class="connent">
      <article-list :datalist="articleData" />
      <paging :paging="pagingdata" @NextClick="nextClick" @BackClick="backClick" />
    </div>

    <buttom />
    <top />
  </div>
</template>

<script>
import HomeIndex from "./homechild/HomeIndex";

import BarInfo from "components/barinfo/BarInfo";
import ArticleList from "components/articlelist/ArticleList";
import Buttom from "components/buttom/Buttom";
import Top from "components/toTop/Top";
import Paging from "components/paging/Paging";

import { getArticleLen, getArticle } from "network/article";

export default {
  data() {
    return {
      articleData: [],
      allarticle: [],
      pagingdata: {
        count: 0,
        allcount: 1,
      },
    };
  },
  components: {
    HomeIndex,
    BarInfo,
    ArticleList,
    Buttom,
    Top,
    Paging,
  },
  methods: {
    // 获取数据
    async getThatArticle(obj) {
      let res = await getArticle(obj);
      return res.data;
    },
    // 点击下一页按钮
    async nextClick(articleObj) { 
      let article = await this.getThatArticle(articleObj);
      this.articleData = article;
    },
    // 点击上一页
    async backClick(articleObj) {
      let article = await this.getThatArticle(articleObj);
      this.articleData = article;
    },
  },
 
  async created() {
    // 获取10条数据，用于展示
    let article = await getArticle({ start: 0, end: 10 });
    this.articleData = article.data;
    // 获取所数据
    let allarticle = await getArticleLen();
    this.allarticle = allarticle.data;
    this.pagingdata.allcount = Math.ceil(this.allarticle.length / 10);
  },
};
</script>

<style scoped>
#home {
  position: relative;
}
#home .home_barinfo {
  margin-top: 30px;
}
</style>