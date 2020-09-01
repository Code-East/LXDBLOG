<template>
  <div id="article_box">
     <slot></slot>
    <div class="end">
      <el-divider content-position="center">END</el-divider>
      <div class="money">
        <el-popover placement="bottom" width="200" trigger="click" content="真 真的吗？？？联系QQ哦！">
          <el-button slot="reference" type="success" round>打赏</el-button>
        </el-popover>
      </div>

      <div class="goto">
        <ul>
          <li>作者：lxd</li>
          <li>发表时间：{{item.timer}}</li>
          <li>版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</li>
          <li>转载声明：如果是转载栈主转载的文章，请附上原文链接</li>
          <li>有事联系下方QQ哦！！！</li>
        </ul>
      </div>
      <comment />
    </div>
  </div>
</template>

<script>
import Comment from "components/comment/Comment"
export default {
  props: {
    item:{}
  },
  components:{
    Comment
  },
  methods:{
   
  },

};
</script>
<style>
#article_box {
  width: 1130px;
  min-height: 300px;
  background-color: #fff;
  opacity: 0.9;
  margin: 0 auto;
  margin-top: -56px;
  padding: 20px;
  border: 1px solid #d4d4d5;
}
#article_box .end {
  margin-top: 60px;
}
#article_box .end .money {
  width: 100%;
  text-align: center;
}
#article_box .goto {
margin-top: 20px;
  height: 220px;
  box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;
  background-color: #fcfff5;
  color: #2c662d;
  font-size: 18px;
  padding-left: 25px;
}
#article_box .goto ul li{
    margin-top: 15px;
}
</style>