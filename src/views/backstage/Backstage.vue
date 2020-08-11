<template>
  <div id="backstage">
    <nav-bar class="back_navbar">
      <div class="title" slot="left">管理后台</div>

      <div slot="center" class="center">
        <nav-bar-item>
          <i class="el-icon-tickets"></i>
          文章管理
        </nav-bar-item>
        <nav-bar-item>
          <i class="el-icon-pie-chart"></i>
          分类管理
        </nav-bar-item>
        <nav-bar-item>
          <i class="el-icon-female"></i>
          友链管理
        </nav-bar-item>
        <nav-bar-item>
          <i class="el-icon-picture-outline"></i>
          相册管理
        </nav-bar-item>
      </div>

      <div slot="right" class="right">
        <el-dropdown>
          <span class="el-dropdown-link user">
            {{username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <div @click="userOut">
              <el-dropdown-item icon="el-icon-remove-outline">退出登入</el-dropdown-item>
            </div>
            <div @click="upUser">
              <el-dropdown-item icon="el-icon-circle-plus">切换账号</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import NavBarItem from "components/navbar/NavBarItem";

import { setToken } from "network/login";
export default {
  data() {
    return {
      username: this.$store.getters.getUser.username,
    };
  },
  components: {
    NavBar,
    NavBarItem,
  },
  methods: {
    userOut() {
      let username = this.username;
      let token = false;
       // 调用修改用户token的方法
      setToken({username ,token});
      // 退出至首页
      this.$router.replace('/home').catch((err) => err);
    },
    upUser() {
      let username = this.username;
      let token = false;
       // 调用修改用户token的方法
      setToken({username ,token});
      // 退出至登入页
      this.$router.replace('/login').catch((err) => err);
    },
  },
};
</script>
<style>
#backstage {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1000;
  background: url("~assets/img/backimg.jpg") no-repeat;
  background-size: 100%;
}
#backstage .title {
  color: #b5cc18 !important;
  font-size: 26px;
  font-weight: 700px;
}
#backstage .center {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
}
#backstage .user {
  width: 200px;
  height: 30px;
  align-content: center;
  line-height: 30px;
  color: #fff !important;
  cursor: pointer;
}
</style>
