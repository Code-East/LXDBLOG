<template>
  <div id="comment">
    <div class="content">
      <div class="comment_bar">
        <h3>评论</h3>
        <el-divider></el-divider>
        <div class="comment_list">
          <div class="comment" v-for="(item,i) in commentList" :key="i">
            <div class="user_header">
              <span class="user el-icon-user-solid">{{item.user}}</span>
              <span class="time">{{item.time}}</span>
            </div>
            <div class="text">{{item.content}}</div>
          </div>
        </div>
      </div>

      <div class="txt">
        <textarea
          cols="138"
          rows="10"
          placeholder="请输入评论信息..."
          style="border:solid 1px rgba(34,36,38,.15); border-radius:6px; resize:none; outline:none; color:rgba(0,0,0,.87); padding: 5px; font-size:16px"
          v-model="text"
        ></textarea>
      </div>
      <div class="inp">
        <el-input placeholder="用户名" prefix-icon="el-icon-user-solid" v-model="user" class="user"></el-input>
        <el-input placeholder="邮箱" prefix-icon="el-icon-message" v-model="email" class="email"></el-input>
        <el-button type="success" icon="el-icon-edit" @click="btnClick">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getComment, addComment } from "network/article";
import formData from "assets/js/formData";
export default {
  data() {
    return {
      text: "",
      user: "",
      email: "",
      commentList: [],
    };
  },
  methods: {
    // 点击按钮触发函数
    async btnClick() {
      // 正则邮箱
      let reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;
      let isEamil = reg.test(this.email);
      // 判断是否为空
      if (this.text == "" || this.user == "" || this.email == "") {
        this.$message({
          message: "请填写完整哦!",
          type: "warning",
        });
        // 判断邮箱
      } else if (!isEamil) {
        this.$message.error("请填写正确格式的邮箱！");
      } else {
        let user = this.user;
        let email = this.email;
        let content = this.text;
        let time = formData(new Date());
        let articleid = this.$route.params.id;
        // 组成评论对象
        let commentObj = {
          user,
          email,
          content,
          time,
          articleid,
        };
        // 发送axios，增加评论
        let data = await addComment(commentObj);
        if (data.data) {
          this.$message({
            message: "评论成功",
            type: "success",
          });
          // 成功后从新获取数据
          let res = await getComment(articleid);
          this.commentList = res.data
          // 清空
          this.user = this.text = this.email = '';
        } else {
          this.$message.error("评论失败，等待管理员处理！");
        }
      }
    },
  },
  async mounted() {
    // 获取id，来获取评论数据，当前文章的
    let id = this.$route.params.id;
    let res = await getComment(id);
    this.commentList = res.data;
  },
};
</script>

<style>
#comment {
  margin-top: 20px;
}
#comment .comment_list {
  margin-bottom: 20px;
  padding-left: 10px;
}
#comment .comment_list .comment {
  margin-top: 10px;
}
#comment .comment_list .comment .user {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 700;
}
#comment .comment_list .comment .time {
  color: rgba(0, 0, 0, 0.4);
  margin-left: 10px;
}
#comment .comment_list .comment .text {
  margin-top: 10px;
}

#comment .content .comment_bar {
  width: 100%;
  border-top: 2px solid #00b5ad;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin-bottom: 20px;
}
#comment .content .comment_bar h3 {
  font-size: 20px;
  border: none;
  padding: 0;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 700;
  text-transform: none;
  color: rgba(0, 0, 0, 0.87);
  line-height: 48px;
  margin-left: 10px;
}
#comment .content .comment_bar .txt {
  margin-top: 15px !important;
}
#comment .content .inp {
  margin-top: 20px;
  display: flex;
}
#comment .content .inp .user,
.email {
  width: 300px !important;
  margin-right: 10px;
}
.br {
  margin-top: 0;
}
</style>