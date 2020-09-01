<template>
  <div id="class_ify">
    <div id="headerbg">
      <div class="veil">
      <div class="content">
        <div class="title">文章分类</div>
        <div class="txt">你站在桥上看风景，看风景的人在楼上看你。明月装饰了你的窗子，你装饰了别人的梦。</div>
      </div>
      </div>
    </div>
    <div class="body">
      <div class="type_content">
        <div class="type_tag">
          <div class="list">
            <div
              class="list_item"
              v-for="(item,i) in typeList"
              :key="i"
              @click="itemClick(item.name)"
            >
              <el-button plain>
                <i class="el-icon-s-help"></i>
                {{item.name}}
              </el-button>
            </div>
          </div>
        </div>
        <div class="article_list">
          <article-list :datalist="showList" class="showlist" />
        </div>
        <div class="paging">
         <span> 1/1</span>
        </div>
      </div>
    </div>
    <top />
    <buttom />
  </div>
</template>

<script>
import { getArticleLen } from "network/article";
import { getClassIfyData } from "network/classIfy";

import ArticleList from "components/articlelist/ArticleList";
import Buttom from "components/buttom/Buttom";
import Top from "components/toTop/Top"

export default {
  data() {
    return {
      typeList: [],
      showList: [],
      articleList: [],
    };
  },
  methods: {
    itemClick(name) {
      this.showList = this.articleList.filter((item) => {
        return item.type.trim() == name;
      });
      if (this.showList.length == 0) {
        this.$message("暂时没有此类文章哦！");
      }
    },
  },
  components: {
    ArticleList,
    Buttom,
    Top
  },
  async created() {
    // 获取所有文章数据
    let datalist = await getArticleLen();
    this.articleList = this.showList = datalist.data;
    // 获取分类数据
    let res = await getClassIfyData();
    this.typeList = res.data;
  },
};
</script>

<style>
#class_ify #headerbg {
  width: 100%;
  height: 320px;
  background: url("~assets/img/headerimg/header-img1.jpg") no-repeat;
  background-size: 100%;
  background-position: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#class_ify #headerbg .content {
  text-align: center;
}
#class_ify #headerbg .content .title {
  font-family: "STXingkai";
  font-size: 80px;
  color: aliceblue;
}
#class_ify #headerbg .content .txt {
  font-family: "STXingkai";
  color: aliceblue;
  font-size: 30px;
}
#headerbg .veil {
  position: relative;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#class_ify .body {
  width: 100%;
  margin-top: -45px;
}
#class_ify .body .type_content {
  width: 1155px;
  margin: 0 auto;
  background: #fff;
  opacity: 0.9;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  border-radius: 5px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  padding: 5px;
}
#class_ify .body .type_content .type_tag {
  padding: 28px 0;
}
#class_ify .body .type_content .list {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#class_ify .body .type_content .list .list_item {
  color: rgba(0, 0, 0, 0.6) !important;
  font-weight: 400 !important;
  margin-top: 5px;
  margin-right: 10px;
}
#class_ify .body .type_content .article_list {
  width: 100%;
  margin-top: 30px;
  border-top: 2px solid #00b5ad;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#class_ify .body .type_content .article_list .show_list {
  margin: 0 auto;
}
#class_ify .body .type_content .paging{
  width: 100%;
  height: 50px;
  text-align: center;

}
#class_ify .body .type_content .paging span{
  line-height: 50px;
}
</style>