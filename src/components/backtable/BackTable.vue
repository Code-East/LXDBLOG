<template>
  <div id="backtable">
      <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#backtable{
    background-color: #f8f3f3;
    width: 100%;
    border-top: 2px solid #00b5ad;
    border-radius: 5px;
    font-size: 16px;
}
</style>