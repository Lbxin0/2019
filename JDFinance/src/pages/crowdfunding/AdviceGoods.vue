<template>
  <div class="AdviceGoods">
    <Pannel :title="title" >
        <div class="ADlist" v-for="item in ADGlist" :key="item.catory">
            <img :src="item.catory" alt="">
            <div class="listinfo">
                <div class="listitem" v-for="items in item.Goodslist" :key="items.title">
                    <img :src="items.img" alt="">
                    <h2>{{items.title}}</h2>
                    <h5>{{items.price}}<span style="color:#999;font-size:12px">起</span></h5>
                    <div class="percent">
                        <div class="percentimg">
                            <span class="percentColor" :style="{width: items.progress/3 + '%'}"></span>
                        </div>
                        <div class="percentNum">{{items.progress}}%</div>
                    </div>
                </div>
            </div>
        </div>
    </Pannel>
  </div>
</template>
<script>
import Pannel from "@/components/Pannel";
export default {
  name: "AdviceGoods",
  components: {
    Pannel
  },
  data() {
    return {
      title: "尖货推荐",
      ADGlist: [
        {
          catory:
            "//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
          Goodslist: [
            {
              img:
                "https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg",
              title: "双响炮蓝牙音箱",
              price: "29.00",
              progress: 172
            },
            {
              img:
                "https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg",
              title: "脑波相机",
              price: "998.00",
              progress: 259
            }
          ]
        },
        {
          catory:
            "//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
          Goodslist: [
            {
              img:
                "https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg",
              title: "智能电动牙刷",
              price: "19.00",
              progress: 281
            },
            {
              img:
                "https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg",
              title: "烟草加热电子烟",
              price: "258.00",
              progress: 105
            }
          ]
        },
        {
          catory:
            "//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=750&height=150",
          Goodslist: [
            {
              img:
                "https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg",
              title: "赖公高淮封藏老酒",
              price: "99.00",
              progress: 199
            },
            {
              img:
                "https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg",
              title: "泗洪花雕醉蟹",
              price: "58.00",
              progress: 222
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped lang='sass'>
    .AdviceGoods
        margin-top:20px
        padding-bottom:20px
        .ADlist
            width:100%
            img
                width:100%
            .listinfo
                width:100%
                margin-bottom:10px
                >div
                    display: inline-block
                .listitem
                    width:50%
                    img
                        width:65%
                        margin:0 auto
                    h2
                        font-weight: bold
                        height:30px
                        line-height:30px
                    h5
                        font-weight: bold
                        color: red
                        height:20px
                        line-height:20px
                    .percent
                        color:#999
                        font-size:11px
                        width: 80%
                        margin:0 auto
                        >div
                            display: inline-block
                            box-sizing: border-box
                        .percentimg
                            width:65%
                            height:6px
                            line-height:6px
                            border-radius:3px
                            text-align: left
                            .percentColor
                                height: 100%
                                width: 75%
                                display: inline-block
                                background: linear-gradient(270deg,#e55 1%,#ff9c55 70%)
                                border-radius:3px
                        .percentNum
                            width:28%
                            text-align: center


</style>