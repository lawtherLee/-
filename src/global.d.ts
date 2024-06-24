import BorderBox from "@/components/BorderBox";
import SvgIcon from "@/components/SvgIcon";
import DynamicColumnar from "@/components/DynamicColumnar";
import DataInfo from "@/components/DataInfo";
import DataInfoItem from "@/components/DataInfoItem";

declare module "vue" {
  export interface GlobalComponents {
    BorderBox: typeof BorderBox;
    SvgIcon: typeof SvgIcon;
    DynamicColumnar: typeof DynamicColumnar;
    DataInfo: typeof DataInfo;
    DataInfoItem: typeof DataInfoItem;
  }
}
export {};
