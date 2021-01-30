<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    this.getUserInfo()
    this.getCartSum()
  },
  methods: {
    // 获取用户信息
    async getUserInfo () {
      const res = await this.axios.get('/user')
      this.$store.dispatch('saveUserName', { username: res.username })
    },
    // 获取购物车数量
    async getCartSum () {
      const res = await this.axios.get('/carts/products/sum')
      this.$store.dispatch('saveCartCount', { cartcount: res })
      // console.log(res)
    }
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
