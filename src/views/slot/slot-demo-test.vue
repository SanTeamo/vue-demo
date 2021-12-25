<template>
  <slot-demo>
    <template #header="scope">scope.header ===> {{ scope.header.text }}</template>
    <template #center>
      <b>I'm in center</b>
    </template>
    <template #footer>I'm in footer</template>
    <b>I'm in test default</b>
  </slot-demo>
</template>

<script>
import SlotDemo from './components/slot-demo'
export default {
  name: 'slot-demo-test',
  components: {
    SlotDemo,
  },
}
</script>

<style scoped></style>
