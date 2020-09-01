<template>
  <div id="phtot">
    <div id="headerbg">
      <div class="veil">
      <div class="content">
        <div class="title">照片墙</div>
        <div class="txt">我像一个拾荒者，悄悄收藏起时光的底片，让它变成陈年的私酿，然后在那个日的午后，晾晒出任何与你有关的画面。</div>
      </div>
      </div>
    </div>
    <div class="photo_box">
      <div class="photo_list">
        <el-image
          class="img"
          style="width: 33.33%;; height: 320px"
          :src="url4"
          :preview-src-list="srcList"
        ></el-image>
        <el-image
          class="img"
          style="width: 33.33%;; height: 320px"
          :src="url5"
          :preview-src-list="srcList"
        ></el-image>
        <el-image
          class="img"
          style="width: 33.33%;; height: 320px"
          :src="url6"
          :preview-src-list="srcList"
        ></el-image>
        <el-image
          class="img"
          style="width: 33.33%;; height: 320px"
          :src="url1"
          :preview-src-list="srcList"
        ></el-image>
        <el-image
          class="img"
          style="width: 33.33%;; height: 320px"
          :src="url2"
          :preview-src-list="srcList"
        ></el-image>
        <el-image
          class="img"
          style="width: 33.33%;; height: 320px"
          :src="url3"
          :preview-src-list="srcList"
        ></el-image>

        <!-- <img src="~assets/img/headerimg/header-img4.jpg" alt />
        <img src="~assets/img/backimg.jpg" alt />
        <img src="~assets/img/indexbg.jpg" alt />
        <img src="~assets/img/headerimg/header-img1.jpg" alt />
        <img src="~assets/img/headerimg/header-img2.jpg" alt />
        <img src="~assets/img/headerimg/header-img3.jpg" alt />-->
      </div>
    </div>
    <buttom />
  </div>
</template>

<script>
import Buttom from "components/buttom/Buttom";
import img1 from "assets/img/headerimg/header-img1.jpg";
import img2 from "assets/img/headerimg/header-img2.jpg";
import img3 from "assets/img/headerimg/header-img3.jpg";
import img4 from "assets/img/headerimg/header-img4.jpg";
import img5 from "assets/img/backimg.jpg";
import img6 from "assets/img/indexbg.jpg";
export default {
  data() {
    return {
      url1: img1,
      url2: img2,
      url3: img3,
      url4: img4,
      url5: img5,
      url6: img6,
      srcList: [img1, img2, img3, img4, img5, img6],
    };
  },
  components: {
    Buttom,
  },
};
</script>

<style>
#phtot #headerbg {
  width: 100%;
  height: 320px;
  background: url("~assets/img/headerimg/header-img2.jpg") no-repeat;
  background-size: 100%;
  background-position: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#phtot #headerbg .content {
  text-align: center;
}
#phtot #headerbg .content .title {
  font-family: "STXingkai";
  font-size: 80px;
  color: aliceblue;
}
#phtot #headerbg .content .txt {
  font-family: "STXingkai";
  color: aliceblue;
  font-size: 30px;
  width: 80%;
  margin: 0 auto;
}
#headerbg .veil {
  position: relative;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#phtot .photo_box .photo_list {
  width: 100%;
}
#phtot .photo_box .photo_list .img {
  margin-top: -5px;
  opacity: 0.9;
}
#phtot .photo_box .photo_list .img:hover {
  opacity: 1;
  cursor: pointer;
}
</style>