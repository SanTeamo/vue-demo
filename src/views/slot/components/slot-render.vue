<script>
import SlotChild from './slot-child'
export default {
  name: 'slot-render',
  components: {
    SlotChild,
  },
  data() {
    return {
      defaultProps: {
        text: 'default text',
      },
      headerProps: {
        text: 'headerProps text',
      },
    }
  },
  render(createElement) {
    return createElement('div', [
      // <div><slot>default</slot></div>
      createElement('div', this.$slots.default || 'default'),
      // <div><slot name="header" v-bind:header="headerProps">{{ headerProps }}</slot></div>
      createElement('div', ['$scopedSlots.header ===> ', this.$scopedSlots.header(this.headerProps)]),
      // <div>
      // <div><slot name="center">center</slot></div>
      // <slot-child><template #default="{ childProp }">{{ childProp.text }}</template></slot-child>
      // </div>
      createElement('div', [
        createElement('div', this.$slots.center || 'center'),
        createElement('slot-child', {
          scopedSlots: {
            default: (props) => {
              return createElement('span', props.childProp.text)
            },
          },
        }),
      ]),
      // <div><slot name="footer">footer</slot></div>
      createElement('div', this.$slots.footer || 'footer'),
    ])
  },
  mounted() {
    console.log(this.$slots)
    console.log(this.$scopedSlots)
  },
}
</script>

<style scoped></style>
