<template>
  <div class="border-box" :style="{ width, height }">
    <h3>{{ title }}</h3>

    <!--    <BorderBox11-->
    <!--      :color="['#22f8f8', '#2266f8']"-->
    <!--      :titleWidth="120"-->
    <!--      class="border"-->
    <!--      :title="props.title"-->
    <!--    >-->
    <slot />
    <!--    </BorderBox11>-->
  </div>
</template>

<script setup lang="ts" name="BorderBox">
const props = defineProps<{
  title: string;
  width: string;
  height: string;
}>();

const width = props.width || "420px";
const height = props.height || "270px";
</script>

<style scoped lang="less">
/* clip-path裁剪形状 */
@path: polygon(
  10px 0,
  100% 0,
  100% calc(100% - 10px),
  calc(100% - 10px) 100%,
  0 100%,
  0 10px
);

.border-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  //width: 420px;
  //height: 270px;
  border-radius: 6px;
  background: linear-gradient(
    140deg,
    rgba(138, 203, 255, 0.55),
    rgba(41, 106, 143, 0.5),
    rgba(79, 170, 221, 1)
  );
  padding: 5px;
  margin: 5px;
  clip-path: @path;
  color: white;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s;
}

.border-box::after {
  content: "";
  width: calc(100% - 3px);
  height: calc(100% - 3px);
  z-index: -1;
  background: linear-gradient(180deg, #023863 0%, #002d48 100%);
  border-radius: 4px;
  position: absolute;
  /* 水平垂直居中 */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  clip-path: @path;
}
.border-box:hover {
  filter: brightness(1.5);
}

//::slotted(*) {
//  margin: 0;
//  padding: 0;
//  max-width: 100%;
//  max-height: 100%;
//}
</style>
