//有tab栏的路由
// import {
// createRouter,
// createWebHashHistory,
// RouteRecordRaw
// } from "vue-router";
// const modules =
// import.meta.globEager('./home/*.ts')

// export const routerList = Object.values(modules).map((item: any) => item.default);
// export type List = typeof routerList;
// const routes: Array < RouteRecordRaw> = [{
// path: "/",
// name: "/",
// meta: {
// title: "首页",
// keepAlive: true
// },
// component: () => import("@/Layout/index.vue"),
// children: routerList
// },
// {
// path: "/detail",
// name: "Detail",
// meta: {
// title: "详情页",
// keepAlive: true
// },
// component: () => import("@/pages/main/Detail.vue"),
// },
// ];
// const router = createRouter({
// history: createWebHashHistory(),
// routes,
// });
// export default router;

//无tab栏的路由
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from "vue-router";
import NProgress from 'nprogress'

const routes: Array < RouteRecordRaw > = [{
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("@/pages/main/Home.vue"),
  }, {
    path: "/mine",
    name: "Mine",
    meta: {
      title: "我的",
      keepAlive: true,
      // show:true
    },
    component: () => import("@/pages/main/Mine.vue"),
  }, {
    path: "/detail",
    name: "Detail",
    meta: {
      title: "详情页",
      keepAlive: true
    },
    component: () => import("@/pages/main/Detail.vue"),
  },
  {
    path: '/',
    redirect: {
      name: 'Detail'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((_to, _from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  // 进度条
  NProgress.done()
})

export default router