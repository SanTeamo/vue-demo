<template>
  <slot-demo>
    <template #header="scope">$scopedSlots.header ===> {{ scope.header.text }}</template>
    <template #center>
      <b>I'm in center</b>
    </template>
    <template #footer>I'm in footer</template>
    <b>I'm in test default</b>
  </slot-demo>
</template>

<script>
import SlotDemo from '@/views/slot/components/slot-demo'
export default {
  name: 'test',
  components: {
    SlotDemo,
  },
}
</script>

<style scoped></style>
