import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "@/assets/styles/common.less";
import router from "@/router";
import comp from "@/components";
import "@/assets/icons/iconfont.js";

const app = createApp(App);

app.use(comp);
app.use(router);
app.mount("#app");
