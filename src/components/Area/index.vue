<template>
  <border-box title="面积图">
    <div ref="chartArea" class="chartArea" />
  </border-box>
</template>

<script setup lang="ts" name="Area">
import BorderBox from "@/components/BorderBox/index.vue";
import * as echarts from "echarts";
import { EChartOption, ECharts } from "echarts";
import { onBeforeUnmount, onMounted, ref } from "vue";

let option: EChartOption = {
  // backgroundColor: "#000",
  color: ["#00DEF2", "#0055F2", "#F27300"],
  tooltip: {
    trigger: "axis",
    backgroundColor: "rgba(13, 64, 71, 0.50)",
    borderColor: "rgba(143, 225, 252, 0.60)",
    padding: 6,
    textStyle: {
      color: "#fff",
    },
  },
  legend: {
    data: ["数据1", "数据2", "数据3"],
    icon: "rect",
    itemWidth: 14,
    itemHeight: 14,
    top: "1%",
    right: "1%",
    textStyle: {
      fontSize: 14,
      color: "#ccdcf8",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "10%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    axisLine: {
      // 轴线设置
      show: false, // 显示轴线
    },
    axisLabel: {
      textStyle: {
        color: "#ccdcf8", //更改坐标轴文字颜色
        fontSize: 12, //更改坐标轴文字大小
      },
    },
    data: [
      "2022.01",
      "2022.02",
      "2022.03",
      "2022.04",
      "2022.05",
      "2022.06",
      "2022.07",
      "2022.08",
    ],
  },
  yAxis: {
    name: "(万元)",
    nameTextStyle: {
      fontSize: 14,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#737A85",
        type: "dashed",
      },
    },
    axisLabel: {
      textStyle: {
        color: "#ccdcf8", //更改坐标轴文字颜色
        fontSize: 12, //更改坐标轴文字大小
      },
    },
  },
  series: [
    {
      name: "数据1",
      type: "line",
      // smooth: true,
      symbol: "circle",
      symbolSize: 10,
      itemStyle: {
        shadowColor: "#fff",
        shadowBlur: 10,
      },
      label: {
        show: true,
        position: "right",
        color: "#fff",
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "RGBA(0, 222, 242, 0.6)",
          },
          {
            offset: 1,
            color: "RGBA(0, 222, 242, 0)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [100, 132, 122, 134, 190, 185, 201, 220],
    },
    {
      name: "数据2",
      type: "line",
      // smooth: true,
      symbol: "circle",
      symbolSize: 10,
      itemStyle: {
        shadowColor: "#fff",
        shadowBlur: 10,
      },
      label: {
        show: true,
        position: "right",
        color: "#fff",
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "RGBA(0, 85, 242, 0.6)",
          },
          {
            offset: 1,
            color: "RGBA(0, 85, 242, 0)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [80, 162, 91, 134, 144, 130, 210, 120],
    },
    {
      name: "数据3",
      type: "line",
      // smooth: true,
      symbol: "circle",
      symbolSize: 10,
      itemStyle: {
        shadowColor: "#fff",
        shadowBlur: 10,
      },
      label: {
        show: true,
        position: "right",
        color: "#fff",
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "RGBA(242, 115, 0, 0.6)",
          },
          {
            offset: 1,
            color: "RGBA(242, 115, 0, 0)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [180, 162, 201, 74, 144, 130, 280, 220],
    },
  ],
};

const chartArea = ref<HTMLDivElement | null>(null);

let myChart: ECharts | null = null;
const initChart = () => {
  const chartDom = chartArea.value;
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
.chartArea {
  width: 100%;
  height: 100%;
}
</style>
