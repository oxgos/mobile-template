<template>
  <x-header :left-options="{preventGoBack: preventGoBack, showBack: showBack}"
            @on-click-back="goBack">
    {{headerTitle}}
  </x-header>
</template>

<script type="text/ecmascript-6">
import { XHeader } from 'vux'
import { mapGetters } from 'vuex'

export default {
  components: {
    XHeader
  },
  computed: {
    ...mapGetters([
      'preventGoBack',
      'showBack',
      'headerTitle'
    ])
  },
  methods: {
    goBack() {
      this.eventBus.$emit('headerGoback')
    }
  }
}
</script>
