<script lang="ts" setup name="home">
import { useRouter } from "vue-router";

const router = useRouter();

const toDatabasePage = () => {
  router.push("/database-monitor");
};
</script>

<template>
  <div class="container">
    <h1>数据可视化模板介绍</h1>
    <p>本页面展示了一种数据可视化模板。点击下面的卡片可以查看更多详细内容。</p>

    <div class="template-list">
      <div class="template-card" @click="toDatabasePage">
        <h2>数据库监控</h2>
        <p>实时监控数据库的状态和性能，帮助您及时发现问题。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #666;
}

.template-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.template-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    background-color 0.3s;
  cursor: pointer;
  text-align: left;
  position: relative;
  overflow: hidden;

  h2 {
    margin-top: 0;
    font-size: 1.8em;
    color: #333;
  }

  p {
    font-size: 1em;
    color: #666;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #f0f0f0;
  }
}
</style>
