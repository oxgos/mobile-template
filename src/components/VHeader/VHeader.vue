<template>
  <x-header :left-options="{preventGoBack: preventGoBack, showBack: showBack}"
            @on-click-back="goBack">
    {{headerTitle}}
  </x-header>
</template>

<script type="text/ecmascript-6">
import { XHeader } from 'vux'
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    XHeader
  },
  computed: {
    ...mapState([
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
