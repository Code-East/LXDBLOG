<template>
  <div id="bar_info">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#bar_info {
  width: 840px;
  height: 50px;
  background-color: #f3f4f5;
  opacity: 0.9;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(34, 36, 38, 0.15);
}
</style>