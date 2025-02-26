<!-- 負責主框架的部分，有 html js CSS 區。包含整體的架構 -->

<!-- html -->
<template>
  <div id="app" class="app-container">
    <Navbar />
    <main class="content">
      <!-- router-view 指的是網頁變化的內容(會根據按什麼有所改變) -->
       <!-- router-view 會按照當前路由載入不同的 vue -->
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<!-- js -->
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

// 在component 內註冊這些內容，才可以在html <template> 中被使用
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<!-- CSS -->
<style></style>
