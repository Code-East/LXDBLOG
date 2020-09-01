<template>
  <div id="time">
    <div class="content">
      <section class="timeline">
        <ul>
          <li v-for="(item,i) in articleList" :key="i">
            <div>
              <time>{{item.timer}}</time>
              <div class="discovery">
                <h1>{{item.title}}</h1>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <top/>
    <buttom />
  </div>
</template>

<script >
import Buttom from "components/buttom/Buttom";
import Top from "components/toTop/Top";
import { getArticleLen } from "network/article";

export default {
  data() {
    return {
      articleList: [],
      name: "qweqweqrqf",
    };
  },
  components: {
    Buttom,
    Top
  },
  methods:{
  },
  async mounted() {
    let res = await getArticleLen();
    this.articleList = res.data;
    // 因为使用v-for之前是获取不到后面新增加的li的，所以下面的js代码就起不到作用，
    // 使用定时器将获取li和修改class都变成为异步代码，这样就能在获取li之后使用了
    setTimeout(() => {
      var items = document.querySelectorAll(".timeline li");
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            if (!items[i].classList.contains("in-view")) {
              items[i].classList.add("in-view");
            }
          } else if (items[i].classList.contains("in-view")) {
            items[i].classList.remove("in-view");
          }
        }
      }
      window.addEventListener("scroll", callbackFunc);
    }, 10);
  },
};
</script>

<style scoped>
@import url("~assets/css/timer.css");
#time .content {
  width: 100%;
  padding-top: 100px;
}
.timeline ul li:nth-of-type(even) > div {
  left: -484px !important;
}
</style>