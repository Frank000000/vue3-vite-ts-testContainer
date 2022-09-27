import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { Button,RadioGroup, Radio } from 'vant';
import 'vant/lib/index.css';
import store from './store'
// import './style.css'
import 'selleri-ui/dist/style.css'

const app =createApp(App)
app.use(router).use(store).use(Button).use(RadioGroup).use(Radio)
app.mount('#app')