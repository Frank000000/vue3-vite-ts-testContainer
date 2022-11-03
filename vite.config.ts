import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import Components from 'unplugin-vue-components/vite' // 按需加载自定义组件
import { ElementPlusResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    // 按需引入
    Components({
      dts: true,
      dirs: ['src/components'], // 按需加载的文件夹
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver({
          // 参数配置可参考：https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/antdv.ts
          // 自动引入 ant-design/icons-vue中的图标，需要安装@ant-design/icons-vue
          resolveIcons: true,
        })
      ] // ElementPlus按需加载
    })
  ],
  base: "./",//打包路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')//设置别名
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    port: 4000,//启动端口
    open: false,
    // open: 'index.html',
    proxy: {
      // 选项写法
      '/prod-api': {
        target: 'http://10.21.20.155:8080/mc',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, '')
      }, '/dev-api': {
        target: 'http://mcui.aiinner.cn/prod-api',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, '')
      }
    },
    cors: true
  }
})