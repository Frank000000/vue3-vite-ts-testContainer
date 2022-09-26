const routerConfig = [
  {
    path: '*',
    name: 'NotFound',
    components: {
      default: () => import('./pages/errorPage/notFound.vue')
    }
  }
];
export default routerConfig;
