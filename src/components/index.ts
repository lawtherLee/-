import Pie from "@/components/Pie/index.vue";
import BorderBox from "@/components/BorderBox/index.vue";
import Line from "@/components/Line/index.vue";
import Area from "@/components/Area/index.vue";
import Columnar from "@/components/Columnar/index.vue";
import RoundColumnar from "@/components/RoundColumnar/index.vue";
import Radar from "@/components/Radar/index.vue";
import Ball from "@/components/Ball/index.vue";
import DataInfo from "@/components/DataInfo/index.vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import DataInfoItem from "@/components/DataInfoItem/index.vue";
import DynamicColumnar from "@/components/DynamicColumnar/index.vue";
import { App } from "vue";

const components = [
  Pie,
  BorderBox,
  Line,
  Area,
  Columnar,
  RoundColumnar,
  Radar,
  Ball,
  DataInfo,
  SvgIcon,
  DataInfoItem,
  DynamicColumnar,
];
export default function (app: App) {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
}
