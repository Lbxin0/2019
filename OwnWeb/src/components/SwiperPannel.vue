<template>
  <section :style="cname" style="height:100%">
    <swiper :options="options" :not-next-tick="options.notNextTick" :class="cclass" style="height:100%">
      <swiper-slide v-for="item in items" :key="item.src" style="height:100%" >
        <!-- <router-link :to="{name: item.href}"> -->
          <img :src="item.src" alt="" style="width:100%;height:100%">
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
          loop:  {
            default:true,
            type:Boolean  
          },
          pagination: {
            el: ".swiper-pagination"
          },
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