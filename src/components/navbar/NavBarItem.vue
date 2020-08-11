<template>
  <div id="nav_item">
    <a href="javascript:;" @click="navClick" :class="{active:isActive}">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  methods: {
    navClick() {
      this.$router.push(this.path).catch((err) => err);
    },
  },
  computed: {
    // 注意这里的是$route,上面跳转的是$router
    isActive() {
      return this.$route.path == this.path;
    },
  },

};
</script>
<style>
#nav_item a {
  display: inline-block;
  height: 36px;
  padding: 3px 10px;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  text-align: center;
  line-height: 36px;
  border-radius: 10px;
}
#nav_item a:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff !important;
}
.active {
  background: rgba(255, 255, 255, 0.08) !important;
  color: #fff !important;
}
</style>