<template>
  <div id="navbar">
    <div class="nav_content">
      <slot name="left"></slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  components: {},
  methods: {},
};
</script>

<style>
#navbar {
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0.4;
  z-index: 100;
}
#navbar .nav_content {
  display: flex;
  width: 1137px;
  height: 61.7px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
}
#navbar .center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>