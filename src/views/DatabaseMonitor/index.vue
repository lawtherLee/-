<template>
  <div class="container">
    <div class="title-box">
      <h1>数据库监控驾驶舱</h1>
    </div>

    <div class="content">
      <div class="content-top">
        <Pie />
        <Line />
        <Area />
        <RoundColumnar />
      </div>
      <div class="content-middle">
        <Columnar width="1860px" />
      </div>
      <div class="content-bottom">
        <Radar />
        <Ball />
        <DataInfo />
        <DynamicColumnar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.container {
  width: 100%; /* 设置宽度 */
  height: 100vh; /* 设置高度 */
  background-image: url("@/assets/images/bg.jpg"); /* 背景图片路径 */
  background-size: cover; /* 背景图片适应容器 */
  background-position: center; /* 背景图片居中 */
  .title-box {
    position: relative;
    width: 100%;
    height: 60px;
    background-size: cover;
    background: url("@/assets/images/titleImage.png") no-repeat center;

    > h1 {
      position: absolute;
      text-align: center;
      background: linear-gradient(to right, #26a5ff, #22f8de); /* 渐变色 */
      -webkit-background-clip: text; /* 为文字裁剪背景 */
      background-clip: text; /* 为文字裁剪背景 */
      color: transparent; /* 文字颜色设为透明 */
      top: 10px;
      left: 50%; /* 左边距离父元素左边50% */
      transform: translateX(-50%); /* 将元素向左平移50%自身宽度，实现居中 */
    }
    .adorn-box {
      width: 100%;
      position: absolute;
      top: 30px;
    }
  }
  .content {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .content-top {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-around;
    }
    .content-middle {
      display: flex;
      justify-content: center;
    }
    .content-bottom {
      display: flex;
      justify-content: space-around;
    }
    //justify-content: space-around;
  }
}
</style>
