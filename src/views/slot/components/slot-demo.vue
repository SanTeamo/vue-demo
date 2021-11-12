<template>
  <div>
    <div>
      <slot>default</slot>
    </div>
    <div>
      <slot name="header" v-bind:header="headerProps">{{ headerProps }}</slot>
    </div>
    <div>
      <div>
        <slot name="center">center</slot>
      </div>
      <slot-child>
        <template #default="{ childProp }">{{ childProp.text }}</template>
      </slot-child>
    </div>
    <div>
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script>
import SlotChild from './slot-child'
export default {
  name: 'slot-demo',
  components: {
    SlotChild,
  },
  data() {
    return {
      headerProps: {
        text: 'headerProps text',
      },
    }
  },
  mounted() {
    console.log(this.$slots)
    console.log(this.$scopedSlots)
  },
}
</script>

<style scoped></style>
