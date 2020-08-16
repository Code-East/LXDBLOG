<template>
  <div id="login">
    <div name="loginform" method="post" class="login_form">
      <h1>用户登入</h1>
      <el-input v-model="username" placeholder="请输入用户名" name="username" class="name_inp"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        name="password"
        show-password
        class="password_inp"
      ></el-input>
      <button class="login_btn" @click="loginClick">登入</button>
    </div>
  </div>
</template>

<script>
import { getUser, setToken } from "network/login";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    // 点击登入按钮判断
    async loginClick() {
      // 判断用户名或密码是否为空
      if (username == "" || password == "") {
        this.$message({
          message: "请输入用户名和密码",
          type: "warning",
          duration: 2000,
        });
        return;
      }
      let username = this.username;
      let password = this.password;

      console.log(this.$store.getters.getUser);
      // 从vuex中获取用户信息
      let user = { username, password };
      // 发送axios请求，并返回是否存在此用户信息
      let userdata = await getUser(user);
      // 判断用户名和密码，密码是否正确,后端返回-1表示错误
      if (userdata.data == "-1") {
        this.$message.error("用户名或密码错误");
      } else {
        this.$message({
          message: "登入成功",
          type: "success",
          duration: 2000,
        });
        //将用户信息存放入浏览器本地储存，以便后面使用
        localStorage.setItem('user',username);
        // 组合obj对象，修改token为true
        let token = true;
        let obj = { token, username };
        //调用修改token的axios函数
        setToken(obj);
        // 跳转至后台页面
        this.$router.replace("/backstage").catch((err) => err);
      }
    },
  },
};
</script>

<style>
#login {
  display: flex;
  width: 100%;
  height: 710px;
  justify-content: center;
  align-items: center;
}
h1 {
  color: #00b5ad !important;
}
.login_form {
  width: 450px;
  height: 300px;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.name_inp,
.password_inp {
  width: 80%;
}
.login_btn {
  width: 80%;
  height: 41px;
  border: none;
  background-color: #00b5ad;
  color: #fff;
  font-weight: 700;
  outline: none;
  border-radius: 5px;
}
.login_btn:hover {
  background-color: #19948e;
}
</style>