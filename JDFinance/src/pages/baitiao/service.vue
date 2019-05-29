<template>
  <div class="service">
    <service-pannel :title="title" >
         <div class="list">
            <div class="item" v-for="item in ServiceList" :key="item.img">
                <!-- <router-link :to="{name: item.href}"> -->
                <img :src="item.src" :alt="item.text">
                <h4>{{item.text}}</h4>
                <!-- </router-link> -->
            </div>
        </div>
    </service-pannel>
  </div>
</template>
<script>
import ServicePannel from "@/components/Pannel";
export default {
  name: "service",
  components: {
    ServicePannel
  },
  data() {
    return {
      title: "更多服务",
      ServiceList: [  //服务列表数据
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135",
          text: "小白卡"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135",
          text: "白条商城"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135",
          text: "消费分期"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120",
          text: "借钱"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
          text: "白条提额"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135",
          text: "白条闪付"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135",
          text: "小白会玩"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135",
          text: "钢镚"
        }
      ]
    };
  }
};
</script>
<style scoped lang='sass'>
    .list
        display: flex
        padding:5px 0
        justify-content: center
        flex-wrap: wrap
        width:100vw
        .item
            text-align: center
            width:24vw
            padding:7px 0
            img
                display: block
                width:55%
                border-radius: 50%
                margin: 0 auto
            h4
                font-size: 18px
                margin-top: 12px
                color: #666
</style>