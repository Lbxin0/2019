<template>
  <div id="app" style="background:#fff">
    <jD-header />
    <router-view></router-view>
    <JDFooter/>
  </div>
</template>

<script>
import JDHeader from './components/JDHeader.vue'
import JDFooter from './components/JDFooter.vue'

export default {
  name: 'app',
  components: {
    JDHeader,
    JDFooter
  },
  mounted() {
  },
}
</script>

<style>
@import './assets/css/reset.less';
#app {
  font-family:'PingFangSC-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow-x: hidden;
}
</style>
