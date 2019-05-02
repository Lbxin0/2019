<template>
  <div id="app">
    <Loading v-if="this.$store.state.loading" class="loading"></Loading>
     <router-view name='pannellist'></router-view>
  <!-- <div id="app" @touchstart.stop.prevent="touchstart" @touchend.stop.prevent="touchend"> -->
    <div class="playifram" v-show="iframeState" :style="{backgroundImage:'url(' + soninfoal.picUrl + ')'}">
      <div class="colse" @click="closesinger()"></div>
      <div class="songname" v-if="iframeState">{{sonins.name}}</div>
      <div class="singername" v-if="iframeState">—— {{sonins.ar[0].name}}—— </div>
      <!-- <div class="singername" v-if="iframeState">{{sonins.alia}}</div> -->
      <div :class="playbg">
        <img :src="soninfoal.picUrl" alt="" v-if="iframeState">
      </div>
      <div class="audiocontrol">
        <div class="progresslyric">
          <!-- <div class="lyric">
            <lyric :lyric="sonlyric" :nolyric="nolyric"></lyric>
          </div> -->
          <div class="Progress">
            <div class="runtime">0{{parseInt(currentTime/60)}} : {{currentTime%60}}</div>
            <!-- <Progress class="progressbar" :percent="percentMusic" :percentProgress="currentProgress"
                @percentChange="progressMusic"></Progress> -->
                <Progress   class="progressbar" :percent="currentTime" :percentProgress="currentTime"
                   @percentChange="progressMusic($event)"></Progress>
                   <!--  -->
            <div class="alltime">0{{parseInt(stime/60)}} : {{stime%60}}</div>
          </div>
          
        </div>
        <div class="playcontrol">
          <span @click="AutoPlay()"> <i :class="autoplay"></i> </span>
          <span @click="prevtson()"> <i></i> </span>
          <span @click="playson()" ref="sonplay"> <i :class="playControl"></i> </span>
          <span @click="nextson()"> <i></i> </span>
          <span> <i></i> </span>
        </div>
        <div class="soncontrol">
          <span @click="Nocollect()"> <i :class="nocollect"></i> </span>
          <span> <i></i> </span>
          <span> <i></i> </span>
          <span @click="Muted()" > <i ref="Muted" :class="novolice"></i> </span>
          <span> <i></i> </span>
        </div>
      </div>
      <audio  :src="audiosrc" ref="audio"></audio>
      <!-- <iframe  id="show-iframe" style="background:#ccc"  frameborder=0 name="showHere" scrolling=auto src="https://music.163.com/song/media/outer/url?id=405998841.mp3"></iframe> -->
    </div>
    <div class="login" v-if="login==true">
      <div class="content">
          <label for="">注册电话：<input class="tel" type="text" ></label><br><br>
          <label for="">注册密码：<input class="password" type="password" ></label><br><br>
          <label for=""><input class="submits" type="submit" @click="submit()"></label><br><br>
      </div>
    </div>
    <header v-if="$route.path!='/pannelT'" >
      <div class="headerL" @click="login=true" v-if="searchactive"><slot name="headerL" ></slot></div>
      <div class="headerM">
        <div class="inputshadow" @click="searchactive=false" v-if="searchactive"></div>
        <input type="search" ref="search"  @keyup.enter="goSearch()" name="searchson"  placeholder="搜索歌曲、专辑">
      </div>
        <div class="play" @click="iframeState=!iframeState"  v-if="searchactive"></div>
        <div class="cancel_search" @click="cancelsearch()"  v-if="!searchactive">取消</div>
    </header>
    <Search class="search" @emithistory='emithistory' :pophotsearch='pophotsearch' :hotsearch='hotsearch' :popsearchhistory='popsearchhistory' v-show="!searchactive"></Search>
    <keep-alive  v-if="searchactive">
       <router-view @sendsonurl="receivesonurl(arguments)" v-if="!iframeState"></router-view>
      
    </keep-alive>
    <Footer :iframe-state="iframeState" @changeiframeState="changeiframeState($event)" v-if="!iframeState"></Footer>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
// import progressBar from 'vue-draggable-progressbar'
import Progress from './components/progress.vue'
import Search from './components/search.vue'
import Lyric from './pages/music/lyric.vue'
import Loading from './pages/loading'
import axios from 'axios'
// document.querySelector('.login').style.height=document.documentElement.clientHeight;
export default {
  name: 'app',
  components: {
    Footer,
    Progress,
    Lyric,
    Search,
    Loading
  },
  beforeCreate() {
    this.$store.state.loading=true
  },
  data(){
    return{
      login:false,
      hotsearch:'',
      pophotsearch:[],
      popsearchhistory:['邓紫棋','起风了','华晨宇'],  
      iframeState:false,
      audiosrc:'',
      sonplaylist:[],
      soninfo:'',  //播放时歌曲全部信息
      playpercent:0,   //歌曲播放百分比变量
      currentTime:0,   //audio播放进度量
      sonlyric:'',   //audio歌词
      nolyric:false,  //audio是否显示歌词
      searchactive:true,  //根据输入框判断显影
      soninfoal:'',
      sonins:{},
      soninfoar:'',
      time:'',
      runtime:'',
      stime:'',
      touchstart:0, //移动端滑动事件坐标
      muted:false,   //控制son是否静音
      collect:false,  //是否收藏该音乐
      Dautoplay:true,  //随机播放
    }
  },
  computed: {
    playbg(){
      return this.$store.state.sonplay ? 'playbg playRotate' : 'playbg'
    },
    playControl(){  
      return this.$store.state.sonplay ? 'pausedson' : ' ' 
    },
    novolice(){
      return this.muted?'novolice' : ' ' 
    },
    nocollect(){
      return this.collect?'':'nocollect'
    },
    autoplay(){
      return this.Dautoplay?'':'autoplay'
    },
  },
  mounted() {   ///login?email=xxx@163.com&password=yyy
    // console.log(this.$refs.search+"that.$refs.searchthat.$refs.searchthat.$refs.search");
    // axios.get('/login/cellphone?phone=15101366030&password=Lbxin0516').then(
    axios.get('login?email=2408839057@qq.com&password=YWB131452000').then(
    res=>{
      console.log(res.data.status)
    }
    ).catch(err=>{
      console.log(err)
    })
    this.$store.state.loading=false
  },
  created(){
    
    let that=this;
    
    // that.time=timeToMinute(235505);
    // let hotsearch=[];
    // axios.get('/logout').then(
    //   function(res){
    //     console.log(res);
    //     sessionStorage.removeItem("tel");
    //     that.login=true;
    //   }
    // ).catch(function(err){
    //   console.log(JSON.stringify(err));
    // })
    axios.get('/search/hot').then(res=>{
      // console.log(JSON.stringify(res.data.result.hots));
        this.pophotsearch=res.data.result.hots;
        // for (let index = 0; index < res.data.result.hots.length; index++) {
        //   hotsearch.push(res.data.result.hots[index].first)
        //   // audiosrc
        // }

      
      // let hotsearcharr=arryfor(hotsearch);
      // setInterval(function(){
      //     // console.log(hotsearcharr());
      //     that.hotsearch=hotsearcharr()
      // },5000);
    }).catch(err=>{
      // console.log(JSON.stringify(err));
      console.log(err);
      
    })
    axios.get('/login/status').then(
      function(res){
        // console.log(res);
        that.login=false;
      }
    ).catch(function(err){
      // console.log(JSON.stringify(err));
      // that.login=true;
    })
    // setInterval(function(){
    //   console.log(sessionStorage.getItem("tel")+"-------"+that.login);
    // },3000)
  },
  methods: {
    // touchstart(e){
    //   var that=this;
    //   console.log(e.changedTouches[0])
    //   // if(e.changedTouches[0].clientY)
    //   that.touchstart=e.changedTouches[0]
    // },
    // touchend(e){
    //   let that=this;
    //   console.log(that.touchstart);
    // },
    cancelsearch(){
      let that=this;
      that.searchactive=true,
      // that.hotsearch=''
      that.$refs.search.value='';
      that.$store.state.hotsearch=''; 
      that.$store.state.MvId=''; 
      that.$store.state.videoSrc=''; 
      that.$store.commit('closeVideo'); 
      that.$store.state.videoplay=false;
      // that.$store.state.
      // console.log(that.$refs.search.value);
      
    },
    emithistory(info){
      // console.log(info+"------------");
      this.hotsearch=info;
    },
    goSearch(){
      let hotsearch= this.$refs.search.value
      this.hotsearch=hotsearch;
      if(this.popsearchhistory.indexOf(hotsearch)>-1){
        this.popsearchhistory.push()
        // console.log("///////////////////");
        
      }else{
        this.popsearchhistory.push(hotsearch)
        this.$store.state.popsearchhistory.push(hotsearch)
        
      }
      // console.log(this.popsearchhistory);
      
    },
    // 改变audio播放的接受函式
    // ProgressChange(pencent){
    //   console.log(pencent);
      
    // },
    Nocollect(){
      this.collect=!this.collect;
      
    },

    Muted(){
      let that=this;
      let audio=that.$refs.audio;
      if(audio.muted){
        audio.muted=false;
        that.muted=false;
      }else{
        audio.muted=true;
        that.muted=true;
      }
      // console.log(audio.defaultMuted+'666666666666');
      
    },
     // 单条件单数据筛选
    filterByName(aim, name) {
        // return aim.filter(item => item.id)
        return aim.filter(function(item){
          return item.id==name
        })
    },
    //  音乐时间戳转换为分秒00:00格式
    timeToMinute(times){
      let m,s,time,that=this;
      if(parseInt(times/60000< 10)){
        m="0"+parseInt(times/60000)
      }else{
        m=parseInt(times/60000)
      }
        time=(times%60000);
        s=time.toString().substr(0, 2);
        that.time= m +" : "+ s;
        that.stime=m*60+parseInt(s);
    },
    progressMusic(percent) {
      console.log(percent+"percent==============");
      // this.playpercent=this.stime*percent;
      // alert(typeof(this.stime*percent));
      
      this.$refs.audio.currentTime=this.stime*percent;
      this.$refs.audio.play();
      // console.log(this.$refs.audio.currentTime+'======this.$refs.audio.currentTime');
      
        // this.audioEle.currentTime = this.currentMusic.duration * percent
    },
    AutoPlay(){
      this.Dautoplay=!this.Dautoplay
    },
    prevtson(){  //上一首函式
      this.timeToMinute();
      let stateSonId=this.$store.state.SonId,
      SonID=stateSonId.indexOf(this.$store.state.ActiveId);
      let SonLength=stateSonId.length;
     
      
      SonID--;
      if(SonID<0){
        SonID=stateSonId.length-1;
        console.log('--end');
         console.log(stateSonId.length);
      console.log(SonID);
        this.$store.state.ActiveId=stateSonId[SonID];
        this.audiosrc="https://music.163.com/song/media/outer/url?id="+`${this.$store.state.ActiveId}`+".mp3";
      }
      this.$store.state.ActiveId=stateSonId[SonID];
      this.audiosrc="https://music.163.com/song/media/outer/url?id="+`${this.$store.state.ActiveId}`+".mp3";
      
    },
    nextson(){
      this.timeToMinute();
      let stateSonId=this.$store.state.SonId,
      SonID=stateSonId.indexOf(this.$store.state.ActiveId);;
      let SonLength=stateSonId.length;
      SonID++;
      if(SonID>=stateSonId.length){
        SonID=0;
        console.log(stateSonId.length);
        this.$store.state.ActiveId=stateSonId[SonID];
        this.audiosrc="https://music.163.com/song/media/outer/url?id="+`${this.$store.state.ActiveId}`+".mp3";
      }
      this.$store.state.ActiveId=stateSonId[SonID];
      this.audiosrc="https://music.163.com/song/media/outer/url?id="+`${this.$store.state.ActiveId}`+".mp3";
      // if(stateSonId.length>2 
      //     ||stateSonId.indexOf(this.$store.state.ActiveId)+1!=-1 
      //     // ||stateSonId.indexOf(this.$store.state.ActiveId)+1!=(stateSonId.length-1)
      //   ){
      //   // stateSonId.forEach(function(currentValue, index, arr){
      //   //   console.log(currentValue,index,arr);
      //   // })
      //   if(stateSonId.indexOf(this.$store.state.ActiveId)+1==(stateSonId.length)){
      //     console.log('错误');
          
      //   }
      //   this.$store.state.ActiveId=stateSonId[stateSonId.indexOf(this.$store.state.ActiveId)+1];
      //   this.audiosrc="https://music.163.com/song/media/outer/url?id="+`${this.$store.state.ActiveId}`+".mp3";
      // }else{
      //   alert("播放列表中只有一首歌,请继续添加歌曲")
      // }
    },
    playson(){
      let that=this,
        currentTimeinterval=setInterval(()=>{
          // console.log(audio.currentTime);
          that.currentTime=audio.currentTime.toFixed(0);
          if(audio.currentTime>360||audio.paused){
            clearInterval(currentTimeinterval)
          }
          // that.currentTime=that.$refs.audio.currentTime;
        },1000);
      let audio=that.$refs.audio;
      // console.log(audio.currentTime);
      if(audio.paused){
        audio.play();// 播放 
        that.$store.state.sonplay=true;
      }else{
        if(that.runtime==that.stime){
          // alert(that.stime)
          // alert(that.runtime)
          clearInterval(timeinter)
        }
        audio.pause();// 暂停
        that.$store.state.sonplay=false;
      }
    },
    receivesonurl(args){
            let that=this;
            let sonid=args[0][2];
            that.audiosrc=JSON.stringify(args[0][0]).replace("\"","").replace("\"","");
            // that.audiosrc="https://music.163.com/song/media/outer/url?id="+`${that.$store.state.ActiveId}`+".mp3";
            that.iframeState=true;
            that.sonplaylist.push(that.audiosrc);
            // filterByName(args[0][1].hotSongs,sonid);
            
            // console.log(JSON.stringify(args)+"args---");
            // console.log(JSON.stringify(args[0][2])+"=======args[0][1].hotSongs[0]");
            that.soninfo=args[0][1].hotSongs[0];
            that.soninfoal=args[0][2].al;
            that.soninfoar=args[0][2].ar;
            that.sonins=args[0][2];
            console.log(JSON.stringify(args[0])+"that.sonins********that.sonins");
            that.timeToMinute(that.sonins.dt)
            axios.get(`/lyric?id=${that.sonins.id}`).then(res=>{
              console.log(JSON.stringify(res));
              that.sonlyric=res.data.lrc;
            }).catch(err=>{
              console.log(err);
            })
        },
    closesinger(){
        let that=this;
        that.iframeState=false;
    },
    changeiframeState(newiframeState){
      let that=this;
      that.iframeState=newiframeState;
    },
    arryfor(array){
      var i=0;
      return function (){
          if(i<array.length-1){
              return array[i++];
          }else{
              i=0;
              return array[array.length-1];
          }
      }
    },
    submit(){
      let tel=document.querySelector('.tel').value;
      let pass=document.querySelector('.password').value;
      sessionStorage.setItem('tel',tel);
      sessionStorage.setItem('password',pass);
      // alert(sessionStorage.getItem("tel"));
      axios.get(`/login/cellphone?phone=${tel}&password=${pass}`).then(
      function(res){
        //console.log(res);
      }
    ).catch(function(err){
      console.log(JSON.stringify(err));
    })
    }
  },
}

   // 数组函式轮询
    function arryfor(array){
      var i=0;
      return function (){
          if(i<array.length-1){
              return array[i++];
          }else{
              i=0;
              return array[array.length-1];
          }
      }
    }

// //  音乐时间戳转换为分秒00:00格式
// function timeToMinute(times){
//   let m,s,time;
//   if(parseInt(times/60000< 10)){
//     m="0"+parseInt(times/60000)+ ':'
//   }else{
//     m=parseInt(times/60000)+ ':'
//   }
//     time=(times%60000);
//     s=time.toString().substr(0, 2);
//     app.time= m + s; 
//     return app.time;
//   }
  
// function change(t) {
//     if (t < 10) {
//         return "0" + t;
//     } else {
//         return t;
//     }
// }

</script>

<style lang="less">
a{
  color: #242424;
  text-decoration: none;
}
#app {
  height:100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #fff;
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 5rem;
  position: relative;
  z-index: 105;
  padding-top:5rem;
  overflow-x: hidden;
  .loading{
    position: fixed;
    top:0;
    right: 0;
    left:0;
    bottom:0;
    z-index:555;
  }
  .playifram{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: #ccc;
    z-index: 555;
    overflow: hidden;
    color: red;
    font-size: 1.6rem;
    background-size: cover;
    &::before{
      content: " ";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(117, 115, 115,.85);
      // filter: blur(30px);
      // opacity: 0.4;
    }
    .colse{
    //    float: right;
        right: 1rem;
        width: 5rem;
        height: 5rem;
        position: absolute;
        left: 0;
        background: url('./assets/icon/close.png') center no-repeat / 100% 100%;
        background-size:contain;
        z-index: 101;
        display: block;
        clear: both;
    }
    .songname {
        margin-top: 2rem;
        height: 2rem;
        line-height: 2rem;
    }
    .playRotate{   //歌曲播放图片旋转
      animation: playrotate 5s linear   infinite ;
    }
    .playbg{
      width: 26rem;
      height: 26rem;
      border-radius: 50%;
      border:1px solid red;
      position: absolute;
      top: 50%;
      left:50%;
      margin-left: -13rem;
      margin-top: -16rem;
      box-sizing: border-box;
      overflow: hidden;
      background: url('./assets/playbg.png') center no-repeat / 100% 100%;
      background-size:contain;
      img{
        width: 65vw;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        margin: auto;
        z-index: 120;
      }
    }
    @keyframes playrotate {
      form{
        transform: rotate(0)
      }
      to{
        transform: rotate(360deg)
      }
    }
    .audiocontrol{
      width: 100vw;
      height: 12rem; 
      position: absolute;
      bottom: 0;
      box-sizing: border-box;
      background: rgba(204, 204, 204,.9);
      padding:0.3rem 0;
      >div{
        padding: 0.2rem 0;
        box-sizing: border-box;
      }
      .progresslyric{
        height: 30%;
        // background: red;
        position: relative;
        .lyric{
          width: 80%;
          margin: auto;
          height: 1.5rem;
          background: pink;
        }
        .Progress{
          width: 100%;;
          position: absolute;
          bottom: 0.35rem;
          display: flex;
          // height: 0.3rem;
          .runtime{
            flex: 1;
            font-size: .6428rem;
            color: #fdf4f4;
          }
          .progressbar{
            flex: 6;
            height:100%;
          }
          .alltime{
            flex: 1;
            font-size: .6428rem;
            color: #fdf4f4;
          }
        }
      }
      .playcontrol{
        height: 40%;
        display: flex;
        .pausedson{
          background: url('./assets/icon/pausedson.png') center no-repeat / 100% 100%!important;
        }
        
        .autoplay{
          background: url('./assets/icon/Randomplay.png') center no-repeat / 100% 100%!important;
        }
        >span{
          height: 100%;
          position: relative;
          i{
            width: 38%;
            height: 75%;
            margin: 0 auto;
            display: block;
            background-size: contain;
            position: absolute;
            top: 12%;
            left: 50%;
            transform:translateX(-50%);
          }
          &:nth-child(1){
            flex: 2;
            i{
              background: url('./assets/icon/Singletune.png') center no-repeat / 100% 100%;
            }
          }
          &:nth-child(2){
            flex: 2;
            i{
              background: url('./assets/icon/prev.png') center no-repeat / 100% 100%;
            }
          }
          &:nth-child(3){
            flex: 2.3;
            i{
              background: url('./assets/icon/playson.png') center no-repeat / 100% 100%;
            }
          }
          &:nth-child(4){
            flex: 2;
            i{
              background: url('./assets/icon/next.png') center no-repeat / 100% 100%;
            }
          }
          &:nth-child(5){
            flex: 2;
            i{
              background: url('./assets/icon/listson.png') center no-repeat / 85% 85%;
            }
          }
        }
      }
      .soncontrol{
        height: 30%;
        display: flex;
        >span{
          height: 100%;
          flex: 1;
          .novolice{
            background: url('./assets/icon/novolice.png') center no-repeat / 100% 100%!important;
          }
          .nocollect{
            background: url('./assets/icon/nocollect.png') center no-repeat / 100% 100%!important;
          }
          &:nth-child(1){
            i{
              background: url('./assets/icon/collect.png') center no-repeat / 100% 100%;
            }
          }
          &:nth-child(2){
            i{
              background: url('./assets/icon/downland.png') center no-repeat / 100% 100%;
            }
          }
          &:nth-child(3){
            i{
              background: url('./assets/icon/acount.png') center no-repeat / 100% 100%;
            }
          }
          &:nth-child(4){
            i{
              background: url('./assets/icon/volice.png') center no-repeat / 100% 100%;
            }
          }
          &:nth-child(5){
            i{
              background: url('./assets/icon/video.png') center no-repeat / 100% 100%;
            }
          }
          i{
            width: 38%;
            height: 100%;
            margin: 0 auto;
            background: pink;
            display: block;
            background-size: contain;
          }
        }
      }
    }
    audio{
      position: absolute;
      bottom: 1rem;
      left: 0;
      right: 0;
      margin: auto;
      display:none;
    }
  }
  .login{
    width: 100%;
    height: 100vh;
    background: #ccc;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    .content{
      padding-top: 20px;
      width: 85%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      border: 1px solid red;
      .submits{
        width: 65px;
      }
      input{
        height: 33px;
        line-height: 33px;
        &:first-child{
          margin: 0;
        }
      }
    }
  }
   .Search{
      display: block;
      width: 100%;
    }
  header{
    width: 100vw;
    height: 5rem;
    line-height: 5rem;
    display: flex;
    background: rgba(255, 0, 0,1);
    // border-bottom:1px solid #000;
    position: fixed;
    top:0;
    z-index:500;
    .headerL{
      flex: 1;
      background: url('./assets/icon/phone.png') center no-repeat;
      background-size: 50%;
    }
    .headerM{
      flex: 4;
      padding:0 10px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      .inputshadow{
        width: 90%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        right: 0%;
        bottom: 0;
        margin: auto;
        // border:1px solid rgb(0, 0, 0); 
        padding: 0 0.4rem;
        
      }
      input[type="search"] {
        height: 3rem;
        width: 100%;
        border-radius:1rem;
        border: none;
        text-align: center;
        background: rgba(221, 221, 221,.8);
        color: #fff!important;
        padding: 0 0.4rem;
        &::-webkit-input-placeholder {
         color:#fff;
     }
        &:focus{
          border: none;
          outline: none
        }
        &:active{
          border: none;
        }
      }
    }
    .play{
      flex: 0.6;
      background: url('./assets/icon/play.png') center no-repeat;
      background-size: 65%;
    }
    .cancel_search{
      flex: 0.6;
    }
  }

}
@media screen and (max-width: 320px) {
  #app .playifram .audiocontrol{
    height: 8rem;
  }
}
</style>
