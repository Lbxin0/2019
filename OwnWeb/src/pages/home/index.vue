<template>
  <div class="home">
    <div class="swiperPannel">
      <swiper-pannel :options="options" :items="HomeItems" :cname="cname"></swiper-pannel>
    </div>
  </div>
</template>
<script>
import SwiperPannel from "@/components/SwiperPannel.vue";
export default {
  name: "home",
  props: {},
  data() {
    return {
      cname:this.cname,
      options: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      HomeItems: [
        {
          href: "home",
          src: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2728723670,1912967516&fm=26&gp=0.jpg"
        },
        {
            href:"home",
            src:"http://5b0988e595225.cdn.sohucs.com/images/20180103/e794a127e15742059eb6f58684dff997.png"
        },
        {
          href: "home",
          src: "http://5b0988e595225.cdn.sohucs.com/images/20180103/5a1eb809d8b6482fad720d767163683e.png"
        },
        {
          href: "home",
          src:
            "//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557204956333&di=5a9b2263ab6fa412aa2e4b9693f856ff&imgtype=0&src=http%3A%2F%2Fimg.mukewang.com%2F5c2713e50001594e10400505.jpg"
        },
        {
          href: "home",
          src: "//www.bkjia.com/uploads/allimg/170214/16233C1C-0.png"
        },
        {
          href: "home",
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2351165532,2577767118&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  components: {
    SwiperPannel,
  }
};
</script>
<style scoped lang='less'>
.home {
  width: 100%;
  height: 25rem;
  .swiperPannel {
    margin: 0 auto;
    height: 100%;
    .cname{
        width:100%;
    }
  }
}
</style>