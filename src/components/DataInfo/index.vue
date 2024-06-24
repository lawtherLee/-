<template>
  <border-box title="数据展示">
    <div class="container">
      <DataInfoItem />
      <DataInfoItem />
      <DataInfoItem />
      <DataInfoItem />
    </div>
  </border-box>
</template>

<script setup lang="ts" name="DataInfo">
console.log(1);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.container > * {
  flex: 1 1 50%; /* 设置每个子元素的宽度为 50% */
  box-sizing: border-box; /* 包括边框和内边距在宽度内 */
  padding: 10px; /* 内边距，可以根据需要调整 */
}
</style>
