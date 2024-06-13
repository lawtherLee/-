import BorderBox from "@/components/BorderBox";
import SvgIcon from "@/components/SvgIcon";
import DynamicColumnar from "@/components/DynamicColumnar";

declare module "vue" {
  export interface GlobalComponents {
    BorderBox: typeof BorderBox;
    SvgIcon: typeof SvgIcon;
    DynamicColumnar: typeof DynamicColumnar;
  }
}
export {};
