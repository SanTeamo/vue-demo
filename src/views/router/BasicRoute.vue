<template>
  <div>
    <h2>basic route</h2>
    <div>
      <button @click="$router.push('/router/dynamic/Alice')">
        点击跳转 dynamic route
      </button>
    </div>
    <div>
      <button @click="nestedButtonClick">
        点击跳转 nested route
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic',
  methods: {
    nestedButtonClick() {
      this.$router.push('/router/nested/Bob')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
