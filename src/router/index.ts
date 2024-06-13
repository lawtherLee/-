import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home/index.vue"),
    },
    {
      path: "/database-monitor",
      component: () => import("@/views/DatabaseMonitor/index.vue"),
    },
  ],
});
export default router;
