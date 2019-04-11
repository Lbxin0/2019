<template>
  <div class="baitiao">
    <swiper-component :items="items" />
    <Welfare style="margin-top:20px"></Welfare>
    <Service style="margin-top:20px"></Service>
    <JDinfo>
        <div class="list" slot="JDInfoAdd">
            <div class="item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
      </div>
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
        ],
        enters: [
            {
            href: "home",
            img:
                "http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108",
            title: "客户端"
            },
            {
            href: "home",
            img:
                "http://img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108",
            title: "触屏版"
            },
            {
            href: "home",
            img:
                "http://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108",
            title: "电脑版"
            }
        ],
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
.baitiao
    .list
      display: flex
      padding:5px 0
      background:#fff
      justify-content: center
      padding:10px 0
      margin-top:20px
      .item
          text-align: center
          a
              text-decoration: none
              img
                  display: block
                  width:55%
                  border-radius: 50%
                  margin: 0 auto
              h4
                  font-size: 18px
                  margin-top: 12px
                  color: #666
    .JDInfoAdd
        width:100%
        display:flex
</style>