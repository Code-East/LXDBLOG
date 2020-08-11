<template>
  <div id="app">
    <!-- 导航栏组件 -->
    <nav-bar>
      <div class="logo" slot="left">
        <img src="~assets/img/logo.png" alt />
      </div>

      <div slot="center" class="center">
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

      <div class="search" slot="right">
        <form>
          <input type="text" placeholder="Search.." />
          <button type="submit" class="el-icon-search"></button>
        </form>
      </div>
    </nav-bar>

    <router-view />
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import NavBarItem from "components/navbar/NavBarItem";
export default {
  data() {
    return {
      
    };
  },
  components: {
    NavBar,
    NavBarItem
  },
  created() {},
};
</script>

<style>
/* 导入初始化css样式 */
@import url("~assets/css/index.css");
#navbar .nav_content .logo {
  width: 160px;
  height: 60px;
  text-align: center;
  padding-top: 20px;
}
#navbar .nav_content .logo img {
  width: 70%;
  height: 70%;
}
#navbar .nav_content form {
  width: 183.6px;
  height: 27.2px;
  color: rgba(255, 255, 255, 0.9);
  align-content: center;
  text-align: center;
}
#navbar .nav_content form input {
  width: 83%;
  height: 21.8px;
  border: none;
  background-color: transparent !important;
  outline: none;
  color: rgba(255, 255, 255, 0.9);
}
#navbar .nav_content form button {
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
}

</style>
