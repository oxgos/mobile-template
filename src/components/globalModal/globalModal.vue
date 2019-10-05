<template>
  <div class="global__modal" v-show="isModalShow">
    <components :is="modalComponentName" v-bind="modalComponentProps"></components>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isModalShow',
      'modalComponentName',
      'modalComponentProps'
    ])
  }
}
</script>

<style scoped lang="less">
  .global__modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #fff;
  }
</style>
