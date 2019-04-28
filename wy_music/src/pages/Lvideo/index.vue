
<template>
    <div class="container">
      88888888 <br>
      
        {{$store.state.sonIndex}}****////****
        <!-- <navigation :pages="pages" :current.sync="pageNo" @navpage="msgListView"></navigation> -->

<!-- 抖音：https://kuaiyinshi.com/api/hot/videos/?source=kuai-shou&page=2&st=month&callback=showData&_=1552051022782 -->
<!-- 美拍：https://kuaiyinshi.com/api/hot/videos/?source=mei-pai&page=1&st=month&callback=showData&_=1552051450954 -->
<!-- 小咖秀：http://www.xiaokaxiu.com/video/web/get_splendid_video?limit=30&page=7 -->

    </div>
</template>
<script>
// import axios from 'axios'
// import { mapState } from 'vuex'
export default {
    components:{
    },
    data() {
        return {
            size:10
        }
    },
    created() {
        // let url='https://kuaiyinshi.com/api/kuai-shou/recommend/?callback=showData&_=1554043069638';
        // axios.get(url,{
        //         'Content-Type': 'application/json;charset=UTF-8',
        //         'charset':'UTF-8'
        //     }
        //     ).then(function(res){
        //     console.log(res.showData);
            
        // }).catch(function(err){
        //     console.log(err);
            
        // })
    },
    mounted() {
     
    },
    methods: {
        pageFn(val){
            console.log(val);
            
        }
    },
}
</script>
<style lang="less" scoped>
.container{
  .singfind {
    background: url("../../assets/icon/phone.png") center no-repeat /
      100% 100%;
    background-size: 45%;
    height: 100%;
  }
  .searchson {
    height: 100%;
    input {
      border: none;
      width: 95%;
      height: 90%;
      border-radius: 1.2rem;
      text-align: center;
      outline: none;
      padding: 0 0.4rem;
      box-sizing: border-box;
      background: #ebecec url("../../assets/icon/search.png") left
        no-repeat / 100% 100%;
      background-size: contain;
    }
  }
}
</style>
