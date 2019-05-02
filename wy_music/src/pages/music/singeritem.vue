<template>
  <div class="container">
    <div class="container" v-if="Dsingertru">
      <div class="singeritem">
        <div class="singerinfo">
          <div class="colse" @click="closesinger()"></div>
          <h4>{{sonitem.artist.name}}</h4>
          <!-- <h4> <span class=""></span></h4> -->
          <img :src="sonitem.artist.img1v1Url" alt>
        </div>
        <div class="infoitem" ref="infoitem" style="height: 3rem;">
          <p>{{sonitem.artist.briefDesc}}</p>
          <i @click="openinfoitem()" ref="openinfoI"></i>
        </div>
      </div>
      <div
        class="songlist"
        v-for="(item,index) in sonitem.hotSongs"
        :key="index"
        @click="sonplay(item.id,item)"
      >
        <!-- <span class="singername">{{item.artist}}</span> -->
        <span class="songname txtover">{{item.name}}</span>
        <!-- <span class="songtime">3:03</span> -->
        <!-- <audio ref="audioplay" style="opacity:0;z-index:-1" src="" controls="controls" autoplay></audio> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    singertru: {
      type: Boolean
    },
    sonitem: {
    //   type: Array
    }
  },
  data() {
      return {
          Dsingertru:this.singertru
      }
  },
  methods: {
    closesinger() {
      let that = this;
      // that.toBanner='';
      that.Dsingertru = false;
      // that.$refs.audioplay.src=''
      that.$emit("closesinger",that.Dsingertru)
    },
    sonplay(sonid, item) {
      let that = this;
      // alert(sonid);
      // axios.get(`https://music.163.com/song/media/outer/url?id=${sonid}.mp3 `).then(res=>{
      //     console.log(JSON.stringify(res));
      // }).catch(err=>{
      //     console.log(JSON.stringify(err));
      // })
      // let aa="https://music.163.com/song/media/outer/url?id="+`${that.$store.state.ActiveId}`+".mp3";
      let aa =
        "https://music.163.com/song/media/outer/url?id=" + `${sonid}` + ".mp3";
      // that.$refs.audioplay.src=aa;
      that.sonurl = aa;
      // console.log(sonid,item);
      this.$store.commit("SonIdPush", sonid);
      that.$emit("sonplay", aa, that.sonitem, item);
      // window.location.href=aa
    },
    openinfoitem() {
      let that = this;
      // alert(that.$refs.infoitem.style.height)
      that.$refs.infoitem.style.height =
        that.$refs.infoitem.style.height == "100%" ? "3rem" : "100%";
      if (that.$refs.infoitem.style.height == "100%") {
        that.$refs.openinfoI.style.transform = "rotate(180deg)";
      } else {
        that.$refs.openinfoI.style.transform = "rotate(0)";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  .singeritem {
    width: 100%;
    position: relative;
    h4 {
      position: absolute;
    }
    img {
      width: 100%;
    }
  }
}
</style>
