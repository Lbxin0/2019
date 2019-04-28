<template>
    <div class="contaier">
        <Player :closeplay='videoplay' :videoitem='videoitem' :videosrc='this.$store.state.videoSrc' :commentitem='commentitem' :urlid='urlid' :userid='userid'></Player>
        <!-- <div class="header">{{adurlHeader}}</div> -->
        <div class="header" >MV精选 ></div>
        <div class="pannelitem" v-for="item in adurllist" :key="item.id" @click="openvideo(item.id,item.artists[0].id)">
            <img :src="item.cover" alt="">
            <!-- {{item.artists[0].id}} -->
            <p class="txtover">{{item.name}}</p>
            <p class="artistName" style="color:#797979">{{item.artistName}}</p>
        </div>
    </div>

</template>
<script>
import axios from 'axios'
import Player from './player'

export default {
    data(){
        return{
            videoplay:false,
            videoitem:{},
            // videosrc:that.$store.state.videoSrc,
            commentitem:[],
            urlid:'',
            userid:'',

            adurllist:[],
            adUrls:'',
            DadurlHeader:this.adurlHeader,
        }
    },
    mounted() {
    },
     components:{
        Player
    },
    methods:{

        openvideo(urlid,userid){
            let that =this;
            that.$store.state.videoplay=true;
            that.$store.state.openvideo=urlid;
            alert(that.$store.state.openvideo)
            // console.log(urlid+"55555555");
            that.urlid=urlid;
            axios.get(`/mv/detail?mvid=${that.$store.state.openvideo}`).then(res=>{
                that.videoplay=true;
                that.videoitem=res.data.data;
                // that.videosrc=res.data.data.brs[240];
                that.$store.state.videoSrc=res.data.data.brs[240];
                // console.log(JSON.stringify(res.data.data.id)+"=========8888888888//////////////");
                that.userid=res.data.data.id;
                // alert(that.userid)
            }).catch(
                err=>{
                    console.log(err);
                }
            );
            axios.get(`comment/mv?id=${that.$store.state.openvideo}`).then(res=>{
                console.log(JSON.stringify(res.data.hotComments)+"=====================");
                // that.videoplay=true;
                // that.videoitem=res.data.data;
                // that.videosrc=res.data.data.brs[240]
                that.commentitem=res.data.hotComments
                }).catch(
                    err=>{
                        console.log(err);
                });
                // let vheight=document.querySelector(".myVideos").style;
                // console.log(JSON.stringify(vheight)+"-----===========------");
                
            }
    },
    props:['adUrl','adurlHeader'],
    created() {
        let that=this;
        
        axios.get('/login/cellphone?phone=15101366030&password=Lbxin0516').then(function(res){
            console.log(res.status);
            // alert(res)
        }).catch(function(err){
            console.log(err);
        })
    
        axios.get('/top/mv').then(function(res){
            //console.log(JSON.stringify(res.data.data)+"--------------------");
        //  console.log(JSON.stringify(res)+"====================================");
         that.adurllist=res.data.data.slice(0,6);
         that.userid=that.adurllist.artists;
        //  console.log(that.userid);
         
        //  console.log(JSON.stringify(that.adurllist)+"--------==========------------=========");
        //  console.log(JSON.stringify(that.userid)+"--------==========------------=========");
         }).catch(function(err){
            // alert(err);
         });
         
    },
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    box-sizing: border-box;
}
.txtover{
    width:95%;
    margin:0 auto;
    overflow: hidden;
    text-overflow:ellipsis;//文本溢出显示省略号
    // display: -webkit-box;
    // white-space: nowrap;
    // -webkit-box-orient: vertical;
    color:rgb(121, 121, 121);
}
.artistName{
    width:95%;
    margin:0 auto;
    overflow: hidden;
    text-overflow:ellipsis;
}
.contaier{
    width: 100%;
    box-sizing: border-box;
    // margin-top: 10px;
    // display: flex;
    // flex-wrap: wrap;
    // flex-direction: row;
   
    .header{
        width: 100%;
        text-align: left;
        // padding:0 0 10px 15px;
        padding-bottom: 10px;
    }
    .pannelitem{
        // flex: 1;
        width: 49%;
        display: inline-block;
        margin-right: 2px;
        &:last-child{
        margin-right: 0px;
        }
        img{
            width: 100%;
            border-radius: 3px;
        }
        p{
            font-size: 12px;
            height: 22px;
            &:nth-child(3){
            font-size: 11px;
            color: #bbb
            }
        }
    }
}
</style>
