<template>
  <div id="file_me">
    <div id="headerbg">
      <div class="veil">
      <div class="content">
        <div class="title">关于我</div>
        <div class="txt">我是天空里的一片云，偶尔投影在你的波心，你不必讶异，更无须欢喜，在转瞬间消灭了踪影。</div>
      </div>
      </div>
    </div>
    <div class="this_my">
      <div class="mybox">
        <div class="user">
          <img src="~assets/img/header.jpg" alt />
          <div class="name">LXDCODE</div>
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
            <a href="https://github.com/Code-East" class="git">
              <el-popover placement="top-start" width="151" trigger="hover" content="点击去往github">
                <el-button slot="reference" class="gitbtn" circle></el-button>
              </el-popover>
            </a>
          </div>
          <div class="introduce">
            <p>"Hello 我是博客的作者：LXD"</p>
            <p>99后</p>
            <p>爱打游戏，爱玩，爱编程</p>
            <p>平日比较安静，话少，想旅游，但是没钱</p>
            <p>热爱探索未知，好奇心还挺强</p>
            <p>喜欢享受生活</p>
            <p>很喜欢一句话，就是生活就是苦中作乐</p>
            <p>这就是我！</p>
            <hr class="hr"/>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <buttom />
  </div>
</template>

<script>
import Buttom from 'components/buttom/Buttom'
export default {
  components:{
    Buttom
  }
};
</script>
<style>
#file_me #headerbg {
  width: 100%;
  height: 320px;
  background: url("~assets/img/headerimg/header-img4.jpg") no-repeat;
  background-size: 100%;
  background-position: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#file_me #headerbg .content {
  text-align: center;
}
#file_me #headerbg .content .title {
  font-family: "STXingkai";
  font-size: 80px;
  color: aliceblue;
}
#file_me #headerbg .content .txt {
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
  background-color: rgba(0, 0, 0, 0.4);

}
#file_me .this_my {
  width: 100%;
  margin-top: -55px;
}
#file_me .this_my .mybox {
  padding: 15px;
  width: 1125px;
  margin: 0 auto !important;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin: 1rem 0;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  opacity: 0.9;
  text-align: center;
      box-sizing: inherit;
}
#file_me .this_my .mybox .user {
  margin-top: 30px;
}
#file_me .this_my .mybox .user img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
#file_me .this_my .mybox .user .name {
  font-size: x-large;
  font-family: STSong;
  margin-top: 10px;
}
#file_me .this_my .mybox .to_friend {
  margin-top: 20px;
}
#file_me .this_my .mybox .introduce{
  margin-top: 20px;
}
#file_me .this_my .mybox .introduce p{
  font-size: 16px;
  color: #999;
  margin-top: 10px;
}
#file_me .this_my .mybox .introduce .hr{
  margin-top: 30px;
}
.qqewm {
  width: 150px;
  height: 150px;
}
.qqbtn {
  margin-right: 10px !important;
  width: 36px !important;
  height: 35px !important;
  background: url("~assets/img/qq.png") no-repeat !important ;
  background-position: center !important;
  background-size: 70% !important;
  background-color: #e0e1e2 !important ;
}
.wxewm {
  width: 150px;
  height: 150px;
}
.wxbtn {
  margin-right: 10px !important;
  width: 36px !important;
  height: 35px !important;
  background: url("~assets/img/wx.png") no-repeat !important ;
  background-position: center !important;
  background-size: 70% !important;
  background-color: #e0e1e2 !important ;
}
.wbewm {
  width: 150px;
  height: 150px;
}
.wbbtn {
  margin-right: 10px !important;
  width: 36px !important;
  height: 35px !important;
  background: url("~assets/img/wb.png") no-repeat !important ;
  background-position: center !important;
  background-size: 70% !important;
  background-color: #e0e1e2 !important ;
}
.gitbtn {
  margin-right: 10px !important;
  width: 36px !important;
  height: 35px !important;
  background: url("~assets/img/github.png") no-repeat !important ;
  background-position: center !important;
  background-size: 70% !important;
  background-color: #e0e1e2 !important ;
}
</style>