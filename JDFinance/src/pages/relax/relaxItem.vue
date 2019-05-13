<template>
  <div class="relaxItem">
    <audio
      src="https://x0516.github.io/SourceData/添羽音乐 - 片头曲.mp3"
      autoplay
      loop
    >Your browser does not support the audio element.</audio>
    <Pannel :title="title" :cpclass="cpclass">
      <div class="ItemContainer" v-for="(item,index) in items" :key="item.title">
        <div class="ItemSwiper">
          <swiper-component style="width:100%;" :items="item.src" :options="options"/>
        </div>
        <div class="ItemInfo">
          <h1>{{item.title}}</h1>
          <h3>地点：{{item.location}}</h3>
          <!-- <p class="itemInfo">详情：{{item.description}}</p> -->
           <div class="infoitem" ref="infoitem" style="height: 1.8rem">
            <p>详情：{{item.description}}</p>
            <i @click="openinfoitem(index)" ref="openinfoI"></i>
          </div>
        </div>
      </div>
    </Pannel>
  </div>
</template>
<script>
import Pannel from "@/components/Pannel";
import SwiperComponent from "@/components/swiper2";
import axios from "axios";
export default {
  name: "relaxItem",
  components: {
    Pannel,
    SwiperComponent
  },
  data() {
    return {
      title: "天津市旅游区",
      cpclass: "Dcpclass",
      items: [],
      SwiperList: [],
      options: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
    axios
      .get("https://x0516.github.io/SourceData/json/qunaer.json")
      .then(res => {
        // console.log(res.data.data);
        let QNEData = res.data.data.slice(0, 4).map(item => {
          return {
            title: item.title,
            src: item.imageUrls,
            description: item.description,
            location: item.location,
            keyValues: item.keyValues
          };
        });
        this.SwiperList = QNEData.map(item => {
          return {
            src: item.src
          };
        });
        // console.log(this.SwiperList);
        this.items = QNEData;
        console.log(QNEData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    openinfoitem(index) {
      let that = this;
      console.log(that.$refs.infoitem[index].style.height)
      that.$refs.infoitem[index].style.height =
        that.$refs.infoitem[index].style.height == "100%" ? "1.8rem" : "100%";
      if (that.$refs.infoitem[index].style.height == "100%") {
        that.$refs.openinfoI[index].style.transform = "rotate(180deg)";
      } else {
        that.$refs.openinfoI[index].style.transform = "rotate(0)";
      }
    }
  }
};
</script>
<style scoped lang='less'>
.relaxItem {
  .Dcpclass {
    margin-top: 0.5rem;
    .ItemContainer {
      width: 100vw;
      // height:28rem;
      box-sizing: border-box;
      // display:flex;
      .ItemSwiper {
        // flex:0.8;
        width: 100%;
        margin: 0 auto;
        height: 15rem;
        overflow: hidden;
      }
      .ItemInfo {
        // flex:1;
        // height:12rem;
        padding: 0 0.5rem 0.5rem 0.5rem;
            .infoitem{
                width: 100%;
                position: relative;
                overflow: hidden;
                // border-bottom: 2px solid #f4f4f4;
                p{
                    width: 87%;
                    text-align: left;
                    padding-left: 3rem;
                    text-indent: -3rem;
                    box-sizing: border-box;
                    line-height:1.6rem;
                }
                i{
                    width: 2rem;
                    height: 1.8rem;
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0.5rem;
                    background: url('../../assets/images/close_icon.png') center no-repeat / 100% 100%;
                    background-size:contain
                    
                }
            }
        h1 {
          // height:2rem;
          // line-height:2rem;
          padding: 0.2rem 0;
        }
        h3 {
          height: 1.5rem;
          line-height: 1.5rem;
          text-align: left;
        }
        p[class="itemInfo"] {
          width: 100%;
          text-align: left;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          line-height: 1.4rem;
        }
      }
    }
  }
}
</style>