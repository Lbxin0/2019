<template>
  <div id="app">
    <PLay v-if="PLay"></PLay>
    <CheckToken v-if="login && !PLay"></CheckToken>
    <router-view v-if="!login && !PLay"/>
    <FooterNav v-if="!login && !PLay"></FooterNav>
  </div>
</template>


<script>
import PLay from './views/play/play.vue'
import FooterNav from '@/components/footer'
import axios from 'axios'
import CheckToken from './views/login/CheckToken'
import { log } from 'util';
export default {
  data() {
    return {
      login:false,
      PLay:false
    }
  },
  mounted(){
    axios.get('/login/cellphone?phone=15101366030&password=Lbxin0516').then(
      res=>{
        console.log(res)
      }
    ).catch(err=>{
      console.log(err)
    })
  },
  components:{
    FooterNav,
    CheckToken,
    PLay
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
