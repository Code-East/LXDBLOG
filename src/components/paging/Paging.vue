<template>
  <div id="paging">
    <div class="content">
      <el-link type="primary" class="back" v-show="isback" @click="backClick">上一页</el-link>
      <span>{{count}} / {{paging.allcount}}</span>
      <el-link type="primary" class="next" v-show="isnext" @click="nextClick">下一页</el-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isback: false,
      isnext: false,
      count: 1,
    };
  },
  props: {
    paging: {},
  },
  methods: {
    nextClick() {
      this.isback = true;
      this.count++;
      if (this.count == this.paging.allcount) {
        this.isnext = false;
      }
      this.paging.count += 10;
      let start = this.paging.count;
      let end = 10;
      this.$emit("NextClick", { start, end });
    },
    backClick() {
      this.count--;
      this.isnext = true;
      if (this.count == 1) {
        this.isback = false;
      }
      this.paging.count -= 10;
      let start = this.paging.count;
      let end = 10;
      this.$emit("BackClick", { start, end });
    },
  },
  created() {
    console.log(this.paging.allcount, this.count);
    if (this.paging.allcount > this.count) {
      this.isnext = true;
    }
  },
};
</script>
<style>
#paging {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  opacity: 0.9;
  height: 50px;
  width: 1159px;
  border-radius: 2px 2px 5px 5px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid #d4d4d5;
  text-align: center;
}
#paging .content {
  line-height: 50px;
}
#paging .content .back {
  float: left;
  margin-left: 50px;
  font-size: 17px;
}
#paging .content .next {
  float: right;
  margin-right: 50px;
  font-size: 17px;
}
</style>