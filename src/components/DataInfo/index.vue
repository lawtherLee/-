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
</style>
