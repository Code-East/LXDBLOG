<template>
  <div
    id="article_list_item"
    :class="{mouseeactive:ismosein}"
    @click="toDetails(item.id)"
  >
    <div class="content">
      <div class="cont_left">
        <h1 class="title">{{item.title}}</h1>
        <div class="txt">{{item.mdcontext}}</div>
        <div class="tag">
          <span class="user">admin</span>
          <span class="time">
            <i class="el-icon-date"></i>
            {{item.timer}}
          </span>
          <span class="type">{{item.type}}</span>
        </div>
      </div>
      <div class="cont_right">
        <img :src="item.imgsrc" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ismosein: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    toDetails(id) {
      this.$router.push("/details/" + id);
    },
  },
};
</script>

<style>

#article_list_item {
  width: 100%;
  height: 262px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  border: 2px solid transparent;
  opacity: 0.9;
  margin-top: 20px;
  border-radius: 5px;
}
#article_list_item:hover {
  opacity: 1 !important;
  border-bottom: solid 2px #00b5ad !important;
}
#article_list_item h1 {
  cursor: pointer;
}
#article_list_item .content {
  padding: 20px;
}
#article_list_item .content .cont_left {
  padding: 5px;
  float: left;
}
#article_list_item .content .cont_left {
  width: 68%;
}
#article_list_item .content .cont_right {
  width: 30%;
  height: 100%;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
}
#article_list_item .content .cont_right img {
  width: 327px;
  height: 204px;
  margin: 10px 0;
  border-radius: 5px;
}
#article_list_item .content .cont_left .txt {
  font-weight: 300 !important;
  letter-spacing: 1px !important;
  line-height: 1.8;
  height: 70px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
#article_list_item .content .cont_left .tag {
  margin-top: 50px;
}
#article_list_item .content .cont_left .tag .user {
  cursor: pointer;
  color: #4183c4 !important;
}
#article_list_item .content .cont_left .tag .time {
  margin-left: 20px;
  color: rgba(0, 0, 0, 0.4);
  transition: 0.1s color ease;
}
#article_list_item .content .cont_left .tag .type {
  float: right;
  margin-right: 20px;
  background-color: #fff !important;
  color: #00b5ad !important;
  border: 1px solid #00b5ad !important;
  padding: 0 15px;
  border-radius: 5px;
  text-align: center;
}
</style>