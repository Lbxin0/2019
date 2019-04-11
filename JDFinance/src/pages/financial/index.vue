<template>
  <div class="financial">
    <div class="financeadd">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&amp;height=270"
        alt
      >
    </div>
    <money :items="items"></money>

    <div class="financeadd">
      <img
        src="http://img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240"
        alt
      >
    </div>
    <Pannel :title="title" :cpclass="cpclass">
      <div class="moneyitem" v-for="item in moneyitem" :key="item.title">
        <div class="itemimg">
          <img :src="item.img" alt>
        </div>
        <div class="iteminfo">
          <h4>{{item.title}}</h4>
          <p>{{item.text}}</p>
        </div>
        <div class="itemcontrol">去赚钱 ></div>
      </div>
    </Pannel>
    <div class="financeadd">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120"
        alt
      >
    </div>
    <JDinfo>
      
    </JDinfo>
  </div>
</template>
<script>
import money from "../home/money";
import JDinfo from "../JDInfo";
import Pannel from "@/components/Pannel";
export default {
  name: "financial",
  props: {},
  components: {
    money,
    Pannel,
    JDinfo
  },
  data() {
    return {
      title: "理财精选",
      cpclass: "",
      moneyitem: [
        {
          title: "月度理财",
          text: "预期年化收益率4.50%",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76"
        },
        {
          title: "季度理财",
          text: "预期年化收益率4.50%",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76"
        },
        {
          title: "一年理财",
          text: "预期年化收益率4.50%",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76"
        }
      ],
      items: [
        {
          title: "定期理财",
          rate: "5.55%",
          text: "历史年化结算率"
        },
        {
          title: "固收理财",
          rate: "5.80%",
          text: "综合年化收益率"
        },
        {
          title: "基质账户",
          rate: "8%-10%",
          text: "止盈年化收益率"
        },
        {
          title: "小白基金",
          rate: "4.27%",
          text: "7日年化收益率"
        }
      ]
    };
  }
};
</script>
<style scoped lang='sass'>
.financial
    padding-bottom:60px
    .moneyitem
        width:100%
        display: flex
        padding:0 15px
        box-sizing: border-box
        .itemimg
            flex:1.5
            img
                width:100%
        .iteminfo
            flex:4
            text-align: left
            padding-left:10px
            padding-top:10px
            h4
                height:40%
            p
                height:40%
                font-size: 14px
                color: #ff3232
                line-height: 1.3
        .itemcontrol
            flex:2
            font-size: 14px
            color: #FF801A
            line-height:4
    .financeadd
        width:100%
        margin:20px 0
        background:#fff
        padding:10px 0
        img
            width:100%
</style>