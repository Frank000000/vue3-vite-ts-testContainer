export default {
  path: "/Mine",
  name: "mine",
  meta: {
    title: "我的",
    keepAlive: true,
    // show:true
  },
  component: () => import("@/pages/main/Mine.vue"),
}