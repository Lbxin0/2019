<template>
  <div class="hello" style="z-index:-1">
    <!-- <router-view style="position:absolute;top:0;left:0;background:pink"></router-view> -->
    <!-- <router-view v-show="pannelid" @changepannerid='changepannerid($evnet)'></router-view> -->
    <div class="container" v-show="!pannelid">
      <Banner :slidesPerView="1" :bannerurl="banner" :spaceBetween=0></Banner>
    <div class="typeitem">
      <div class="itemlist">
        <p><img src="../assets/icon/FM.png" alt=""></p>
        <span>私人FM</span> 
      </div>
        <div class="itemlist">
        <p><img src="../assets/icon/advice.png" alt=""></p>
        <span>每日推荐</span>
      </div>
        <router-link to="/pannelT" class="itemlist">
        <p><img src="../assets/icon/sonlist.png" alt=""></p>
        <span>歌单</span>
        </router-link>
        <div class="itemlist">
        <p><img src="../assets/icon/play.png" alt="" style="width:55%"></p>
        <span>排行榜</span>
      </div>
    </div>
    <pannelt ad-url="/personalized" adurl-header='推荐歌单 >'></pannelt>
    <pannelt style="height:100%;z-index:-1;"  ad-url="/personalized/privatecontent" adurl-header='精品歌单 >'></pannelt>
        <!-- <p style="height:2rem;line-height:2rem;color:red">-----555555{{pannelid}}</p> -->
    <pannelt style="height:100%;z-index:-1;"  ad-url="/top/album" adurl-header='新碟  |  新歌'></pannelt>
    </div>
        
  </div>
</template>

<script>
import Banner from './BannerComponent.vue'
import Pannelt from './pannelT.vue'
import axios from 'axios'

export default {
  components: {
    Banner,
    Pannelt,
    // adviceson:'/personalized'
  },
  name: 'HelloWorld',
  props: {
  },
  data(){
    return{
      advicelist:[],
      pannelid:false,
      banner:'/banner'
    }
  },
  mounted() {
    axios.get("/top/album?offset=0&limit=30").then(res=>{
      // console.log(JSON.stringify(res)+"top/album");
    }).catch(err=>{
      console.log(err);
    })
  },
  methods: {
    changepannerid(pannelid){
      console.log(pannelid);
      this.pannelid=pannelid;
      
    }
  },
  created(){
    let that=this;
    // that.pannelid=that.$route.params.pannelid;
    axios.get('/personalized').then(function(res){
    // console.log(JSON.stringify(res.data.result.slice(0,6))+"====================================");
    that.advicelist=res.data.result.slice(0,6);
    }).catch(function(err){
        alert("err")
        console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" SCOPE>
  .typeitem{
    width: 100%;
    // height: 1.5rem;
    display: flex;
    padding: 5px 0;
    border-bottom: 1px solid rgb(231, 231, 231);
    color:#000;
    .itemlist{
      flex: 1;
      font-size: 14px;
      padding-bottom: 20px;
      p{
        display: block;
        width: 60%;
        height: 90%;
        margin: 0 auto;
        background-color: red;
        border-radius: 50% 50%;
        img{
          width: 60%;
          transform: translateY(27%)
        }
      }
    }
  }
</style>
