<template>
  <div class="container">
    <div class="RankingHeader" :style="{backgroundImage:'url('+($route.query.RankingData.creator.avatarUrl)+')',backgroundSize:'contain'}">
        <div class="RankingHeaderName">{{$route.query.RankingData.name}}</div>
        <div class="RankingHeaderTime">最近更新：{{new Date($route.query.RankingData.createTime).getMonth()+1}}月{{new Date($route.query.RankingData.createTime).getDate()}}日</div>
    </div>
    <div class="RankingList">
        <div class="ListHeader">播放全部(共{{$route.query.RankingData.tracks.length}}首)</div>
        <div class="ListItem" v-for="(item,index) in $route.query.RankingData.tracks" :key="item.name">
            <div class="ListIndex">{{index+1}}</div>
            <div class="LIstInfo">
                <div class="InfoName">{{item.name}}</div>
                <div class="InfoSinger" v-if="item.alia[0]">{{item.alia[0]}}</div>
                <div class="InfoSinger" v-else>{{item.ar[0].name}}</div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    
  },
  data() {
      return {
         DListItem:[],
         dd:"8888"
      }
  },
  watch: {
      
  },
  mounted() {
      let that=this;
      console.log(that.$route.query.RankingData);
      axios.get(`/top/list?idx=${that.$route.params.id}`).then(res=>{
          that.DListItem=res.data.tracks;
          console.log(that.DListItem);
          console.log(res.data.tracks);
      }).catch(err=>{
          console.log(err);
          
      })
  },
  
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  .RankingHeader{
      width:100vw;
      height:40rem;
      border:1px solid red;
      position: relative;
      &::before{
          content: " ";
          display: block;
          position: absolute;
          width:100%;
          height:100%;
          background:rgba(0,0,0,.3);
      }
      .RankingHeaderName,
      .RankingHeaderTime{
          height:4rem;
          line-height:4rem;
          font-size: 1.8rem;
          position: absolute;
          bottom:8rem;
          left:3rem;
          letter-spacing: 1px;
          font-style: italic;
      }
      .RankingHeaderTime{
          bottom:5rem;
          font-size: 1.6rem;
          font-style: normal;
      }
  }
  .RankingList{
      width:100vw;
      background:#f2f3f4;
      color:#2e3030;
    //   height:45rem;
      position: relative;
      top:-4rem;
      border-radius:2rem 2rem 0  0;
      font-size: 1.4rem;
      .ListHeader{
          height:4rem;
          line-height:4rem;
          border-bottom:1px solid #fff;
      }
      .ListItem{
          height:5rem;
          line-height:5rem;
          display:flex;
        //   color:#2e3030;
          .ListIndex{
              flex:1;
          }
          .LIstInfo{
              flex:5;
              border:1px solid #fff;
              text-align: left;
              >div{
                  width:90%;
                  overflow: hidden;
              }
              .InfoName{
                  height:3rem;
                  line-height:3rem;
                  font-size: 1.8rem;
              }
              .InfoSinger{
                  height:2rem;
                  line-height:2rem;
                  color:#757575
              }
          }
      }
  }
}
</style>
