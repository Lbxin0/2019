<template>
    <div id="container">
        <VideoPanel title="MV精选 >" :adurllist="adurllist1"></VideoPanel>
        <pannel-t  title='MV排行推荐'>
            <VideoPanel title="MV推荐 >" :adurllist="adurllist2"></VideoPanel>
        </pannel-t>
        <pannel-t  title='影视原声MV推荐'>
            <VideoPanel title="原声MV >" :adurllist="adurllist3"></VideoPanel>
        </pannel-t>
    </div>
</template>
<script>
import axios from 'axios'
import VideoPanel from './videopanel'
import pannelT from './pannelT'
export default {
    components:{
        VideoPanel,
        pannelT
    },
    data() {
        return {
            adurllist1:[],
            adurllist2:[],
            adurllist3:[]
        }
    },
    created() {
        // axios.get('https://kuaiyinshi.com/api/kuai-shou/recommend/?callback=showData&_=1554037434547').then((res)=>{
        //     console.log("88888")
        // })
    },
    mounted() {
        axios.get("/top/mv?limit=12").then(res=>{
            this.adurllist1=res.data.data.slice(0,6);
            this.adurllist2=res.data.data.slice(6)
            // console.log(this.adurllist1)
        }).catch(err=>{
            console.log(err);
        });
         axios.get("/search?keywords=古装原声&type=1004").then(res=>{
            this.adurllist3=res.data.result.mvs;
            console.log(res.data.result)
        }).catch(err=>{
            console.log(err);
        });
        axios.get('/top/mv').then(function(res){
         this.adurllist=res.data.data.slice(0,6);
        //  console.log(this.adurllist);
         this.userid=this.adurllist.artists;
         }).catch(function(err){
            // alert(err);
         });
    },
}

</script>
<style lang="less" scoped>
#container{
    color:#666;
    padding-bottom:5rem;
}
</style>
