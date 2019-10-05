<template>
  <div class="other">
    <x-header :left-options="{preventGoBack: true, showBack: true}"
              @on-click-back="goBack">
    {{title}}
    </x-header>
  </div>
</template>

<script type="text/ecmascript-6">
import { XHeader } from 'vux'
import { mapActions } from 'vuex'

export default {
  name: 'other',
  props: {
    title: {type: String, default: ''}
  },
  components: {
    XHeader
  },
  methods: {
    ...mapActions([
      'hideGlobalModal'
    ]),
    goBack() {
      this.hideGlobalModal()
    }
  }
}
</script>

<style scoped lang="less">

</style>
