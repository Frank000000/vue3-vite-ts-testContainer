import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style/index`,
      }, ],
    }),
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



// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// const fs = require("fs")
// const dotenv = require("dotenv")
// const { resolve } = require('path') // 编辑器提示 path 模块找不到，可以yarn add @types/node --dev

// export default ({ command, mode }) =>{
// 	let NODE_ENV =  process.env.NODE_ENV || 'development';
// 	let envFiles = [];
// 	//根据不同的环境使用不同的环境变量
// 	if(command == 'serve'){
// 		envFiles = [
// 			/** default file */
// 			`.env`
// 		]
// 	}else{
// 		envFiles = [
// 			/** default file */
// 			`.env`,
// 			/** mode file */
// 			`.env.${NODE_ENV}`
// 		]
// 	}
// 	for (const file of envFiles) {
// 		const envConfig = dotenv.parse(fs.readFileSync(file))
// 		for (const k in envConfig) {
// 			process.env[k] = envConfig[k]
// 		}
// 	}
// 	return defineConfig({
// 		plugins: [vue()],
// 		resolve: {
// 		    alias: {
// 		      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
// 		    }
// 		},
// 		server: {
// 			host: process.env.VITE_HOST,
// 			port: process.env.VITE_PORT,
// 			// 是否自动在浏览器打开
// 			open: true,
// 			// 是否开启 https
// 			https: false,
// 			// 服务端渲染
// 			ssr: false,
// 			base: process.env.VITE_BASE_URL,
// 			outDir: process.env.VITE_OUTPUT_DIR,
// 			proxy: {
// 			  '/api': {
// 				target: 'http://api网关所在域名',
// 				changeOrigin: true,
// 				rewrite: (path) => path.replace(/^\/api/, '')
// 			  },
// 			}
// 		},
// 	})
// }

