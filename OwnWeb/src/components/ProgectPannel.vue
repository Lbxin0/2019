<template>
  <div class="ProgectPannel">
    <div class="ProgectHead">
      <div class="HeadType">{{$props.ProgectData.HeadType}}</div>
      <div class="HeadName">{{$props.ProgectData.HeadName}}</div>
    </div>
    <div class="ProgectContainer">
      <div class="ProgectSwiper">
          <div class="swiperPannel">
            <swiper-pannel :options="options" :items="$props.ProgectData.SwiperListData" :cname="cname"></swiper-pannel>
          </div>
      </div>
      <div class="ProgectInfo">
          <h2 class="ProgectIName">项目名称：{{$props.ProgectData.ProgectIName}}</h2>
          <h3 class="ProgectISkill">项目练习目标：{{$props.ProgectData.ProgectIAim}}</h3>
          <h3 class="ProgectISkill">项目主要技术栈：{{$props.ProgectData.ProgectISkill}}</h3>
          <h4 class="ProgectIDesc">项目简要描述：{{$props.ProgectData.ProgectIDesc}}</h4>
          <h4 class="ProgectIDesc" v-if="$props.ProgectData.ProgectIFunction">项目主要功能：{{$props.ProgectData.ProgectIFunction}}</h4>
          <h4 class="ProgectIDesc">项目是否完成：{{$props.ProgectData.ProgectIComplete}}</h4>
          <h4 class="ProgectIDesc">项目地址：<a target="_blank" :href="$props.ProgectData.ProgectIHref">JumpToProgect</a></h4>
      </div>
    </div>
    <div class="ProgectFooter"></div>
  </div>
</template>
<script>
import SwiperPannel from "@/components/SwiperPannel.vue";
export default {
  name: "ProgectPannel",
  props: {
    ProgectData:{
    },
    cname:{
        type:String
    },
    options: {
      type: Object,
      default() {
        return {
          loop: {
            default: true,
            type: Boolean
          },
          pagination: {
            el: ".swiper-pagination"
          }
        };
      }
    },
  },
  mounted() {
      console.log(this.$props.ProgectData);
      
  },
  components: {
    SwiperPannel
  }
};
</script>
<style scoped lang='less'>
@import "~swiper/dist/css/swiper.css";

a{
    text-decoration: none!important;
    color: #d9534f!important;
}
.ProgectPannel {
  width: 100%;
  border: 1px solid red;
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background:#fff;
  .ProgectHead {
    text-align: left;
    color: #00a67c;
    height: 4rem;
    display: flex;
    align-items: center;
    > div {
      display: inline-block;
      height: 3rem;
      line-height: 3rem;
    }
    .HeadType {
      width: 5rem;
      background: #d9534f;
      font-size: 1.4rem;
      color: #fff;
      text-align: center;
      border-radius: 0.4rem;
      position: relative;
      &::after{
          content:"";
          display: block;
          width: 1.4rem;
          height: 1.4rem;
          background:#d9534f;
          position: absolute;
          right: -0.7rem;
          top:0.6rem;
          transform: rotate(45deg)
      }
    }
    .HeadName {
      width: auto;
      padding-left: 1rem;
      box-sizing: border-box;
    }
  }
  .ProgectContainer {
    width: 100%;
    display: flex;
    .ProgectSwiper {
      flex: 1;
      overflow: hidden;
      height: 30rem;
      padding:0.5rem;
      box-sizing: border-box;
      border:1px dashed #ccc;
      .swiperPannel {
        margin: 0 auto;
        height: 100%;
        .cname{
            width:100%;
        }
      }
    }
    .ProgectInfo {
      flex: 2;
      padding:0.5rem;
      box-sizing: border-box;
      text-transform: capitalize;
      border:1px dashed #ccc;
      .ProgectIName{
          // height: 3rem;
          // line-height: 2;
          color:#0909;
      }
      .ProgectISkill{
          // height: 3rem;
          line-height: 1.6;
      }
      .ProgectIDesc{
          line-height: 1.6;
          padding-left: 3rem;
          text-indent: -3rem;
      }
    }
  }
}
</style>