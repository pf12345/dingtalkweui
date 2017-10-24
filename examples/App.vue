<style lang="less">
    @import "../src/less/index.less";
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  -webkit-overflow-scrolling: touch;  /* 使用HTML5快速滚动和回弹的效果 提升IOS的使用体验 */
  /*margin-top: 60px;*/
}
h1 {
  text-align: center;
  margin-top: 40px;
  color: #666;
}

</style>
