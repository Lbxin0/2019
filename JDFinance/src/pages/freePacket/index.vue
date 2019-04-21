<template>
  <div class="index" :class="{'scroll':!RoulerItem}">
    <div class="header">
      <div class="RoulerItem"  v-if="RoulerItem">
          <div class="ItemInfo">
            <div class="closeRouler"  @click="RoulerItem=false"></div>
            <div class="RoulerList">
                <div class="ListHead">活动规则</div>
                <ul>
                    <li>1、同一用户每日可免费签到一次，每次签到有机会随机获赠相应奖励，仅限已通过实名认证的京东用户和京东金融用户参与（以下合并称为“用户”）;</li>
                    <li>2、系统将在3个工作日内自动将相应奖励发放至您的京东账户，请在京东金融APP或京东商城APP查看;</li>
                    <li>3、同一京东账户，同一身份证号码，同一手机号均视为同一用户;</li>
                    <li>4、凡参与本活动，均视为已阅读并同意本活动细则，若发现有用户利用不正当手段参与活动，京东金融有权取消其所获奖励；如给京东APP、京东金融APP或其他用户造成损失的，京东APP和京东金融APP保留向违规用户继续追索的权利;</li>
                    <li>5、如遇不可抗力，（包括但不限于重大灾害事件，活动受政府机关指令需要停止举办或调整的，活动遭受严重网络攻击或遭遇重大系统变更或系统故障），京东金融有权提前终止、修改、暂停本活动;</li>
                    <li>6、本次活动由京东金融发起，与Apple.Inc无关;</li>
                    <li>7、苹果公司不是本活动的赞助商且没有以任何形式参与活动;</li>
                    <li>8、本活动仅限17岁以上用户参加;</li>
                </ul>
            </div>
          </div>
      </div>
      <div class="QDRuler" @click="RoulerItem=true"></div>
      <div class="QDFree"></div>
      <div class="QDInfo">
        <p>免息好物 + 寻找1亿</p>
      </div>
      <div class="GetFree"></div>
    </div>
    <div class="LuckDraw">
      <div class="SeeMore"></div>
    </div>
    <div class="FreeList">
      <div class="ItemHeade"></div>
      <div class="listItem">
        <GoodsItem :GoodsList="DGoodsList"></GoodsItem>
      </div>
    </div>
    <router-link to="/"><div class="BackHome"></div></router-link> 
  </div>
</template> 
<script>
import GoodsItem from "@/components/GoodsItem";
import axios from "axios";
export default {
  name: "index",
  components: {
    GoodsItem
  },
  data() {
    return {
      DGoodsList: [    //领红包页面量身定做MOOC数据
        {
          isSelfService: true,
          installment: 6,
          imageUrl:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/29861/36/11965/55492/5c9352f7E5302d7a8/dd359563dc751ca5.jpg",
          goodsPrice: "1399.00",
          rule: "100045_89_btyx2000.sup_100004325476",
          installmentPrice: 234,
          goodsName: "Apple AirPods 配充电盒 苹果蓝牙耳机",
          jumpUrl: "https://item.m.jd.com/product/100004325476.html",
          skuId: "100004325476"
        },
        {
          isSelfService: true,
          installment: 6,
          imageUrl:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/31199/14/3993/287777/5c791bb5Ebaa929af/044c52520956ebfb.jpg",
          goodsPrice: "3298.00",
          rule: "100045_89_btyx2000.sup_100003433872",
          installmentPrice: 550,
          goodsName:
            "【KPL官方比赛用机】vivo iQOO 44W超快闪充 8GB+128GB电光蓝 全面屏拍照手机 骁龙855电竞游戏 全网通4G手机",
          jumpUrl: "https://item.m.jd.com/product/100003433872.html",
          skuId: "100003433872"
        },
        {
          isSelfService: false,
          installment: 3,
          imageUrl:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/30497/6/10824/157400/5cb20886E786aa2fb/ee0cacf60b16ed0f.jpg",
          goodsPrice: "129.90",
          rule: "100045_89_btyx2000.sup_11730335383",
          installmentPrice: 44,
          goodsName:
            "【抢！爆款2份均价60.4元 得7.2斤共75-100只】红功夫小龙虾 爆款35-50只麻辣中号1.8kg",
          jumpUrl: "https://item.m.jd.com/product/11730335383.html",
          skuId: "11730335383"
        },
        {
          isSelfService: true,
          installment: 6,
          imageUrl:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/32747/5/7835/52906/5c9ae28eE5eb75fd1/ca73d3dfdb2558e8.jpg",
          goodsPrice: "3999.00",
          rule: "100045_89_btyx2000.sup_100004466546",
          installmentPrice: 667,
          goodsName:
            "格力（GREE）1.5匹 云锦 一级能效 变频 智能微联 冷暖自洁 壁挂式卧室空调挂机 KFR-35GW/NhPaB1W",
          jumpUrl: "https://item.m.jd.com/product/100004466546.html",
          skuId: "100004466546"
        },
        {
          isSelfService: true,
          installment: 6,
          imageUrl:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/33525/3/4376/222283/5cb7214aE29f2e239/68d42d66a8a9c565.jpg",
          goodsPrice: "690.00",
          rule: "100045_89_btyx2000.sup_4918116",
          installmentPrice: 115,
          goodsName:
            "SK-II神仙水75ml护肤套装化妆品礼盒（赠清莹露+氨基酸洗面奶+大红瓶面霜+眼霜）SK2精华液 乳液 补水保湿",
          jumpUrl: "https://item.m.jd.com/product/4918116.html",
          skuId: "4918116"
        },
        {
          isSelfService: true,
          installment: 3,
          imageUrl:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/31127/15/1139/126809/5c46f7d9E5390a7ee/3f45469994d5470e.jpg",
          goodsPrice: "329.00",
          rule: "100045_89_btyx2000.sup_100002413882",
          installmentPrice: 110,
          goodsName:
            "荣耀路由Pro 2全千兆无线高速路由器 凌霄四核CPU/四信号放大器/双频优选/120㎡大户型穿墙/USB3.0/支持IPv6",
          jumpUrl: "https://item.m.jd.com/product/100002413882.html",
          skuId: "100002413882"
        },
        {
          isSelfService: true,
          installment: 3,
          imageUrl:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/2490/32/14050/113541/5bd97620Eb914b789/a21a7d09d8da6ab1.jpg",
          goodsPrice: "21.90",
          rule: "100045_89_btyx2000.sup_4648160",
          installmentPrice: 8,
          goodsName:
            "欧普照明（OPPLE）led筒灯3W超薄桶灯客厅吊顶天花灯过道嵌入式孔灯牛眼灯 开孔7-8厘米【三档调色铝材】",
          jumpUrl: "https://item.m.jd.com/product/4648160.html",
          skuId: "4648160"
        },
        {
          isSelfService: false,
          installment: 3,
          imageUrl:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/25636/10/4157/98976/5c2f07dcE0fa64e77/6f9211cf672addb2.jpg",
          goodsPrice: "179.00",
          rule: "100045_89_btyx2000.sup_12596174640",
          installmentPrice: 60,
          goodsName:
            "瑞士军刀双肩包男士背包新款大容量休闲商务旅行电脑包学生书包 USb充电包 黑色 大号带usb送多功能刀+锁",
          jumpUrl: "https://item.m.jd.com/product/12596174640.html",
          skuId: "12596174640"
        }
      ],
      RoulerItem:false
    };
  }
};
</script>
<style scoped lang='less'>
.scroll{
    overflow: scroll!important;
}
.index {
  width: 100vw;
  // height:45vh;
  background: #161b39;
  padding-bottom: 5rem;
  .BackHome{
      width:4.5rem;
      height:4.5rem;
      position: fixed;
      right:0.5rem;
      bottom:5rem;
      background: url('https://m.jr.jd.com/btyingxiao/marketing/css/i/reback1.jpg') center no-repeat / 100% 100%;
      background-size:contain;
      
  }
  .FreeList {
    width: 100%;
    background: #fff;
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
    .listItem {
      width: 100%;
      display: inline-block;
    }
    .ItemHeade {
      width: 100%;
      height: 5rem;
      background: url("https://m.360buyimg.com/jrqb/jfs/t27532/107/453175347/9344/40de0ca/5badf3b8N55089b04.png")
        center no-repeat / 100% 100%;
      background-size: contain;
    }
  }
  .LuckDraw {
    width: 100%;
    position: relative;
    // top:15rem;
    .SeeMore {
      width: 95vw;
      height: 7rem;
      margin: 0 auto;
      margin-top: 1rem;
      background: url("https://m.jr.jd.com/btyingxiao/marketing/css/i/newstudent.png")
        center no-repeat / 100% 100%;
    }
  }
  .header {
    width: 100%;
    top: 0;
    overflow: hidden;
    background: #161b39
      url("https://m.jr.jd.com/btyingxiao/marketing/css/i/header.png") center
      no-repeat / 100% 100%;
    .RoulerItem{
        // width:100vw;
        // height:100vh;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        background: rgba(8,8,13,.9);
        z-index:1000;
        touch-action: none;
        -webkit-touch-action: none;
        -webkit-overflow-scrolling:none;
        -ms-touch-select: none;
        -webkit-touch-callout: none;
        .ItemInfo{
            width:20rem;
            height:22rem;
            background: url('https://m.jr.jd.com/btyingxiao/marketing/css/i/hd_ruler_bg.png') center no-repeat / 100% 100%;
            background-size:contain;
            position: absolute;
            top:50%;
            left:50%;
            margin-top: -11rem;
            margin-left:-10rem;
            .closeRouler{
                width:2.5rem;
                height:2.5rem;
                position: absolute;
                background: url('https://m.jr.jd.com/btyingxiao/marketing/css/i/close.png') center no-repeat / 100% 100%;
                background-size:contain;
                top:-1.25rem;
                right:-0.5rem;
                z-index: 100;
            }
            .RoulerList{
                width:95%;
                margin:0 auto;
                    .ListHead{
                        height:2rem;
                        line-height:2rem;
                        color:#fff;
                        font-size: 1rem;
                        width:12rem;
                        margin:1.5rem auto;
                        background: url('https://m.jr.jd.com/btyingxiao/marketing/css/i/hf.png') center no-repeat / 100% 100%;
                        background-size: contain;
                    }
                    ul{
                        width:85%;
                        height:16rem;
                        overflow-y: scroll;
                        margin:0 auto;
                        li{
                            line-height: 1.25rem;
                            font-size: 0.85rem;
                            color:#fff;
                            text-align: left;
                            
                        }
                    }
            }
        }
    }
    .QDRuler {
      width: 5rem;
      height: 2rem;
      background: url("https://m.jr.jd.com/btyingxiao/marketing/css/i/hd_rule.png")
        center no-repeat / 100% 100%;
      background-size: contain;
      position: absolute;
      right: 0.5rem;
      top: 4rem;
    }
    .GetFree {
      width: 95%;
      height: 5rem;
      margin: 0 auto;
      background: url("https://img12.360buyimg.com/jrpmobile/jfs/t1/20395/36/6298/86347/5c4ea565E1d9fb650/0d50090ef5843083.png")
        center no-repeat / 100% 100%;
      background-size: contain;
    }
    .QDInfo {
      width: 15rem;
      margin: 0 auto;
      color: #fff;
      height: 3rem;
      line-height: 3rem;
      letter-spacing: 0.15rem;
    }
    .QDFree {
      width: 15rem;
      height: 3rem;
      background: url("https://m.jr.jd.com/btyingxiao/marketing/css/i/title.png")
        center no-repeat / 100% 100%;
      background-size: contain;
      margin: 0 auto;
      margin-top: 3rem;
    }
  }
}
</style>