<template>
  <div id="top" v-if="top">
    <div>
      <el-button type="success" icon="el-icon-caret-top" circle @click="backTop"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top:false
    }
  },
  methods: {
    backTop() {
      let y = window.pageYOffset;
      let timer = setInterval(() => {
        y = y - 18;
        if (y <= 0) {
          clearInterval(timer);
        }
        window.scrollTo(0, y);
      });
    },
     // 监听window的滚动
    scrollFun() {
      if (window.pageYOffset > 1200) {
        this.top = true;
      } else {
        this.top = false;
      }
    },
  },
  mounted() {
    //为window监听滚动
    window.addEventListener("scroll", this.scrollFun);
  },
};
</script>

<style>
#top {
  position: fixed;
  bottom: 30px;
  right: 20px;
}
#top button {
  background-color: #00b5ad;
  color: #ffffff;
  border: none;
}
#top button:hover {
  background-color: #02a098;
}
</style>