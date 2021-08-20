<template>
  <div id="app">
    <!-- 我是头部 -->
    <header>
      <h2>我是头部</h2>
      <button @click="back">&lt;</button>
      <button @click="pre">&gt;</button>
    </header>
    <!-- 路由出口 -->
    <router-view />
    <!-- 路由以外的公共部分 -->
    <footer>我是脚部</footer>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    back() {
      this.$router.go(-1)
    },
    pre() {
      this.$router.go(1)
    },
  }
};
</script>

<style>
</style>
