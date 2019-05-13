<template>
  <div id="app" style="background:#fff" :style="{'margin-top': (this.$store.state.FooterNavShow==true) ? '60px':'0px'}">
  <!-- <div id="app" style="background:#fff" :style="{'margin-top': ($route.path!='/relax') ? '60px':'0px'}"> -->
    <!-- <jD-header v-if="this.$route.path !=('/relax'&&'/SaveMoney')"/> -->
    <jD-header v-if="$store.state.FooterNavShow"/>
    <router-view></router-view>
    <JDFooter v-if="$store.state.FooterNavShow"/>
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
    $route(to,from){
      console.log(typeof to.path);
      if(to.path.startsWith("/SaveMoney") || to.path=="/relax"){
        this.$store.commit('FooterHide')
        console.log(to.path+"FooterHide");
        console.log(this.$store.state.FooterNavShow+'********');
        
        
      }else{
        this.$store.state.FooterNavShow=true
      }
    }
  },
  mounted() {
    setInterval(() => {
      console.log(this.$store.state.FooterNavShow);
    }, 5000);
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
