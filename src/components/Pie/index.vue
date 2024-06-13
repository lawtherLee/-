<template>
  <border-box title="饼图" width="420px">
    <div ref="chartPie" class="chartPie" />
  </border-box>
</template>

<script setup lang="ts" name="Pie">
import BorderBox from "@/components/BorderBox/index.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import * as echarts from "echarts";
import { EChartOption, ECharts } from "echarts";

const data = [
  {
    name: "1",
    value: 10,
  },
  {
    name: "2",
    value: 10,
  },
  {
    name: "3",
    value: 10,
  },
  {
    name: "4",
    value: 10,
  },
  {
    name: "5",
    value: 10,
  },
  {
    name: "6",
    value: 20,
  },
  {
    name: "7",
    value: 30,
  },
];

const option: EChartOption = {
  color: [
    "#A0CE3A",
    "#31C5C0",
    "#1E9BD1",
    "#0F347B",
    "#585247",
    "#7F6AAD",
    "#009D85",
    "rgba(250,250,250,0.3)",
  ],
  // backgroundColor: "#000",
  title: {
    text: "总数",
    subtext: 7789,
    textStyle: {
      color: "#f2f2f2",
      fontSize: 18,
    },
    subtextStyle: {
      fontSize: 16,
      color: ["#ff9d19"],
    },
    x: "10%",
    y: "30%",
  },
  grid: {
    bottom: 150,
    left: 100,
    right: "10%",
  },
  legend: {
    orient: "horizontal",
    bottom: "10%",

    // right: "5%",
    textStyle: {
      color: "#f2f2f2",
      fontSize: 14,
    },
    icon: "roundRect",
    data: data,
  },
  series: [
    // 主要展示层的
    {
      radius: ["20%", "60%"],
      center: ["50%", "40%"],
      type: "pie",
      tooltip: {
        show: true,
      },
      label: {
        normal: {
          show: false,
          formatter: "{c}%",
          textStyle: {
            fontSize: 14,
          },
          position: "outside",
        },
        emphasis: {
          show: true,
        },
      },
      labelLine: {
        normal: {
          show: true,
          length: 30,
          length2: 55,
        },
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        normal: {
          borderWidth: 8,
          borderColor: "rgba(0,0,0,1)",
        },
      },
      name: "民警训练总量",
      data: data,
    },
    // 边框的设置
    {
      radius: ["25%", "28%"],
      center: ["50%", "40%"],
      clockWise: false, //顺时加载
      hoverAnimation: true, //鼠标移入变大
      type: "pie",
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      animation: false,
      tooltip: {
        show: false,
      },
      data: [
        {
          value: 0,
          itemStyle: {
            color: "rgba(250,250,250,0.3)",
          },
        },
      ],
    },
    {
      name: "外边框",
      type: "pie",
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      center: ["50%", "40%"],
      radius: ["70%", "70%"],
      label: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 0,
          itemStyle: {
            borderWidth: 4,
            borderColor: "#0b5263",
          },
        },
      ],
    },
    {
      name: "刻度盘",
      type: "gauge",
      min: 0,
      max: 100,
      radius: "75%", //图表尺寸
      center: ["50%", "40%"],
      startAngle: 0,
      endAngle: 360,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#0dc2fe",
          width: 4,
        },
        length: 10,
        splitNumber: 20,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
    },
  ],
};
let myChart: ECharts | null = null;

const chartPie = ref<HTMLDivElement | null>(null);

const resizeChart = () => {
  if (myChart) {
    myChart.resize();
  }
};

const initChart = () => {
  const chartDom = chartPie.value;
  myChart = echarts.init(chartDom);
  myChart.setOption(option);
};

onMounted(() => {
  initChart();
  window.addEventListener("resize", resizeChart);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeChart);
});
</script>

<style scoped lang="less">
.chartPie {
  width: 100%;
  height: 100%;
}
</style>
