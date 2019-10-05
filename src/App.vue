<template>
  <div id="app">
    <v-header></v-header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <global-modal></global-modal>
  </div>
</template>

<script>
import VHeader from '@/components/vHeader/vHeader'
import GlobalModal from '@/components/globalModal/globalModal'

export default {
  name: 'app',
  components: {
    VHeader,
    GlobalModal
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

#app {
  width: 100%;
  height: 100%;
}
</style>
