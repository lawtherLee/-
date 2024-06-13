<template>
  <div class="info-container">
    <div class="icon-box">
      <SvgIcon icon-class="zhujiruqinfangyu" />
    </div>
    <div class="info-box">
      <h4>标题名称</h4>
      <div class="text">
        <p>113</p>
        <h5>/单位</h5>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="DataInfoItem">
console.log(1);
</script>

<style scoped>
.icon-zhujiruqinfangyu {
  width: 26px;
  height: 26px;
  color: #22f8de;
}
.info-container {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  .info-box {
    display: inline-flex; /* 保持文字行内布局特性 */
    align-items: flex-start; /* 确保文字顶部对齐 */
    flex-direction: column;
    margin-left: 10px;
    .text {
      display: inline-flex;
      > p {
        font-size: 32px;
        font-weight: 800;
        color: #04d3bb;
      }
      > h5 {
        color: #cce7f3;
      }
    }
  }
}
</style>
