<template>
  <border-box title="动态柱状图">
    <div ref="chartDynamicColumnar" class="chartDynamicColumnar" />
  </border-box>
</template>

<script setup lang="ts" name="DynamicColumnar">
import * as echarts from "echarts";
import { EChartOption, ECharts } from "echarts";
import { onBeforeUnmount, onMounted, ref } from "vue";

const data = {
  label: [
    "类别1类别1类别1类别1类别1类别1类别1类别1",
    "类别2",
    "类别3",
    "类别4",
    "类别5",
    "类别6",
    "类别7",
    "类别8",
  ],
  value: [10, 12, 8, 25, 14, 28, 50, 24],
};

let dataZoomMove = {
  start: 0,
  end: 5,
};
let dataZoomMoveTimer = null;

const startMoveDataZoom = () => {
  dataZoomMoveTimer = setInterval(() => {
    dataZoomMove.start += 1;
    dataZoomMove.end += 1;
    if (dataZoomMove.end > data.value.length - 1) {
      dataZoomMove.start = 0;
      dataZoomMove.end = 5;
    }
    myChart?.setOption({
      dataZoom: [
        {
          type: "slider", // 有type这个属性，滚动条在最下面，也可以不行，写y：36，这表示距离顶端36px，一般就是在图上面。
          startValue: dataZoomMove.start,
          endValue: dataZoomMove.end,
        },
      ],
    });
  }, 2000);
};

let option: EChartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "none",
    },
    formatter: function (prams) {
      return prams[0].name + ":" + prams[0].data + "个";
    },
  },
  dataZoom: [
    {
      show: false, // 为true 滚动条出现
      startValue: dataZoomMove.start,
      endValue: dataZoomMove.end,
      yAxisIndex: [0, 1], //关联多个y轴
    },
    {
      //没有下面这块的话，只能拖动滚动条，鼠标滚轮在区域内不能控制外部滚动条
      type: "inside",
      yAxisIndex: 0,
      zoomOnMouseWheel: false, //滚轮是否触发缩放
      moveOnMouseMove: true, //鼠标滚轮触发滚动
      moveOnMouseWheel: true,
    },
  ],
  grid: {
    bottom: "0%",
    left: "0%",
    top: "10%",
    right: "0%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: [
    {
      type: "category",
      data: data.label,
      inverse: true,
      axisLabel: {
        inside: true,
        verticalAlign: "bottom",
        lineHeight: 34,
        margin: 2, //刻度标签与轴线之间的距离
        color: "#c3dafa",
        fontSize: 14,
        fontWeight: 400,
        formatter: function (value) {
          if (value !== undefined) {
            if (value.length > 9) {
              // 超出5个字符显示省略号
              return `${value.slice(0, 9)}...`;
            }
            return value;
          }
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    {
      type: "category",
      data: data.label,
      inverse: true,
      axisLabel: {
        inside: true,
        verticalAlign: "bottom",
        lineHeight: 34,
        margin: 2,
        formatter: function (value) {
          let k = data.label.indexOf(value);
          let index = k;
          return `{a|${data.value[index]}人}`;
        },
        rich: {
          a: {
            color: "#c3dafa",
            fontSize: "14",
            fontWeight: 500,
            padding: [4, 0, 0, 0],
            fontFamily: "DOUYU",
          },
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      data: data.value,
      type: "bar",
      barWidth: 10,
      showBackground: true,
      backgroundStyle: {
        color: "#E9EBF1",
        borderRadius: 50,
      },
      itemStyle: {
        borderRadius: 50,
        color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#9BA6FA" },
          { offset: 1, color: "#5D70FF" },
        ]),
      },
    },
  ],
};
let myChart: ECharts | null = null;
const chartDynamicColumnar = ref<HTMLDivElement | null>(null);
const initChart = () => {
  const chartDom = chartDynamicColumnar.value;
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
  startMoveDataZoom();
  window.addEventListener("resize", resizeChart);

  let chartDom = myChart!.getDom();
  chartDom.addEventListener("mouseout", () => {
    if (dataZoomMoveTimer) return;
    let dataZoomMove_get = myChart!.getOption().dataZoom![0];
    dataZoomMove.start = dataZoomMove_get.startValue;
    dataZoomMove.end = dataZoomMove_get.endValue;
    startMoveDataZoom();
  });
  chartDom.addEventListener("mouseover", () => {
    clearInterval(dataZoomMoveTimer);
    dataZoomMoveTimer = undefined;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeChart);
});
</script>

<style scoped>
.chartDynamicColumnar {
  width: 100%;
  height: 100%;
}
</style>
