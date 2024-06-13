<template>
  <border-box title="水滴图">
    <div ref="chartBall" class="chartBall"></div>
  </border-box>
</template>

<script setup lang="ts" name="Ball">
import * as echarts from "echarts";
import { EChartOption, ECharts } from "echarts";
import "echarts-liquidfill/src/liquidFill.js"; // 在需要水滴图的页面js引入
import { onBeforeUnmount, onMounted, ref } from "vue";

const value = 0.48;
const data = [value, value];

const option: EChartOption = {
  // backgroundColor: "#060525",
  title: {
    text: (value * 100).toFixed(2) + "{a|%}",
    textStyle: {
      fontSize: 28,
      fontFamily: "Microsoft Yahei",
      fontWeight: "normal",
      color: "#f2d818",
      rich: {
        a: {
          fontSize: 18,
        },
      },
    },
    x: "center",
    y: "35%",
  },
  graphic: [
    {
      type: "group",
      left: "center",
      top: "60%",
      children: [
        {
          type: "text",
          z: 100,
          left: "10",
          top: "middle",
          style: {
            fill: "#fff",
            text: "重过载",
            font: "20px Microsoft YaHei",
          },
        },
      ],
    },
  ],
  series: [
    {
      type: "liquidFill",
      radius: "68%",
      center: ["50%", "50%"],
      data: data,
      backgroundStyle: {
        borderWidth: 2,
        borderColor: "#D09322",
        color: "rgba(210,168,8,.2)",
      },
      outline: {
        show: false,
      },
      color: ["rgba(210,168,8,1)", "rgba(210,168,8,.3)"],
      label: {
        normal: {
          formatter: "",
        },
      },
    },
  ],
};

let myChart: ECharts | null = null;
const chartBall = ref<HTMLDivElement | null>(null);
const initChart = () => {
  const chartDom = chartBall.value;
  myChart = echarts.init(chartDom);
  myChart.setOption(option);
};
const resizeChart = () => {
  if (myChart) {
    myChart.resize();
  }
};
onMounted(() => {
  initChart();
  window.addEventListener("resize", resizeChart);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeChart);
});
</script>

<style scoped>
.chartBall {
  width: 100%;
  height: 100%;
}
</style>
