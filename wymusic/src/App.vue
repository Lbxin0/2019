<template>
  <div id="app">
    <router-view/>
    <FooterNav></FooterNav>
  </div>
</template>


<script>
import FooterNav from '@/components/footer'
export default {
  data() {
    return {
      
    }
  },
  components:{
    FooterNav
  }
}
</script>
<style lang="less">
@import url(./assets/css/reset.less);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  background:#fff;
}

</style>
