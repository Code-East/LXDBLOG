<template>
  <div id="home_index">
    <div class="content">
      <img class="header_img" src="~assets/img/header.jpg" alt />
      <div class="name">LXDBLOGS</div>
      <div class="to_friend">
        <!-- 使用elementui的 -->
        <el-popover placement="top-start" width="151" trigger="hover">
          <img src="~assets/img/ewm/qqewm.png" class="qqewm" alt />
          <el-button slot="reference" class="qqbtn" circle></el-button>
        </el-popover>

        <el-popover placement="top-start" width="151" trigger="hover">
          <img src="~assets/img/ewm/wxewm.jpg" class="wxewm" alt />
          <el-button slot="reference" class="wxbtn" circle></el-button>
        </el-popover>

        <el-popover placement="top-start" width="151" trigger="hover">
          <img src="~assets/img/ewm/wbewm.png" class="wbewm" alt />
          <el-button slot="reference" class="wbbtn" circle></el-button>
        </el-popover>

        <el-popover placement="top-start" width="151" trigger="hover" content="点击去往github">
          <el-button slot="reference" class="gitbtn" circle></el-button>
        </el-popover>
      </div>
      <div class="title">欢迎来到我的博客，愿您能找到合适的</div>
      <hr class="hr" />
      <div class="shi">"我将于茫茫人海中访我唯一灵魂之伴侣"</div>
      <div class="shi">"得之,我幸"</div>
      <div class="shi">"失之,我命"</div>
      <div class="shi">"如此而已"</div>
      <div class="router">
        <nav-bar-item path="/home">
          <i class="el-icon-star-on"></i>
          首页
        </nav-bar-item>
        <nav-bar-item path="/classify">
          <i class="el-icon-document-copy"></i>
          分类
        </nav-bar-item>
        <nav-bar-item path="/time">
          <i class="el-icon-time"></i>
          时间轴
        </nav-bar-item>
        <nav-bar-item path="/music">
          <i class="el-icon-headset"></i>
          音乐盒
        </nav-bar-item>
        <nav-bar-item path="/photo">
          <i class="el-icon-picture-outline"></i>
          照片墙
        </nav-bar-item>
        <nav-bar-item path="/fileme">
          <i class="el-icon-user"></i>
          关于我
        </nav-bar-item>
         <nav-bar-item path="/login">
        <i class="el-icon-chat-line-square"></i>
        登入
      </nav-bar-item>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarItem from "components/navbar/NavBarItem";
export default {
  components: {
    NavBarItem,
  },
};
</script>

<style>
#home_index {
  width: 100%;
  height: 800px;
  background: url("~assets/img/indexbg.jpg") no-repeat;
  background-size: 100%;
}
#home_index .content {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#home_index .content .header_img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
#home_index .content .name {
  font-size: 30px;
  color: #ffffff;
  font-family: STSong;
}
#home_index .content .to_friend {
  width: 200px;
  display: flex;
  justify-content: space-around;
}
#home_index .content .title {
  font-size: 30px;
  color: #ffffff;
}
#home_index .content .hr {
  display: block;
  width: 40%;
  background-color: #ffffff;
}
#home_index .content .shi {
  font-size: 24px;
  color: #fffffc;
  align-content: center;
  font-family: "STXingkai";
}
#home_index .content .router {
  display: flex;
  width: 800px;
  justify-content: space-around;
}
#home_index .content .router a {
  display: inline-block;
  width: 75.5px;
  height: 36px;
  padding: 3px;
  background: #e0e1e2;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  text-align: center;
  line-height: 36px;
  border-radius: 20px;
}
#home_index .content .router a:hover {
  background: #ccc;
  color: #fff;
}
.qqewm {
  width: 150px;
  height: 150px;
}
.qqbtn {
  width: 36px !important;
  height: 35px !important;
  background: url("~assets/img/qq.png") no-repeat !important ;
  background-size: 100% !important ;
  background-color: #ffffff !important ;
}
.wxewm {
  width: 150px;
  height: 150px;
}
.wxbtn {
  width: 36px !important;
  height: 35px !important;
  background: url("~assets/img/wx.png") no-repeat !important ;
  background-size: 100% !important ;
  background-color: #ffffff !important ;
}
.wbewm {
  width: 150px;
  height: 150px;
}
.wbbtn {
  width: 36px !important;
  height: 35px !important;
  background: url("~assets/img/wb.png") no-repeat !important ;
  background-size: 100% !important ;
  background-color: #ffffff !important ;
}
.gitbtn {
  width: 36px !important;
  height: 35px !important;
  background: url("~assets/img/github.png") no-repeat !important ;
  background-size: 100% !important ;
  background-color: #ffffff !important ;
}
</style>