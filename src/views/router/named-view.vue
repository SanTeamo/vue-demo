<template>
  <div>
    <h4>view one</h4>
    <router-view class="view one"></router-view>
    <hr />
    <h4>view two</h4>
    <router-view class="view two" name="a"></router-view>
    <hr />
    <h4>view three</h4>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: 'named-view',
}
</script>

<style scoped></style>
