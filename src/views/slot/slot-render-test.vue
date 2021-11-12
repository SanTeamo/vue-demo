<template>
  <slot-render>
    <template #header="scope">{{ scope.text }}</template>
    <template #center>
      <b>I'm in center</b>
    </template>
    <template #footer>I'm in footer</template>
    <b>I'm in test default</b>
  </slot-render>
</template>

<script>
import SlotRender from '@/views/slot/components/slot-render'
export default {
  name: 'test',
  components: {
    SlotRender,
  },
}
</script>

<style scoped></style>
