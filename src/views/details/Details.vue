<template>
  <div id="details">
    <div class="header">
      <div class="box">
        <h1 class="title">{{article.title}}</h1>
        <div class="tag">
          <span class="yc">原创</span>
          <span class="item">
            <i class="el-icon-user"></i>
            admin
          </span>
          <span class="item">
            <i class="el-icon-date"></i>
            {{article.timer}}
          </span>
          <span class="item">
            <i class="el-icon-document-copy"></i>
            {{article.type}}
          </span>
        </div>
      </div>
    </div>
    <article-box class="articleContent" :item="article">
      <div class="article" ref="articlevbox"></div>
    </article-box>
    
    <buttom></buttom>
  </div>
</template>

<script>
import { getArticle } from "network/article";
import ArticleBox from "components/articlebox/ArticleBox";
import Buttom from "components/buttom/Buttom";

export default {
  name:'details',
  data() {
    return {
      article: Object,
    };
  },
  components: {
    ArticleBox,
    Buttom,
    
  },
  async mounted() {
    let id = this.$route.params.id; //获取路由传递过来的id
    let res = await getArticle({ id }); //使用id发送axios请求
    this.article = res.data[0]; //获取到数据
    let header = document.querySelector(".header"); //获取头部的盒子dom
    header.style.background = "URL(" + this.article.imgsrc + ") no-repeat"; //使用获取的图片，来修改背景
    header.style.backgroundSize = "100% 380px";
    let articleeml = this.$refs.articlevbox; //使用ref获取，存放封装的盒子
    articleeml.innerHTML = this.article.htmlcontext; //使用innerHTML，插入HTML数据
  },
  async created() {
      window.scrollTo(0,0);
    },
};
</script>

<style>
#details {
  width: 100%;
}
#details p {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  text-align: justify;
}
#details h1,
h2 {
  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei,
    Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  font-weight: 100;
  color: #000;
}

#details .header {
  width: 100%;
  height: 320px;
}
#details .header img {
  width: 100%;
  height: 320px;
}
#details .header .tag {
  margin-top: 10px;
}
#details .header h1 {
  font-size: 45px;
  color: #ffffff;
  font-family: STSong;
}
#details .header .box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#details .header .box .tag .yc {
  background-color: #fff !important;
  color: #f2711c !important;
  border-color: #f2711c !important;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: none;
  font-size: 14px;
  padding: 5px 8px;
  border-radius: 5px;
}
#details .header .tag .item {
  color: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  font-size: 18px;
  margin-left: 20px;
  cursor: pointer;
}
#details .articleContent {
}
</style>