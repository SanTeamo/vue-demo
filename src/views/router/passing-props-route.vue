<template>
  <div>
    <p>
      在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。 使用
      props 将组件和路由解耦：
    </p>
    <h4>接收参数 name = {{ name }} , id = {{ id }}, q = {{ q }}</h4>
  </div>
</template>

<script>
export default {
  name: 'passing-props-route',
  props: ['name', 'id', 'q'],
  created() {
    console.log(this.$route.params)
  },
}
</script>

<style></style>
