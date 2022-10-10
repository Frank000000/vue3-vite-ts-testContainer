import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  plugins: [
    vue()
  ],
  base:"./",//打包路径
  resolve: {
    alias:{
      '@': path.resolve(__dirname, 'src')//设置别名
    },
    extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    port:4000,//启动端口
    open: true,
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
    cors:true
  }
})