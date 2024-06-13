<template>
  <border-box title="折线图">
    <div ref="chartLine" class="chartLine" />
  </border-box>
</template>

<script setup lang="ts" name="Line">
import { onBeforeUnmount, onMounted, ref } from "vue";
import BorderBox from "@/components/BorderBox/index.vue";
import * as echarts from "echarts";
import { EChartOption, ECharts } from "echarts";

const chartLine = ref<HTMLDivElement | null>(null);

let myData8 = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];
let tss = [60, 80, 20, 40, 60, 40, 50, 50, 60, 32, 52, 55, 60];
let dcl = [40, 55, 50, 60, 30, 20, 60, 30, 20, 10, 30, 20];
let ycl = [20, 60, 65, 20, 10, 60, 80, 25, 40, 60, 20, 40];
const option: EChartOption = {
  // backgroundColor: "#041D3F",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(0, 255, 233,0)",
            },
            {
              offset: 0.5,
              color: "rgba(255, 255, 255,1)",
            },
            {
              offset: 1,
              color: "rgba(0, 255, 233,0)",
            },
          ],
          global: false,
        },
      },
    },
    textStyle: {
      color: "#fff",
      fontSize: 12,
    },
    backgroundColor: "rgba(17,95,182,0.5)", //设置背景颜色
  },
  grid: {
    containLabel: true,
    bottom: "6%",
    top: "22%",
    left: "2%",
    right: "2%",
  },
  legend: {
    top: "10%",
    right: "14%",
    itemWidth: 16,
    itemHeight: 10,
    itemGap: 30,
    textStyle: {
      fontSize: 14,
      color: "#B6DCF5",
      padding: [0, 0, 0, 4],
    },
  },
  xAxis: {
    data: myData8,
    axisLabel: {
      interval: 0,
      show: true,
      fontSize: 14,
      color: "#B6DCF5",
    },
    axisLine: {
      show: true,
      lineStyle: {
        show: true,
        color: "rgba(54, 153, 255, .4)",
      },
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: [
    {
      name: "次",
      type: "value",
      nameTextStyle: {
        color: "#B6DCF5",
        fontSize: 14,
        align: "center",
        padding: [0, 30, 0, 0],
      },
      // splitNumber: 5,
      axisLabel: {
        show: true,
        fontSize: 14,
        color: "#B6DCF5",
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#7FD6FF",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: "rgba(54, 153, 255, .4)",
          type: "dashed",
        },
      },
    },
  ],
  series: [
    {
      name: "投诉数",
      type: "line",
      showSymbol: true,
      symbolSize: 8,
      symbol: "circle",
      lineStyle: {
        normal: {
          color: "#FF8E3C",
        },
      },
      itemStyle: {
        color: "#FF8E3C",
        borderColor: "#fff",
        borderWidth: 2,
      },
      data: tss, // 折线图的数据
    },
    {
      name: "待处理",
      type: "line",
      showSymbol: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: {
        normal: {
          color: "#00A0E9",
        },
      },
      itemStyle: {
        color: "#00A0E9",
        borderColor: "#fff",
        borderWidth: 2,
      },
      data: dcl, // 折线图的数据
    },
    {
      name: "已处理",
      type: "line",
      showSymbol: true,
      symbolSize: 8,
      symbol: "circle",
      lineStyle: {
        normal: {
          color: "#02D6B0",
        },
      },
      itemStyle: {
        color: "#02D6B0",
        borderColor: "#fff",
        borderWidth: 2,
      },
      data: ycl, // 折线图的数据
    },
  ],
};

let myChart: ECharts | null = null;
const initChart = () => {
  const chartDom = chartLine.value;
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
.chartLine {
  width: 100%;
  height: 100%;
}
</style>
