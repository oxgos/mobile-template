<template>
  <div class="Home">首页</div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {}
  },
  created () {
    this.$eventBus.$on('headerGoback', () => {
      console.log('返回')
    })
  }
}
</script>

<style scoped lang="less">
.Home {
  width: 100%;
  height: 100%;
}
</style>
