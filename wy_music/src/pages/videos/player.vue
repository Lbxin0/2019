<template>
        <div class="player" v-if="this.$store.state.videoplay">
            <div  class="close" @click="closeplay()">关闭播放</div>
            <div ref="myVideos" class="myVideos" style="overflow:hidden;padding-bottom:20px;position:relative;background:#ccc">
                <p class="videoitems"> {{videoitem.artistName}} --- {{videoitem.name}}</p>
                
                <video   :src="videosrc" autoplay controls></video>
            </div>
            <div class="commentOwn">
                <p>评论  <span> 共{{$store.state.commentitem.length}}条评论</span></p>
                <div class="commentitem">
                    <div class="userimg">
                        <img src="http://p3.music.126.net/pz63MAVf8GYk1Yru10iTFQ==/109951163834784962.jpg?param=50y50" alt="">
                    </div>
                    <div class="content">
                        <!-- <img src="../../assets/icon/row.png" alt=""> -->
                        <textarea name="" id="" cols="5" rows="3" placeholder="评论"></textarea>
                        <!-- <p>140 <input type="button" @click="sendconent()" value="评论"></p> -->
                    </div>
                </div>
            </div>
            <div class="container" style="height:200px;overflow-y: scroll;border-top:1px solid #000">
                <div class="comment" v-for="(item,index) in $store.state.commentitem" :key="index">
                    <div class="hdinfo">
                        <img :src="item.user.avatarUrl" alt="">
                        <h3>{{item.user.nickname}}</h3>
                    </div>
                    <div class="commentitem">
                        <p>{{item.content}}</p>
                    </div>
                    <div class="evaluate">
                        <div class="timer">{{item.time | timer}}</div>
                        <div class="aggree" @click="aggree(index)"><img src="../../assets/icon/zan.png" alt=""> <span>{{item.likedCount}}</span> </div>
                        <h5>回复</h5>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

export default {
    components:{
    },
    props:{
        // videoplay:{
        //     default:false
        // },
        videoitem:{
        },
        videosrc:{
            default:''
        },
        commentitem:{
            default:[]
        },
        // urlid:{
        //     default:''
        // },
        userid:{
            default:''
        },
    }
    ,
    data() {
        return {
            atype:0,
            // videoplay:false,
            Dvideosrc:this.$store.state.videoSrc
        }
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
    methods: {
        sendconent(){
            let that=this;
            axios.get(`/comment?t=1&type=1&id=1337928875&content=test Lbxin`).then(function(res){
            console.log(res);
            // alert(res)
        }).catch(function(err){
            console.log(JSON.stringify(err));
        })
        },
        aggree(index){
            let that=this;
            that.atype = (that.atype==0) ? 1:0;
            // alert(that.atype);
            axios.get(`/comment/like?id=${that.userid}&cid=${that.commentitem[index].user.userId}&t=1&type=2`).then(res=>{
            // that.videoplay=true;
            that.videoitem=res.data.data;
            // that.videosrc=res.data.data.brs[240];
            console.log('*******//////////**********');
            
            console.log(res);
            
            
        }).catch(
            err=>{
                console.log(err);
            }
        );
        },
        closeplay(){
            let that =this;
            // that.videoplay=false;
            that.Dvideosrc='';
            // that.urlid='';  
            // that.$refs.search.value='';
            // that.$store.state.hotsearch=''; 
            that.$store.state.MvId=''; 
            that.$store.state.videoSrc=''; 
            that.$store.state.commentitem="",
            // that.$emit('closeplay',true);
            that.$store.state.videoplay=false;
            that.$store.state.MvId='';
        },
    },
}
</script>
<style lang="less" scoped>
        .player{
        width: 100%;
        height: calc(100vh - 100px);
        // line-height: calc(100vh - 100px);
        height: 100%;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        background: #ccc;
        .myVideos{
            width:100vw;
            overflow: hidden;
        }
        .commentOwn{
            width: 100%;
            background: #ccc;
            // border:1px solid red; 
            text-align: left;
            p{
                height: 35px;
                line-height: 35px;
                font-size: 18px;
                border-bottom:2px solid rgb(194, 12, 12); 
                span{
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .commentitem{
                width: 100%;
                padding: 5px 8px;
                position: relative;
                text-align: center;
                .userimg{
                    display: inline-block;
                    width: 15%;
                    height: 45px;
                    img{
                        height: 100%;
                    }
                }
                .content{
                    display: inline-block;
                    width: 65%;
                    position: relative;
                    overflow: hidden;
                    padding: 0 30px;
                    // img{
                        
                    //     transform: rotate(90deg);
                    //     z-index:-1;
                    // }
                    textarea{
                        z-index: 100;
                        position: relative;
                        width:100%;
                    }
                    p{
                        width: 100%;
                        text-align: right;
                    }
                    &:before{
                        content:url(../../assets/icon/row.png);
                        background-size: contain;
                        position: absolute;
                        left: -0;
                        top: -10px;
                        transform: rotate(90deg);
                       
                     }
                }
            }
        }
        .comment{
            width: 90%;
            margin: 0 auto;
            height:140px;
            overflow-y: scroll;
            border-left: 1px dashed red;
            border-right: 1px dashed red;
            border-bottom: 1px solid #fff;
            .evaluate{
                width: 100%;
                height: 30px;
                line-height: 30px;
                display: flex;
                text-align: center;
                >div{
                    display: inline-block;
                    flex: 1
                }
                .timer{
                    flex: 2
                }
                h5{
                    flex: 1;
                    text-align: center;
                }
                .aggree{
                    display: flex;
                    img{
                        width: 30px;
                    }
                    >span{
                        flex: 3;
                        text-align: left;
                    }
                }
            }
            .commentitem{
                // width: 100%;
                height: 80px;
                padding: 0 10px;
                overflow-y: scroll;
                p{
                    height: 25px;
                    line-height: 25px;
                    text-align: left;
                    // margin-left: 55px;
                }
            }
            .hdinfo{
                width: 100%;
                height: 30px;
                padding: 0 10px;
                img{
                    height: 30px;
                    display:block;
                    float: left;
                    border-radius: 50%;
                    margin-right: 10px;
                }
                h3{
                    font-size: 16px;
                    height: 30px;
                    line-height: 30px;
                    float: left;
                    color: red;;
                }
            }
        }
        .videoitems{
            // position: absolute;
            // top: 40px;
            left: 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            background: #ccc;
        }
        .close{
            position: absolute;
            top: 1rem;
            right: 0px;
            width: 65px;
            height: 25px;
            line-height: 25px;
            background: #bbb;
            color: #fff;
            font-size: 16px;
            z-index: 500;
            animation: fadein 2s linear infinite alternate;
            // animation:fadein 5s infinite;
        }
            @keyframes fadein {
                from{
                    opacity: 1;
                    color: rgba(255, 253, 253,.6);
                }
                to{
                    opacity: 0.2;
                    color: red;
                }
            }
        video{
            width: 100%;
            float: left;
            // position: absolute;
            // top: 15%;
            // transform: translateY(-50%);
            // left: 50%;
            // transform: translateX(-50%);
        }
    }
</style>
