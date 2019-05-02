<template>
 <!-- @someSwiperEvent="callback" -->
 <div class="container" style="background:red;">
    <div class="container" v-if="singertru">
        <div class="singeritem">
            <div class="singerinfo">
                <div class="colse" @click="closesinger()"></div>
                <h4>{{sonitem.artist.name}}</h4>
                <img :src="sonitem.artist.img1v1Url" alt="">
            </div>
            <div class="infoitem" ref="infoitem" style="height: 3rem;">
                <p>{{sonitem.artist.briefDesc}}</p>
                <i @click="openinfoitem()" ref="openinfoI"></i>
            </div>
        </div>
        <div class="songlist" v-for="(item,index) in sonitem.hotSongs" :key="index" @click="sonplay(item.id,item)">
            <!-- <span class="singername">{{item.artist}}</span> -->
            <span class="songname txtover" >{{item.name}}</span>
            <!-- <span class="songtime">3:03</span> -->
            <!-- <audio ref="audioplay" style="opacity:0;z-index:-1" src="" controls="controls" autoplay></audio> -->
        </div>
    </div>

    <div class="hotsinger" v-else="">
        <div class="header">热门歌手 ></div>
        <swiper :options="swiperOption" ref="mySwiper" class="swiperOwns" style="">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in toBanner" :key="index" class="slideOwn" style="width:100%">
            <a href="javascript:;" @click="opensinger(item.id,index)">
                <img :src="item.img1v1Url" alt="">
                <h6>{{item.name}}</h6>
            </a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
 </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import 'swiper/dist/css/swiper.css'
    import axios from 'axios'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name:"banner",
            components: {
            swiper,
            swiperSlide
        },
        methods: {
            openinfoitem(){
                let that=this;
                // alert(that.$refs.infoitem.style.height)
                that.$refs.infoitem.style.height=(that.$refs.infoitem.style.height=='100%')?'3rem':'100%'
                if(that.$refs.infoitem.style.height=='100%'){
                    that.$refs.openinfoI.style.transform = "rotate(180deg)"
                }else{
                    that.$refs.openinfoI.style.transform = "rotate(0)"
                }
            },
            closesinger(){
                let that=this;
                // that.toBanner='';
                that.singertru=false;
                // that.$refs.audioplay.src=''
            },
            sonplay(sonid,item){
                let that=this;
                // alert(sonid);
                // axios.get(`https://music.163.com/song/media/outer/url?id=${sonid}.mp3 `).then(res=>{
                //     console.log(JSON.stringify(res));
                // }).catch(err=>{
                //     console.log(JSON.stringify(err));
                // })
                // let aa="https://music.163.com/song/media/outer/url?id="+`${that.$store.state.ActiveId}`+".mp3";
                let aa="https://music.163.com/song/media/outer/url?id="+`${sonid}`+".mp3";
                // that.$refs.audioplay.src=aa;
                that.sonurl=aa;
                // console.log(sonid,item);
                this.$store.commit('SonIdPush',sonid)
                that.$emit('sendsonurl',aa,that.sonitem,item)
                // window.location.href=aa
            },
            opensinger(sonid){
                let that=this;
                // axios.get(`/artists?id=${that.$store.state.ActiveId}`).then(res=>{
                axios.get(`/artists?id=${sonid}`).then(res=>{
                    //console.log(JSON.stringify(res.data));
                    that.sonitem=res.data;
                    that.singertru=true;
                }).catch(err=>{
                    console.log(JSON.stringify(err));
                })
            }
        },
        data () {
           return{
                sonitem:'',
                sonurl:'',
                singertru:false,
                // toBanner:[],
                  swiperOption: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
           }
        },
        props:['toBanner'],
        created() {
            // console.log(toBanner+"==========-----------hhhhh");
            
        },
       computed: {
        swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>
<style lang="less" scope>
.txtover{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.container{
    background: #ccc!important;
    // padding-bottom: 85px;
    .container{
    width: 100%;
    .songlist{
        height: 3rem;
        line-height: 3rem;
        padding: 0 10px;
        border-bottom: 1px solid #f4f4f4;
        background: url('../../assets/icon/sonpaused.png') right no-repeat / 100% 100%;
        background-size:contain;
        font-size: 20px;
        .songname{
            float: left;
            margin-left: 2rem;
            width: 50%;
            text-align: left;
        }
        .songtime{
            float: right;
            padding-right: 4rem
        }
        .singername{
            float: left;
        }
    }
    .colse{
    //    float: right;
        right: 1rem;
        width: 5rem;
        height: 5rem;
        position: absolute;
        left: 0;
        background: url('../../assets/icon/close.png') center no-repeat / 100% 100%;
        background-size:contain;
        z-index: 101;
        display: block;
        clear: both;
    }
    .singeritem{
        position: relative;
        font-size: 20px;
        .singerinfo{
            h4{
                width: 100%;
                position: absolute;
                text-align: center;
                font-size: 20px;
                color: #fff;
                padding-top: 0.5rem;
                span{
                    // width: 55px;
                    // float: left;
                    position: absolute;
                    left: 0;
                    width: .85714rem;
                    height: 1.42857rem;
                    // margin-top: .687265rem;
                    // display: inline-block;
                    background: url(http://m.kugou.com/v3/static/images/index/goback_1.png) no-repeat;
                    background-size: 100%;
                }
            }
            img{
                width: 100%;
            }
        }
        .infoitem{
            width: 100%;
            position: relative;
            overflow: hidden;
            border-bottom: 2px solid #f4f4f4;
            p{
                width: 85%;
            }
            i{
                width: 3rem;
                height: 2.8rem;
                display: block;
                position: absolute;
                top: 0;
                right: 0.6rem;
                background: url('../../assets/icon/close_icon.png') center no-repeat / 100% 100%;
                background-size:contain
                
            }
        }

    }
    }
    .header{
        width: 100%;
        text-align: left;
        // padding:0 0 10px 15px;
        padding-bottom: 10px;
        font-size: 1.5rem;
    }
}

.swiperOwns{
    width:96%;
    background:#ccc;
    margin: 0 auto;
    font-size: 1.4rem;
    .slideOwn{
        width: 100%;
        height:100%;
        img{
            width: 100%;
            display: block;
        }
    }
}


</style>
