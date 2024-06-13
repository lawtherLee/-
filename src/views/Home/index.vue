<script lang="ts" setup name="home">
import router from "@/router";

const toDatabasePage = () => {
  router.push("/database-monitor");
};
</script>

<template>
  <div>
    <button @click="toDatabasePage">数据库监控</button>
  </div>
</template>

<style scoped></style>
