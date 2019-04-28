<template>
  <div class="relax">
    <audio src=""></audio>
    <router-link to="/">
      <div class="back"></div>
    </router-link>
    <h1 class="title">轻松一刻 -- 舒心一夏</h1>
    <div class="Rswiper">
      <swiper-component :items="items" :options="options"/>
    </div>
    <relax-item></relax-item>
  </div>
</template>
<script>
import SwiperComponent from "@/components/Swiper";
import RelaxItem from './relaxItem'
export default {
  title: "relax",
  components: {
    SwiperComponent,
    RelaxItem
  },
  data() {
    return {
      options: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      items: [
        {
          href: "home",
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3941849857,1819186896&fm=26&gp=0.jpg"
        },{
          href: "home",
          src:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4151195460,382651060&fm=15&gp=0.jpg"
        },{
          href: "home",
          src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3739695704,1330605430&fm=26&gp=0.jpg"
        },
        {
          href: "home",
          src:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3204079053,585441897&fm=11&gp=0.jpg"
        },{
          href: "home",
          src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4002837838,1794434805&fm=26&gp=0.jpg"
        },
        {
          href: "home",
          src:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3786750642,927450273&fm=11&gp=0.jpg"
        },{
          href: "home",
          src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3184123695,2442927104&fm=26&gp=0.jpg"
        },
        {
          href:"home",
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3319186171,520158274&fm=15&gp=0.jpg"
        },
        {
          href: "home",
          src:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=609304088,2248509742&fm=11&gp=0.jpg"
        },{
          href: "home",
          src:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=492920168,2085269229&fm=11&gp=0.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped lang='less'>
.relax {
  width: 100vw;
  h1[class="title"]{
    font-size: 1.4rem;
    color:greenyellow;
    padding:0.5rem 0;
  }
  .Rswiper{
    width:100vw;
    overflow: hidden;
  }
  .back {
    width: 2.5rem;
    height: 2.5rem;
    background: url("//m.jr.jd.com/btyingxiao/marketing/css/i/close.png") center
      no-repeat / 100% 100%;
    background-size: contain;
    position: fixed;
    top: 0rem;
    right: 0.5rem;
    z-index: 1100;
  }
}
</style>