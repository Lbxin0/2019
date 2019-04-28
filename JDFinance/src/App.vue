<template>
  <div id="app" style="background:#fff" :style="{'margin-top': ($route.path!='/relax') ? '60px':'0px'}">
    <jD-header v-if="this.$route.path !='/relax'"/>
    <router-view></router-view>
    <JDFooter v-if="this.$route.path !='/relax'"/>
  </div>
</template>

<script>
import JDHeader from './components/JDHeader.vue'
import JDFooter from './components/JDFooter.vue'

export default {
  name: 'app',
  components: {
    JDHeader,
    JDFooter,
    pathTravel:false
  },
  watch: {
  },
  mounted() {
    console.log(this.$route.path);
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
  overflow-x: hidden;
}
</style>
