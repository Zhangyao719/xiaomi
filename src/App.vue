<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import storage from './storage'
export default {
  mounted () {
    storage.setItem('a', 1)
    // storage.getItem('a')
  }
}
</script>

<style lang="less"></style>
