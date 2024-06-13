<template>
  <border-box title="雷达图">
    <div ref="chartRadar" class="chartRadar"></div>
  </border-box>
</template>

<script setup lang="ts" name="Radar">
import * as echarts from "echarts";
import { EChartOption, ECharts } from "echarts";
import { onBeforeUnmount, onMounted, ref } from "vue";

let indicatorList = [
  {
    name: "机房1",
  },
  {
    name: "机房2",
  },
  {
    name: "机房3",
  },
  {
    name: "机房4",
  },
  {
    name: "机房5",
  },
];

const option: EChartOption = {
  // backgroundColor: "rgb(13,34,73)",
  color: ["#0290ff", "#ffe533", "#ff4d4d", "#06f5bc"],
  tooltip: {
    show: false, // 弹层数据去掉
  },
  legend: {
    data: [
      {
        name: "告警",
        icon: "rect",
        itemStyle: {
          color: "#ff4d4d",
          borderWidth: 0, // 设置图例图标的颜色
        },
      },
      {
        name: "预警",
        icon: "rect",
        itemStyle: {
          color: "#0290ff",
          borderWidth: 0, // 设置图例图标的颜色
        },
      },
      {
        name: "缺陷",
        icon: "rect",
        itemStyle: {
          color: "#ffe533",
          borderWidth: 0, // 设置图例图标的颜色
        },
      },
      {
        name: "巡检",
        icon: "rect",
        itemStyle: {
          color: "#06f5bc",
          borderWidth: 0, // 设置图例图标的颜色
        },
      },
    ],

    top: 210,
    show: true,
    y: "1",
    center: 0,
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 26,
    z: 3,
    // orient: 'horizontal',
    textStyle: {
      fontSize: 14,
      color: "#edf8ff",
    },
  },
  radar: {
    center: ["50%", "50%"], // 外圆的位置
    radius: "65%",
    name: {
      textStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 400,
        fontFamily: "PingFangSC-Regular,PingFang SC",
        fontStyle: "normal",
      },
    },
    // TODO:
    indicator: indicatorList,
    splitArea: {
      // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      show: true,
      areaStyle: {
        // 分隔区域的样式设置。
        color: ["rgba(255,255,255,0)"], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
      },
    },
    axisLine: {
      // 指向外圈文本的分隔线样式
      lineStyle: {
        color: "rgba(255,255,255,0)",
      },
    },
    splitLine: {
      lineStyle: {
        type: "solid",
        color: "#0ac8ff", // 分隔线颜色
        width: 2, // 分隔线线宽
      },
    },
  },
  series: [
    {
      type: "radar",
      data: [
        {
          value: [50, 60, 40, 10, 0],
          name: "告警",
          areaStyle: {
            normal: {
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(255, 56, 56, 0.14)", // 0% 处的颜色
                  },
                  {
                    offset: 0.15,
                    color: "rgba(255, 56, 56, 0.14)", // 100% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: "rgba(255, 56, 56, 0.4)", // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 56, 56, 0.8)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          symbolSize: [6, 6],
          lineStyle: {
            //边缘颜色
            //  width: 0
            color: "rgba(255, 56, 56, 0.8)",
            // shadowBlur:8,
            // shadowColor:'#ff3838'
          },
          itemStyle: {
            color: "#fff",
            borderColor: "#ff6565",
            borderWidth: 1,
            shadowBlur: 8,
            shadowColor: "#ff6565",
          },
        },
        {
          value: [80, 80, 80, 70, 60],
          name: "预警",
          areaStyle: {
            normal: {
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0,194,255, 0.14)", // 0% 处的颜色
                  },
                  {
                    offset: 0.15,
                    color: "rgba(0,194,255, 0.14)", // 100% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: "rgba(0,194,255, 0.4)", // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0,194,255, 0.8)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          symbolSize: [6, 6],
          lineStyle: {
            //边缘颜色
            //  width: 0
            color: "rgba(0, 194, 255, 0.8)",
            // shadowBlur:8,
            // shadowColor:'#ff3838'
          },
          itemStyle: {
            color: "#fff",
            borderColor: "#00c8ff",
            borderWidth: 1,
            shadowBlur: 8,
            shadowColor: "#00c8ff",
          },
        },
        {
          value: [50, 40, 70, 50, 60],
          name: "缺陷",
          areaStyle: {
            normal: {
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(255, 220, 56, 0.14)", // 0% 处的颜色
                  },
                  {
                    offset: 0.15,
                    color: "rgba(255, 220, 56, 0.14)", // 100% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: "rgba(255, 220, 56, 0.4)", // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 220, 56, 0.8)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          symbolSize: [6, 6],
          lineStyle: {
            //边缘颜色
            //  width: 0
            color: "rgba(255, 220, 56, 0.8)",
            // shadowBlur:8,
            // shadowColor:'#ff3838'
          },
          itemStyle: {
            color: "#fff",
            borderColor: "#cdbd3e",
            borderWidth: 1,
            shadowBlur: 8,
            shadowColor: "#cdbd3e",
          },
        },

        {
          value: [0, 0, 10, 30, 70],
          name: "巡检",
          areaStyle: {
            normal: {
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(13, 248, 172, 0.14)", // 0% 处的颜色
                  },
                  {
                    offset: 0.15,
                    color: "rgba(13, 248, 172, 0.14)", // 100% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: "rgba(13, 248, 172, 0.4)", // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(13, 248, 172, 0.8)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          symbolSize: [6, 6],
          lineStyle: {
            //边缘颜色
            //  width: 0
            color: "rgba(13, 248, 172, 0.8)",
            // shadowBlur:8,
            // shadowColor:'#ff3838'
          },
          itemStyle: {
            color: "#fff",
            borderColor: "#00ffb4",
            borderWidth: 1,
            shadowBlur: 8,
            shadowColor: "#00ffb4",
          },
        },
      ],
    },
  ],
};
let myChart: ECharts | null = null;
const chartRadar = ref<HTMLDivElement | null>(null);

const initChart = () => {
  const chartDom = chartRadar.value;
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
.chartRadar {
  width: 100%;
  height: 100%;
}
</style>
