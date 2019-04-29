<template>
    <div class="container">
        <Player @closeplay='closeplay' :videoplay='videoplay' :videoitem='videoitem' :videosrc='videosrc' :commentitem='$store.state.commentitem' :urlid='urlid' :userid='userid'></Player>
        <div v-show="videoplaystates">
            <div class="search_advice_item" v-show="!$store.state.hotsearch" >
                <div class="searchadvice">
            <h3 class="title">热门搜索 </h3>
            <ul>
                <li v-for="(item,index) in pophotsearch" :key="index" @click="emithistory(item.first)">{{item.first}}<i v-if="item.iconType==1"></i></li>
            </ul>
            </div>
            <div class="searchhistory">
                    <h3 class="title">搜索历史 </h3>
                    <ul>
                        <li v-for="(item,index) in $store.state.popsearchhistory" :key="index" @click="emithistory(item)">{{item}}</li>
                        <!-- <li v-for="(item,index) in popsearchhistory" :key="index" @click="emithistory(item)">{{item}}</li> -->
                    </ul>
                </div>
            </div>
        
        <div class="searchitem" v-show="$store.state.hotsearch">
            <p class="hotsearch">搜索内容 -- {{$store.state.hotsearch}}</p>
            <div class="searchnav">
                <ul ref="searchnavul">
                    <li @click="type=item.type" ref="searchnavli" v-for="(item,index) in tabList" :key="index">
                        <router-link to="/find">{{item.label}}</router-link>
                        </li>
                </ul>
                
            </div>
            <div class="searchlist">{{type}}
                    <ul>
                    <li>
                        <div class="video" >
                            <div class="videolist" v-for="(item,index) in searchlist" :key="index">
                                <div v-if="item.cover" @click="openvideo(item.id,item.artists[0].id)">
                                    <img :src="item.cover" alt="" >
                                </div>
                                <div  v-else-if="item.img1v1Url">
                                    <img :src="item.img1v1Url" alt="">
                                </div>
                                <div  v-else-if="item.avatarUrl">
                                    <img :src="item.avatarUrl" alt="">
                                </div>
                                <div  v-else-if="item.picUrl">
                                    <img :src="item.picUrl" alt="">
                                </div>
                                <div  v-else-if="item.coverImgUrl">
                                    <img :src="item.coverImgUrl" alt="">
                                </div>
                                    <div  v-else>
                                    <img src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg" alt="">
                                </div>
                                
                                    <p class="txtover"  v-if="item.name">{{item.name}}
                                        <span v-if="item.albumSize!=0&&type==100" class="artistslogin">已入驻</span>
                                    </p>
                                    <p class="txtover" v-else-if="item.nickname">{{item.nickname}}</p>
                                    <p class="txtover" v-if="item.artistName" style="color:#797979">{{item.artistName}}</p>
                                    <p class="txtover" v-else-if="item.signature">{{item.signature}}</p>
                                    <p class="txtover" v-else-if="item.artist">{{item.artist.name}} 
                                        <span v-if="item.publishTime" style="font-size:12px;">-- {{item.publishTime|timer}}</span> 
                                    </p>
                                    

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            </div> 
        </div>
    </div>
    
</template>
<script>
import axios from 'axios'
import Player from '../pages/videos/player'
export default {
    props:{
        pophotsearch:{
            type:Array,
            required: true
        },
        popsearchhistory:{
            type:Array,
            required: true
        },
        hotsearch:{
            type:String,
            required:true
        }
    },
    components:{
        Player
    },
    methods: {
        emithistory(info){
            this.$emit('emithistory',info)
            
        },
        closeplay(state){
            // let that=this;
            this.videoplaystates=true;
            // window.reload();
            
        },
        openvideo(urlid,userid){
            let that =this;
            // that.videoplaystates=false;
            // that.videoplay=true;
            // console.log(urlid+"55555555");
            that.urlid=urlid;  
            that.$store.state.videoplay=true;
            that.$store.state.MvId=urlid;
            axios.get(`/mv/detail?mvid=${urlid}`).then(res=>{
                that.videoplay=true;
                that.videoitem=res.data.data;
                that.videosrc=res.data.data.brs[240]
                // console.log(JSON.stringify(res.data.data.id)+"=========8888888888//////////////");
                that.userid=res.data.data.id;
                // alert(that.userid)
            }).catch(
                err=>{
                    console.log(err);
                }
            );
            axios.get(`comment/mv?id=${urlid}`).then(res=>{
                // console.log(JSON.stringify(res.data.hotComments)+"=====================");
                // that.videoplay=true;
                // that.videoitem=res.data.data;
                // that.videosrc=res.data.data.brs[240]
                that.$store.state.commentitem=res.data.hotComments;
                
                }).catch(
                    err=>{
                        console.log(err);
                });
                // let vheight=document.querySelector(".myVideos").style;
                // console.log(JSON.stringify(vheight)+"-----===========------");
                
            }
    },
    created() {
          axios.get(`/search?keywords=${this.$store.state.hotsearch}&type=1004`).then(res=>{
                console.log(JSON.stringify(res.data)+"-----------------/search?keywords");
                // this.hotsearch=val;
                this.searchlist=res.data.result.mvs;
                 
            }).catch(err=>{
                console.log(JSON.stringify(err));
            })
    },
    filters: {
        timer: function(obj){
            var date =  new Date(obj);
            var y = 1900+date.getYear();
            var m = "0"+(date.getMonth()+1);
            var d = "0"+date.getDate();
            return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
        }
    },
    watch: {
        // videoplay(val){
        //     this.videoplay=videoplay;
        // },
        hotsearch(val){
            // 搜索函式定义
            axios.get(`/search?keywords=${val}&type=${this.type}`).then(res=>{
                // console.log(JSON.stringify(res.data)+"-----------------/search?keywords");
                this.hotsearch=val;
                this.$store.state.hotsearch=val;
                  if(this.type==1004){
                    this.searchlist=res.data.result.mvs;
                  }else if(this.type==100){
                    this.searchlist=res.data.result.artists;
                  }else if(this.type==1009){
                    this.searchlist=res.data.result.djRadios;
                  }else if(this.type==1000){
                    this.searchlist=res.data.result.playlists;
                  }else if(this.type==1){
                    this.searchlist=res.data.result.songs;
                  }else if(this.type==1002){
                    this.searchlist=res.data.result.userprofiles;
                  }else if(this.type==10){
                    this.searchlist=res.data.result.albums;
                  }
            }).catch(err=>{
                console.log(JSON.stringify(err));
            })
            // console.log(val);
                
            },
        type(val){
            axios.get(`/search?keywords=${this.$store.state.hotsearch}&type=${val}`).then(res=>{
                console.log(JSON.stringify(res.data.result)+"-----------------/search?keywords");
                   if(this.type==1004){
                    this.searchlist=res.data.result.mvs;
                  }else if(this.type==100){
                    this.searchlist=res.data.result.artists;
                  }else if(this.type==1009){
                    this.searchlist=res.data.result.djRadios;
                  }else if(this.type==1000){
                    this.searchlist=res.data.result.playlists;
                  }else if(this.type==1){
                    this.searchlist=res.data.result.songs;
                  }else if(this.type==1002){
                    this.searchlist=res.data.result.userprofiles;
                  }else if(this.type==10){
                    this.searchlist=res.data.result.albums;
                  }
            }).catch(err=>{
                console.log(JSON.stringify(err));
            })
            console.log(val);
                
        }
    },
    mounted() {
        // console.log(JSON.stringify(this.$refs.searchnavli[0].offsetWidth*this.$refs.searchnavli.length)+"--------this.$refs.searchnavul.style.width");
        // let ulwidth=this.$refs.searchnavli[0].offsetWidth*this.$refs.searchnavli.length;
        let ulwidth=5*this.$refs.searchnavli.length;
        // console.log(this.$refs.searchnavli.length+"----------length--==--ulwidth");
        this.$refs.searchnavul.style.width=ulwidth+"rem";
        // console.log(this.$refs.searchnavul.offsetWidth+"----------ulwidth--==--ulwidth");
        
    },
    data() {
        return {
            videoplay:false,
            videoplaystates:true,
            videoitem:{},
            videosrc:'',
            // commentitem:[],
            urlid:'',
            userid:'',

            // hotsearch:'',
            searchlist:"",
            // searchhistory:['邓紫棋','起风了','华晨宇'],
            type:1004, // type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲 10: 专辑 100: 歌手 1000: 歌单 1002: 用户 1004: MV 1006: 歌词 1009: 电台
            tabList: [
                {
                    label:'视频',
                    name:'mv',
                    type:1004,
                },
                {
                    label:'单曲',
                    name:'single',
                    type:1,
                },{
                    label:'歌手',
                    name:'singer',
                    type:100,
                },{
                    label:'专辑',
                    name:'album',
                    type:10,
                },{
                    label:'歌单',
                    name:'songs',
                    type:1000,
                },{
                    label:'主播电台',
                    name:'audio',
                    type:1009,
                },{
                    label:'用户',
                    name:'user',
                    type:1002,
                }
            ]
        }
    },
}
</script>
<style lang="less" scoped>
@media screen and (max-width: 320px){
    .video{
        height: 100%;
        text-align: left;
        .videolist{
            display: inline-block;
            width: 49%;
            overflow: hidden;
            margin-left: 0.1rem;
            img{
                width: 100%;
            }
            .txtover{
                font-size: 13px!important;
            }
        }
    }
}
    @import '../assets/css/var';
    @import '../assets/css/reset';
    .container{
        width: 100%;
        background: @search_bg_coloe!important;
        color: @search_txt_colo;
        // padding: 0 0.5rem;
        box-sizing: border-box;
        // .searchadvice{
        //     border-bottom: 1px solid @border_sm_color;
        // }
        .searchitem{
            width: 100%;
            height: 2rem;
            line-height: 2rem;
            // background: rgba(204, 204, 204,.6);
            >p{
                text-align: left;
                padding-left: 0.5rem;
                color: @search_text_color;
                border-bottom: 1px solid @border_sm_color;
            }
            .searchlist{
                width: 100%;
                ul{
                    li{
                        width: 100vw;
                        display: inline-block;
                        .video{
                            height: auto;
                            text-align: left;
                            .videolist{
                                display: inline-block;
                                width: 49%;
                                overflow: hidden;
                                margin-left: 0.1rem;
                                img{
                                    width: 100%;
                                    border-radius: 1rem!important;
                                }
                                .txtover{
                                    font-size: 16px;
                                    .artistslogin{
                                        font-size: 12px;
                                        float: right;
                                        margin-right: 0.5rem;
                                        width: 3.5rem;
                                        text-align: right;
                                        background: url('../assets/icon/Settledin.png') left no-repeat / 80% 80%;
                                        background-size:30%;
                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .searchnav{
                overflow-x: scroll;
                &::-webkit-scrollbar {display:none}
                ul{
                    // width: 170%;
                    overflow: auto;
                    li{
                        display: inline-block;
                        background:pink;
                        // padding: 0.2rem 0.5rem;
                        width: 5rem;
                        float: left;
                    }
                }
            }
        }
        .search_advice_item{
            .title{
                width: 100%;
                height: 2rem;
                line-height: 2rem;
                font-size: @font_size_small;
                text-align: left;
            }
            ul{
                width: 100%;
                font-size: @font_size_small;
                text-align: left;
                li{
                    display: inline-block;
                    padding:  0.3rem 0.6rem;
                    border-radius: 10rem;
                    margin:0.2rem 0.5rem 0 0;
                    background: @searchitem_bg_coloe;
                    i{
                        display: inline-block;
                        width: 0.8rem;
                        height: 0.8rem;
                        background: url('../assets/icon/hot.png') center no-repeat / 100% 100%;
                        background-size:contain;
                        
                    }
                }
            }
        }
        
    }
</style>
