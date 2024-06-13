<template>
  <border-box title="多维柱状图">
    <div ref="chartColumnar" class="chartColumnar" />
  </border-box>
</template>

<script setup lang="ts" name="Columnar">
import * as echarts from "echarts";
import { EChartOption, ECharts } from "echarts";
import { onBeforeUnmount, onMounted, ref } from "vue";

const offsetX = 12;
const offsetY = 6;
const barWidth = 30;

// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint;
    // console.log(shape);
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - offsetX, shape.y - offsetY];
    const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  },
});

// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
    const c4 = [shape.x + offsetX, shape.y - offsetY];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});

// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
    const c3 = [shape.x, shape.y - offsetX];
    const c4 = [shape.x - offsetX, shape.y - offsetY];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});

// 注册三个面图形
echarts.graphic.registerShape("CubeLeft", CubeLeft);
echarts.graphic.registerShape("CubeRight", CubeRight);
echarts.graphic.registerShape("CubeTop", CubeTop);

const colorArr = [
  ["#0099FF", "#0266ab", "#B6E9FF"],
  ["#00fbf7", "#02a3a9", "#A7FFDF"],
  ["#4A9880", "#70D6B5", "#A7FFDF"],
];
let series = [];
let xData = [
  "上行PRB利用率(%)",
  "下行PRB利用率(%)",
  "上行吞吐率(%)",
  "下行吞吐率(%)",
  "上行DB引用率",
  "下行DB引用率",
];
let legendArr = ["扩容前", "扩容后", "更新前"];
let datas = [
  ["20", "30", "40", "50", "30", "40"],
  ["70", "80", "80", "70", "80", "70"],
  ["50", "40", "30", "20", "30", "20"],
];

datas.forEach((item, index) => {
  series.push(
    {
      type: "custom",
      name: legendArr[index],
      renderItem: (params, api) => {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: "group",
          x: (index - datas.length / 2) * barWidth + 15,
          children: [
            {
              type: "CubeLeft",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: colorArr[index % colorArr.length][1],
                  },
                  {
                    offset: 1,
                    color: colorArr[index % colorArr.length][0],
                  },
                ]),
              },
            },
            {
              type: "CubeRight",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: colorArr[index % colorArr.length][1],
                  },
                  {
                    offset: 1,
                    color: colorArr[index % colorArr.length][0],
                  },
                ]),
              },
            },
            {
              type: "CubeTop",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: colorArr[index % colorArr.length][0],
                  },
                  {
                    offset: 1,
                    color: colorArr[index % colorArr.length][0],
                  },
                ]),
              },
            },
          ],
        };
      },
      data: item,
    },
    {
      type: "bar",
      name: legendArr[index],
      barWidth: 25, //当前适配，更改需要同时更改 offsetX,offsetY,barWidth
      label: {
        normal: {
          show: true,
          position: "top",
          // formatter: (e) => {
          //    return e.value + '次';
          // },
          fontSize: 16,
          color: "#43C4F1",
          offset: [0, -10],
        },
      },
      itemStyle: {
        color: "transparent",
      },
      tooltip: {},
      data: item,
    },
  );
});

const option: EChartOption = {
  // backgroundColor: "#012366",
  tooltip: {
    trigger: "axis",
    borderWidth: 0,
    backgroundColor: "rgba(8,36,68,.7)",
    color: "#fff",
    textStyle: {
      color: "#fff",
    },
    formatter: function (params, ticket, callback) {
      let str = params[0].name + "</br>";
      params.forEach((item, index) => {
        if (item.seriesType == "custom")
          //避免上方数字的bar也展示tooltip数据
          str += `
          <div style='display:flex;justify-content:space-between;align-items:center'>
            <div style='margin-right:20px;'>
              <span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${colorArr[index % colorArr.length][0]}"></span>
              &nbsp;${item.seriesName}
            </div>
            <span>&nbsp;${item.value ? item.value : "-"}</span>
          </div>`;
      });
      return str;
    },
  },
  grid: {
    left: 40,
    right: 40,
    top: 80,
    bottom: 35,
    containLabel: true,
  },
  legend: {
    right: "20",
    top: "10",
    show: true,
    selectedMode: false, // 取消图例点击事件 目前图例显示隐藏指标值位置会错误
    textStyle: {
      color: "white",
      fontSize: 14,
    },
    data: legendArr.map((item, index) => {
      return {
        name: item,
        textStyle: {
          color: "white",
          fontSize: 12,
        },
        itemStyle: {
          color: colorArr[index % colorArr.length][0],
        },
      };
    }),
  },

  xAxis: {
    type: "category",
    data: xData,
    axisLine: {
      show: true,
      lineStyle: {
        color: "#045d79",
        // width: 2
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "white",
      fontSize: 14,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      color: "white",
      fontSize: 14,
    },
    splitLine: {
      show: false,
    },
    show: false,
  },
  series: series,
  //数据过多避免重叠
  dataZoom: [
    {
      show: true,
      height: 10,
      xAxisIndex: [0],
      bottom: 20,
      showDetail: false,
      borderColor: "transparent",
      textStyle: {
        fontSize: 0,
      },
      endValue: 12 / datas.length, //从0开始的相当于5个x轴的数据
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      handleSize: "0%",
      handleStyle: {
        color: "#d3dee5",
      },
    },
  ],
};

let myChart: ECharts | null = null;
const chartColumnar = ref<HTMLDivElement | null>(null);
const initChart = () => {
  const chartDom = chartColumnar.value;
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
.chartColumnar {
  width: 100%;
  height: 100%;
}
</style>
