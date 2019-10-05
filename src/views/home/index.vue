<template>
  <div class="Home">
    <x-button type="primary" @click.native="showModal">显示1弹出框</x-button>
    <x-button type="primary" @click.native="showModalTwo">显示2弹出框</x-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { XButton } from 'vux'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {}
  },
  components: {
    XButton
  },
  created () {
    this.$eventBus.$on('headerGoback', () => {
      console.log('返回')
    })
  },
  methods: {
    ...mapActions([
      'showGlobalModal'
    ]),
    showModal() {
      this.showGlobalModal({
        componentName: 'other',
        componentsProps: {
          title: '测试页面'
        }
      })
    },
    showModalTwo() {
      this.showGlobalModal({
        componentName: 'test',
        componentsProps: {
          title: '测试2页面'
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.Home {
  width: 100%;
  height: 100%;
}
</style>
