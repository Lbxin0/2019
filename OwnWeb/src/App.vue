<template>
  <div id="app">
    <Header-nav class="HeaderNav"/>
    <div  class="viewContainer">
      <div class="routerview">
        <router-view></router-view>
      </div>
      <div class="viewAds">
        <!-- <ads-pannel :title="Type">
          <div class="TypeList" slot="PannelItem">
            <single-txt :Title="SingleTxtTitle" :TxtNum="SingleTxtTxtNum"></single-txt>
          </div>
        </ads-pannel> -->
        <own-type style="background: #fff"></own-type>
        <vue-ads style="background: #fff;"></vue-ads>
      </div>
    </div>
    <!-- <Footer class="Footer"/> -->
  </div>
</template>


<script>
import HeaderNav from '@/components/HeaderNav.vue'
import Footer from '@/components/Footer.vue'
import OwnType from '@/pages/Ads/OwnType.vue'
import VueAds from '@/pages/Ads/VueAds.vue'
export default {
  name: 'app',
  components: {
    HeaderNav,
    Footer,
    OwnType,
    VueAds
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 800px;
  font-size: 1.4rem;
  background: url('https://x0516.github.io/SourceData/images/bg.jpg') center no-repeat / 100% 100%;
  background-size:cover;
  height:100vh;
  .viewContainer{
    width:90%;
    margin:0 auto;
    margin-top: 50px;
    text-align: left;
    >div{
      display:inline-block;
      box-sizing: border-box;
    }
    .routerview{
      width:67%;
      background: rgba(255, 255, 255,0.2);
      margin-right:1%;
    }
    .viewAds{
      width:32%;
      // height: 10rem;
      float: right;
    }
  }
  .HeaderNav{
    position: fixed;
    top:0;
    z-index: 100;
  }
  .Footer{
    position: fixed;
    bottom:0;
    left: 0;
    right:0;
    margin: auto;
    z-index: 100;
  }
}

</style>
