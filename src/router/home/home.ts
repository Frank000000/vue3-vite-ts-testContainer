export default {
  path: "/Home",
  name: "home",
  meta: {
    title: "首页",
    keepAlive: true
  },
  component: () => import("@/pages/main/Home.vue"),
}