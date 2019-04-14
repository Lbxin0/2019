<template>
  <section :style="cname">  
    <swiper :options="options" :not-next-tick="options.notNextTick" :class="cclass">
      <swiper-slide v-for="item in SwiperList" :key="item.imageUrl">
        <!-- <router-link :to="{name: item.href}"> -->
          <img :src="item.imageUrl" alt="" style="width:100%;height:100%">
        <!-- </router-link> -->
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
            loop : true,
        //   autoplay: {
        //     default:true,
        //     type:Boolean  
        //   },
        //   loop:  {
        //     default:true,
        //     type:Boolean  
        //   },
        //   pagination: {
        //     el: ".swiper-pagination"
        //   },
        };
      }
    },
    SwiperList: {
      type: Array,
      required:true
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang='less'>
@import "~swiper/dist/css/swiper.css";
</style>