<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VNode } from 'vue'
import { CreateElement } from 'vue/types/vue'
import SlotChild from './slot-child.vue'

@Component({
  name: 'slot-render',
  components: {
    SlotChild,
  },
})
export default class SlotRender extends Vue {
  defaultProps = {
    text: 'default text',
  }
  headerProps = {
    text: 'headerProps text',
  }

  render(createElement: CreateElement): VNode {
    let { header } = this.$scopedSlots
    if (!header) {
      header = () => {
        return []
      }
    }
    return createElement('div', [
      // <div><slot>default</slot></div>
      createElement('div', this.$slots.default || 'default'),
      // <div><slot name="header" v-bind:header="headerProps">{{ headerProps }}</slot></div>
      createElement('div', ['$scopedSlots.header ===> ', header(this.headerProps)]),
      // <div>
      // <div><slot name="center">center</slot></div>
      // <slot-child><template #default="{ childProp }">{{ childProp.text }}</template></slot-child>
      // </div>
      createElement('div', [
        createElement('div', this.$slots.center || 'center'),
        createElement(SlotChild, {
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
  }
  mounted(): void {
    console.log(this.$slots)
    console.log(this.$scopedSlots)
  }
}
</script>

<style scoped></style>
