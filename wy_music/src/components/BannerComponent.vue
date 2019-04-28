<template>
  <!-- @someSwiperEvent="callback" -->
  <div class="containers" style>
    <swiper :options="swiperOption" ref="mySwiper" class="swiperOwns" style="width:100%">
      <!-- slides -->
      <swiper-slide
        v-for="(item,index) in toBanner"
        :key="index"
        class="slideOwn"
        style="width:100%"
      >
        <a :href="item.url">
          <img :src="item.imageUrl" v-if="item.imageUrl">
          <img :src="item.coverImgUrl" v-if="item.coverImgUrl">
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "banner",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    slidesPerView: {
      default: 1
    },
    bannerurl: {
      // require:true,
      // type:'string'
    }
  },
  data() {
    return {
      tobanner:this.$props.bannerurl,
      toBanner: "",
      swiperOption: {
        slidesPerView: this.$props.slidesPerView, //设置slider容器能够同时显示的slides数量(carousel模式)。
        // spaceBetween: 20,
	      // centeredSlides: true,
        // autoplay: {
        //   delay: 2000,
        //   stopOnLastSlide: true,
        //   disableOnInteraction: true
        // },
        autoplay:true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true
        }
      }
    };
  },
  created() {
    let that = this;
    // that.axiosurl("/banner")
  },
  methods: {
    axiosurl(bannerurl) {
      let that=this;
      axios
        .get(bannerurl)
        .then(function(res) {
          // console.log(JSON.stringify(res.data.playlists)+"bannerdata=====----");
          if (res.data.banners) {
            that.toBanner = res.data.banners;
            // console.log(JSON.stringify(res.data)+"bannerdata=====----");
          } else if(res.data.playlists){
            that.toBanner = res.data.playlists;
          }
          
          that.$emit("sendsonurl", that.toBanner);
        })
        .error(function(err) {
          console.log("==========" + err);
        });
    }
  },
  watch: {
    bannerurl: function(newval) {
      this.tobanner = newval.toString();
      axiosurl(this.tobanner)
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    let that = this;
    this.axiosurl(this.tobanner)
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style lang="less" scope>
.containers {
  width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 5px 0;
  overflow: hidden;
  .swiperOwns {
    width: 96%;
    background: #ccc;
    margin: 0 auto;
    .slideOwn {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>



// toBanner: [
                //     {
                //     "imageUrl": "http://p1.music.126.net/hVNKue9Nm_g4ScGeTlHPnQ==/109951163859068732.jpg",
                //     "targetId": 75378323,
                //     "adid": null,
                //     "targetType": 10,
                //     "titleColor": "red",
                //     "typeTitle": "VIP专享",
                //     "url": null,
                //     "exclusive": false,
                //     "monitorImpress": null,
                //     "monitorClick": null,
                //     "monitorType": null,
                //     "monitorImpressList": null,
                //     "monitorClickList": null,
                //     "monitorBlackList": null,
                //     "extMonitor": null,
                //     "extMonitorInfo": null,
                //     "adSource": null,
                //     "adLocation": null,
                //     "encodeId": "75378323",
                //     "program": null,
                //     "event": null,
                //     "video": null,
                //     "song": null
                // }, {
                //     "imageUrl": "http://p1.music.126.net/TaFVeRMPf-7LrWdVczyMHg==/109951163859286118.jpg",
                //     "targetId": 10850488,
                //     "adid": null,
                //     "targetType": 1004,
                //     "titleColor": "red",
                //     "typeTitle": "独家自制",
                //     "url": null,
                //     "exclusive": false,
                //     "monitorImpress": null,
                //     "monitorClick": null,
                //     "monitorType": null,
                //     "monitorImpressList": null,
                //     "monitorClickList": null,
                //     "monitorBlackList": null,
                //     "extMonitor": null,
                //     "extMonitorInfo": null,
                //     "adSource": null,
                //     "adLocation": null,
                //     "encodeId": "10850488",
                //     "program": null,
                //     "event": null,
                //     "video": null,
                //     "song": null
                // }, {
                //     "imageUrl": "http://p1.music.126.net/FofZKK54oAJ-F_6yR6r0hQ==/109951163860049964.jpg",
                //     "targetId": 1336864844,
                //     "adid": null,
                //     "targetType": 1,
                //     "titleColor": "red",
                //     "typeTitle": "独家",
                //     "url": null,
                //     "exclusive": false,
                //     "monitorImpress": null,
                //     "monitorClick": null,
                //     "monitorType": null,
                //     "monitorImpressList": null,
                //     "monitorClickList": null,
                //     "monitorBlackList": null,
                //     "extMonitor": null,
                //     "extMonitorInfo": null,
                //     "adSource": null,
                //     "adLocation": null,
                //     "encodeId": "1336864844",
                //     "program": null,
                //     "event": null,
                //     "video": null,
                //     "song": null
                // }, {
                //     "imageUrl": "http://p1.music.126.net/ONTbV4SHGf8PpGtjzsJXog==/109951163859029730.jpg",
                //     "targetId": 1338695683,
                //     "adid": null,
                //     "targetType": 1,
                //     "titleColor": "red",
                //     "typeTitle": "独家",
                //     "url": null,
                //     "exclusive": false,
                //     "monitorImpress": null,
                //     "monitorClick": null,
                //     "monitorType": null,
                //     "monitorImpressList": null,
                //     "monitorClickList": null,
                //     "monitorBlackList": null,
                //     "extMonitor": null,
                //     "extMonitorInfo": null,
                //     "adSource": null,
                //     "adLocation": null,
                //     "encodeId": "1338695683",
                //     "program": null,
                //     "event": null,
                //     "video": null,
                //     "song": null
                // }, {
                //     "imageUrl": "http://p1.music.126.net/cAcUZJEfr2P3rSvZFt-Xsw==/109951163859058683.jpg",
                //     "targetId": 75507514,
                //     "adid": null,
                //     "targetType": 10,
                //     "titleColor": "red",
                //     "typeTitle": "新碟首发",
                //     "url": null,
                //     "exclusive": false,
                //     "monitorImpress": null,
                //     "monitorClick": null,
                //     "monitorType": null,
                //     "monitorImpressList": null,
                //     "monitorClickList": null,
                //     "monitorBlackList": null,
                //     "extMonitor": null,
                //     "extMonitorInfo": null,
                //     "adSource": null,
                //     "adLocation": null,
                //     "encodeId": "75507514",
                //     "program": null,
                //     "event": null,
                //     "video": null,
                //     "song": null
                // }, {
                //     "imageUrl": "http://p1.music.126.net/XARxUiKoXch409d_PPMGnA==/109951163856623114.jpg",
                //     "targetId": 0,
                //     "adid": null,
                //     "targetType": 3000,
                //     "titleColor": "blue",
                //     "typeTitle": "数字专辑",
                //     "url": "https://music.163.com/store/newalbum/detail?id=75377200",
                //     "exclusive": false,
                //     "monitorImpress": null,
                //     "monitorClick": null,
                //     "monitorType": null,
                //     "monitorImpressList": null,
                //     "monitorClickList": null,
                //     "monitorBlackList": null,
                //     "extMonitor": null,
                //     "extMonitorInfo": null,
                //     "adSource": null,
                //     "adLocation": null,
                //     "encodeId": "0",
                //     "program": null,
                //     "event": null,
                //     "video": null,
                //     "song": null
                // }, {
                //     "imageUrl": "http://p1.music.126.net/1vgrimx9Hs9X94S7SsQioA==/109951163859100653.jpg",
                //     "targetId": 1345680843,
                //     "adid": null,
                //     "targetType": 1,
                //     "titleColor": "red",
                //     "typeTitle": "独家",
                //     "url": null,
                //     "exclusive": false,
                //     "monitorImpress": null,
                //     "monitorClick": null,
                //     "monitorType": null,
                //     "monitorImpressList": null,
                //     "monitorClickList": null,
                //     "monitorBlackList": null,
                //     "extMonitor": null,
                //     "extMonitorInfo": null,
                //     "adSource": null,
                //     "adLocation": null,
                //     "encodeId": "1345680843",
                //     "program": null,
                //     "event": null,
                //     "video": null,
                //     "song": null
                // }, {
                //     "imageUrl": "http://p1.music.126.net/1G5INxth5kdGpYE_Ee5fJg==/109951163859290345.jpg",
                //     "targetId": 0,
                //     "adid": null,
                //     "targetType": 3000,
                //     "titleColor": "blue",
                //     "typeTitle": "商城",
                //     "url": "https://music.163.com/m/at/5c511d7fba9b7684cfe75707",
                //     "exclusive": false,
                //     "monitorImpress": null,
                //     "monitorClick": null,
                //     "monitorType": null,
                //     "monitorImpressList": null,
                //     "monitorClickList": null,
                //     "monitorBlackList": null,
                //     "extMonitor": null,
                //     "extMonitorInfo": null,
                //     "adSource": null,
                //     "adLocation": null,
                //     "encodeId": "0",
                //     "program": null,
                //     "event": null,
                //     "video": null,
                //     "song": null
                // }, {
                //     "imageUrl": "http://p1.music.126.net/q_iZxJFMxOIURpHRAl0hrw==/109951163860814891.jpg",
                //     "targetId": 1345707665,
                //     "adid": null,
                //     "targetType": 1,
                //     "titleColor": "red",
                //     "typeTitle": "独家",
                //     "url": null,
                //     "exclusive": false,
                //     "monitorImpress": null,
                //     "monitorClick": null,
                //     "monitorType": null,
                //     "monitorImpressList": null,
                //     "monitorClickList": null,
                //     "monitorBlackList": null,
                //     "extMonitor": null,
                //     "extMonitorInfo": null,
                //     "adSource": null,
                //     "adLocation": null,
                //     "encodeId": "1345707665",
                //     "program": null,
                //     "event": null,
                //     "video": null,
                //     "song": null
                // }
                // ],