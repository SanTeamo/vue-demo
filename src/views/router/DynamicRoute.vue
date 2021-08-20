<template>
  <div>
    <h2>dynamic route</h2>
    <span>{{ "我的name是：" + name }}</span>
  </div>
</template>
 
<script>
export default {
  name: 'dynamic',
  computed: {
    name: function () {
      return this.$route.params.name; //参数都保存在params中
    },
  },
  created() {
    console.log("this.$route", this.$route); // 当前子页面路由信息
    console.log("this.$router", this.$router); // 全局路由信息
  },
};
</script>
 
<style lang="css" scoped>
</style>