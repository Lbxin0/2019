<template>
  <section :style="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick" :class="cclass">
      <swiper-slide v-for="(item,index) in items" :key="index">
          <img :src="item" alt="" style="width:100%;height:100%">
      </swiper-slide>
      <div class="swiper-pagination" v-if="options" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  
  props: {
    cclass:{
      type:String,
      default:""
    },
    cname: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default() {
        return {
          // slidesPerView:{
          //   type:Number,
          //   default:1,
          // },
          // spaceBetween:{
          //   default:0,
          //   type:Number  
          // },
          // freeMode: {
          //   default:true,
          //   type:Boolean
          // },
          autoplay: {
            default:true,
            type:Boolean  
          },
          loop:  {
            default:true,
            type:Boolean  
          },
          pagination: {
            el: ".swiper-pagination"
          },
          // hashNavigation: true,
          // notNextTick: true,
          // hideOnClick :true,
        };
      }
    },
    items: {
      type: Array,
      default() {
        return [
          {
            href: "",
            src: ""
          }
        ];
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
@import "~swiper/dist/css/swiper.css";
</style>