<template>
  <div class="baitiao">
    <swiper-component :items="items" />
    <Welfare style="margin-top:20px"></Welfare>
    <Service style="margin-top:20px"></Service>
    <JDinfo>
    </JDinfo>
  </div>
</template>
<script>
import SwiperComponent from "@/components/Swiper";
import Welfare from './welfare'
import Service from './service'
import JDinfo from '../JDInfo'
export default {
  name: "baitiao",
  data() {
    return {
        items:[   //白条swiperlist数据
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
            },
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg?width=750&height=320'
            },
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg?width=750&height=320'
            },
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
            }
        ]
    };
  },
  components: {
    SwiperComponent,
    Welfare,
    Service,
    JDinfo
  }
};
</script>
<style scoped lang='sass'>
</style>