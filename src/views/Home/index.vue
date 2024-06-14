<script lang="ts" setup name="home">
import { useRouter } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";
import * as THREE from "three";
import Halo from "vanta/src/vanta.halo";

const router = useRouter();

const toDatabasePage = () => {
  router.push("/database-monitor");
};

const vantaRef = ref<HTMLElement | null>(null);
let vantaEffect: { destroy: () => void } | null = null;

onMounted(() => {
  vantaEffect = Halo({
    el: vantaRef.value,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    scale: 2.0,
    color1: 0x0077ff,
    color2: 0xff5f6d,
  });
});

onUnmounted(() => {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
});
</script>

<template>
  <div ref="vantaRef" class="container">
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

<style lang="less" scoped>
@color-primary: #0077ff;
@color-secondary: #ff5f6d;
@card-background: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.1),
  rgba(255, 255, 255, 0)
);
@card-border: rgba(255, 255, 255, 0.2);
@card-shadow: rgba(0, 0, 0, 0.5);
@text-color: #fff;

.container {
  width: 100%;
  height: 100vh;
  margin: 20px auto;
  padding: 20px;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  text-align: center;
  color: @text-color;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.template-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.template-card {
  background: @card-background;
  border: 2px solid @card-border;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 15px @card-shadow;
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    background-color 0.3s,
    border-color 0.3s;
  cursor: pointer;
  text-align: left;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(30px);
  color: @text-color;

  h2 {
    margin-top: 0;
    font-size: 1.8em;
  }

  p {
    font-size: 1em;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
    background-color: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
  }
}
</style>
