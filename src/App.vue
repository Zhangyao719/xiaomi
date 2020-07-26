<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  async created () {
  }
}
</script>

<style lang="less">
  @import './styles/reset.less'; // 公共样式
  @import './styles/base.less'; // 版心
  @import './styles/config.less';
  @import './styles/mixin.less';
  @import './styles/button.less';
  @import './styles/modal.less';
</style>
