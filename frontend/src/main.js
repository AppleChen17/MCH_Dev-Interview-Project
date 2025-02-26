// 是 vue 主要的窗口，負責啟動 vue 把 app.vue 掛上 index.html 的人 !
import { createApp } from "vue"; // 
import App from "./App.vue"; // 主要負責 vue 的，
import router from "./router"; // 使用 router (用 /router/index.js 來創建頁面路由)
import "./assets/styles.css";

createApp(App).use(router).mount("#app");
