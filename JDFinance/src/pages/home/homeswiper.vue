<template>
  <div class="swipercontainer">
    <Pannel :title="title1" :cpclass="cpclass">
      <span
        slot="titleadd"
        class="titleadd"
        style="
                position:absolute;
                right:10px;
                font-size:14px;
                color:#999;

            "
      >查看更多任务 ></span>
      <swiper-component :items="moneyitems" :options="options"/>
    </Pannel>
    <Pannel :title="title2" :cpclass="cpclass">
      <swiper-component :items="selfitems" :options="options"/>
    </Pannel>
  </div>
</template>
<script>
import SwiperComponent from "@/components/Swiper";
import Pannel from "@/components/Pannel";
export default {
  name: "homeswiper",
  props: {},
  data() {
    return {
      title1: "赏金任务",
      title2: "保险保障",
      cpclass: "cclass",
      options: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        autoplay: false
      },
      moneyitems: [
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260"
        }
      ],
      selfitems: [
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/19965/4/1946/28370/5c18958aE9e8a930d/9810bed7979e6bd5.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/27283/39/2034/26756/5c1895b5Ecbfdf7ed/6a0755f1f40e2eb9.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/27014/35/2022/24897/5c1895d9Ef095679a/c0918d244bbfb2e5.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/19150/30/2037/31576/5c1895f2Eb431149e/7a71e063250f8b0d.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/9279/3/9618/27165/5c189693E5d54e2cb/c263629839992767.jpg?width=210&height=260"
        }
      ]
    };
  },
  components: {
    SwiperComponent,
    Pannel
  }
};
</script>
<style scoped lang='sass'>
.cclass
    height:200px
    margin-top:20px
    
</style>