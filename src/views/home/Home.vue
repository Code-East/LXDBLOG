<template>
  <div id="home">
      <home-index />
  </div>
</template>

<script>
import HomeIndex from './homechild/HomeIndex'
export default {
    components:{
        HomeIndex
    }
};
</script>

<style>
#home{
    position: relative;
    z-index: 1000;
}
</style>