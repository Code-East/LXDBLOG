<template>
  <div id="write_article">
    <div class="content">
      <div class="inpt">
        <el-button type="primary" plain class="btn">原创</el-button>
        <el-input v-model="title" placeholder="请输入标题" class="inp"></el-input>
      </div>
      <!-- mackdown插件 -->
      <mavon-editor
        class="mavon_editor"
        v-model="mdcontext"
        :toolbars="toolbars"
        @change="mdchange"
      ></mavon-editor>
      <!-- 输入框 -->
      <div class="buttom">
        <div class="classify">
          <el-button type="primary" plain size="small">分类</el-button>
          <el-select
            v-model="type"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="文章分类"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
          <el-button type="primary" plain size="small">首图</el-button>
          <el-input v-model="imgsrc" placeholder="请输入图片地址" class="imgsrc"></el-input>
        </div>
      </div>

      <div class="last">
        <el-button type="info" size="medium" @click="backCilck">返回</el-button>
        <el-button type="success" size="medium" @click="publish">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import formdata from "assets/js/formData";
import { savingArticles } from "network/article";
import { getClassIfyData } from "network/classIfy";
export default {
  data() {
    return {
      title: "",
      mdcontext: "",
      htmlcontxt: "",
      imgsrc: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
      },
      options: [
        
      ],
      type: [],
    };
  },
  components: {},
  methods: {
    // md输入框发生改变时触发函数，将内容赋值给mdcontext和htmlcontxt
    mdchange(markDown, html) {
      this.mdcontext = markDown;
      this.htmlcontxt = html;
    },
    // 点击发布触发函数
    async publish() {
      // 判断所有是否填写完成
      if (
        this.title == "" ||
        this.type == [] ||
        this.mdcontext == "" ||
        this.imgsrc == ""
      ) {
        this.$message({
          message: "请输入所以内容哦！",
          type: "warning",
        });
        return;
      }

      let title = this.title;
      let type = this.type;
      let state = "发布";
      let timer = formdata(new Date());
      let mdcontext = this.mdcontext;
      let htmlcontext = this.htmlcontxt;
      let imgsrc = this.imgsrc;
      //文章对象
      var articleobj = {
        title,
        type,
        state,
        timer,
        mdcontext,
        htmlcontext,
        imgsrc,
      };
      // 调用插入文章的axios,获取是否发布成功数据
      let message = await savingArticles(articleobj);
      console.log(message);
      if (message) {
        this.$message({
          message: "发布成功",
          type: "success",
        });
        // 跳转
        setTimeout(()=>{
          this.$router.replace("/backstage/article");
        },1000)
      } else {
        this.$message({
          message: "发布失败",
          type: "warning",
        });
      }
    },
    //点击返回按钮
    backCilck() {
      this.$confirm("此操作将不会保存文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$router.replace("/backstage/article");
      });
    },
  },
  async created(){
    // 获取分类数据
    let arr = await getClassIfyData();
    this.options = arr.data;
  }
};
</script>

<style>
#write_article {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#write_article .content {
  width: 1000px;
  /* background-color: black; */
  border-radius: 5px;
}
#write_article .content .inpt {
  display: flex;
}
#write_article .content .inp {
  margin-left: 3px;
}
.mavon_editor {
  height: 450px;
  margin-top: 10px;
}
#write_article .content .buttom {
  margin-top: 5px;
}
#write_article .content .buttom .classify {
  display: flex;
  justify-content: space-around;
}
#write_article .content .buttom .classify .el-button {
  width: 100px;
}
#write_article .content .buttom .classify .el-select {
  width: 39%;
}
#write_article .content .buttom .classify .imgsrc {
  width: 40%px;
  flex: 1;
  background-color: #ffffff;
}
#write_article .content .last {
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
}
</style>