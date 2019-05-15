<template>
  <div class="SaveM">
    <div class="SaveBanner">
      <div class="swiperComponent">
        <swiper-component :items="DItems" :options="options"/>
      </div>
    </div>
    <div class="SaveContent">
      <Pannel :title="SaveContentTitle" style="position:relative" class="SavePannel">
        <span
          slot="titleadd"
          class="titleadd"
          style="
                position:absolute;
                right:10px;
                font-size:.8rem;
                color:#999;
                align-items:center;
            "
        >查看更多商品 ></span>
        <div class="enjoyFree">
          <img
            src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/38699/22/6523/41839/5cd13ce4E40c8efb9/087c86a48a9615ab.png?width=686&height=226"
            alt
          >
          <div class="enjoyFreeList">
            <div class="LIstItem" v-for="item in enjoyFreeList" :key="item.trackData.bid">
              <div class="LIstItemTag">{{item.cornerText}}</div>
              <img :src="item.imgUrl" alt>
              <h4 class="LIstItemInfo">{{item.skuName}}</h4>
              <p class="LIstItemMoney">
                <span>{{item.skuPrice}}</span>
                /{{item.skuPeriod}}
              </p>
            </div>
          </div>
        </div>
      </Pannel>
      <div class="SaveCard">
        <Pannel
          :title="SaveCardTitle"
          style="position:relative"
          :panelTitleClass="DpanelTitleClass"
        >
          <span
            slot="titleadd"
            class="titleadd"
            style="
                position:absolute;
                right:10px;
                font-size:.8rem;
                color:#999;
                align-items:center;
            "
          >更多神券来这里抢 ></span>
          <div class="swiperComponent">
            <swiper-component :swiperSlideTramsform="true"  :items="SaveCardList" :options="SaveCardOptions"/>
          </div>
        </Pannel>
      </div>
      <div class="SaveWelfare">
        <Pannel
          :title="SaveWelfareTitle"
          style="position:relative"
          :panelTitleClass="DpanelTitleClass"
        >
          <span
            slot="titleadd"
            class="titleadd"
            style="
                position:absolute;
                right:10px;
                font-size:.8rem;
                color:#999;
                align-items:center;
            "
          >查看更多福利 ></span>
          <div class="WelfareItem">
            <img
              src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/44996/14/8/4051/5cd17326Edf4bd0de/b032954c22d15f2f.png?width=334&height=230"
              alt
            >
            <img
              src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/38978/14/80/5849/5cb84bb8Ea329c870/ef5123d82f07f9f0.png?width=333&height=230"
              alt
            >
          </div>
          <div class="WelfareNow">
            <img
              src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/71499/32/19/13333/5cd27ba9Ec361f115/83df47ca346b0109.png?width=687&height=200"
              alt
            >
          </div>
        </Pannel>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperComponent from "@/components/Swiper";
import Pannel from "@/components/Pannel";
export default {
  name: "SaveM",
  props: {},
  components: {
    SwiperComponent,
    Pannel
  },
  mounted() {},
  data() {
    return {
      SaveContentTitle: "免息星球",
      SaveCardTitle: "省钱优惠券",
      SaveWelfareTitle: "优惠福利",
      DpanelTitleClass: "DpanelTitleClass",
      SaveCardList: [
        {
          src:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/35087/36/1918/13772/5cb457ccEed425709/9aa49c4292e441e4.png?width=280&height=230",
          eid: "17685",
          trackInfo:
            "242_11623_17685_null__null_null_null__null#null#17685#null_null*null*null",
          pitNum: "1",
          busOrgCode: "",
          elementInstanceName: "领福利-优惠券3",
          trackData: {
            bid: "70242",
            ctp: "70000"
          },
          jumpUrl:
            "https://m.jr.jd.com/mjractivity/rn/couponCenter/index.html?RN=couponCenter&from=lflxb",
          pitOrderNum: "1"
        },
        {
          src:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/35771/12/1917/15074/5cb457d9E67a5e4fd/ff789722707cbfbe.png?width=280&height=230",
          eid: "17684",
          trackInfo:
            "242_11623_17684_null__null_null_null__null#null#17684#null_null*null*null",
          pitNum: "2",
          busOrgCode: "",
          elementInstanceName: "领福利-优惠券2",
          trackData: {
            bid: "70242",
            ctp: "70000"
          },
          jumpUrl:
            "https://m.jr.jd.com/mjractivity/rn/couponCenter/index.html?RN=couponCenter&from=lflxb",
          pitOrderNum: "1"
        },
        {
          src:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/36481/22/1881/17607/5cb457e1E638c8b7f/1dbbbe94b4141281.png?width=280&height=230",
          eid: "17683",
          trackInfo:
            "242_11623_17683_null__null_null_null__null#null#17683#null_null*null*null",
          pitNum: "3",
          busOrgCode: "",
          elementInstanceName: "领福利-优惠券1",
          trackData: {
            bid: "70242",
            ctp: "70000"
          },
          jumpUrl:
            "https://m.jr.jd.com/mjractivity/rn/couponCenter/index.html?RN=couponCenter&from=lflxb",
          pitOrderNum: "1"
        },
        
      ],
      enjoyFreeList: [
        {
          imgUrl:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/41901/34/4212/13119/5cd13cf3E104d0123/7e8525c3ebc9d803.png?width=194&height=195",
          skuName: "OPPO Reno 全面屏拍照手机 6G+256G 雾海绿",
          trackInfo:
            "242_11593_17659_null__sku1_null_null_null__null#null#17659#null_null*null*null",
          skuPeriod: " /每月",
          skuPrice: "¥550",
          trackData: {
            bid: "70242",
            ctp: "70000"
          },
          jumpUrl:
            "https://item.m.jd.com/product/100004544998.html?wxa_abtest=a&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends&ad_od=share&ShareTm=Q%2B7SzAuBoZZbfPvI/i2PSWUzOjxMu4B8CUn4PMRHldWb5O%2BMOJsHrBDkk3xlN34i6Zvy2HuqrKLsQPEek5hv9TPmkULBqYW6YoEFwQ8iiznbche3nFz5%2Bb6LH0f7ed/UGZ61C08UPjaoVFT0QJHlp6kAdxxAbwwjMIFbg5lQYfc=&utm_user=plusmember",
          cornerText: "6个月免息"
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/34958/6/1987/9167/5cb48cb0Ea7fb1ca7/a70d94ff2ccdce4d.png?width=194&height=195",
          skuName: "SK-II神仙水75ml补水保湿精华液礼盒",
          trackInfo:
            "242_11593_17659_null__sku2_null_null_null__null#null#17659#null_null*null*null",
          skuPeriod: " /每月",
          skuPrice: "¥115",
          trackData: {
            bid: "70242",
            ctp: "70000"
          },
          jumpUrl:
            "https://item.m.jd.com/product/4918116.html?dl_abtest=o&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends&ad_od=share&ShareTm=fCQrwbx7MVZw7Ox11U2yX4W45LAVG1iqp44GejXYO/e%2BZUTZibUi22P019hjfqE%2B%2BVanevn8D4Tsy6Qx7HBrNeZhxGVY265BCglibhfhq1zuko1LphXVg00tUru1zH3oHWgJSNLfZ5B%2B/VeQFVyMPRqT/fDG%2Bg0%2BM%2BFLRp5ZNgg=&from=singlemessage&isappinstalled=0",
          cornerText: "6个月免息"
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/34010/19/4896/11765/5cb87ce5E22762883/64f63b9763abdacb.png?width=194&height=195",
          skuName: "Kindle Oasis电子书阅读器 32G 银灰色",
          trackInfo:
            "242_11593_17659_null__sku3_null_null_null__null#null#17659#null_null*null*null",
          skuPeriod: " /每月",
          skuPrice: "¥443",
          trackData: {
            bid: "70242",
            ctp: "70000"
          },
          jumpUrl:
            "https://item.m.jd.com/product/5646654.html?dl_abtest=o&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends&ad_od=share&ShareTm=OXR0TjG4QZfeEeX7vpgwZBkR4syWZi2joYOMUEwa0fggf5hF/Rx5bzx2JzQMC0JiqJ2h5lr0I1erRY3dai5TQ4ZsN9zIYSfYCfLXcQ6it0VeeceYahWj2yTYxHcQ3LUWHL8v39bHQM5kopmIexSGv%2BtkTGwcwbasbyUn9OA4aOg=&from=singlemessage&isappinstalled=0",
          cornerText: "6个月免息"
        }
      ],
      SaveCardOptions: {
        slidesPerView: 2.6,
        spaceBetween: 20,
        loop: false,
        autoplay: false
      },
      options: {
        effect: "coverflow",
        grabCursor: true,
        autoplay: true,
        speed: 1000,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      },
      DItems: [
        {
          href: "home",
          src:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/33551/24/10973/67428/5cd10469E2bba2383/b8e059f459251c07.png?width=686&height=396"
        },
        {
          href: "home",
          src:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/45953/30/7/69154/5cd1750cEa886fa2e/b6d063bcd750453e.png?width=686&height=396"
        },
        {
          href: "home",
          src:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/56368/3/5/71748/5cd16f29E6eaa096f/becf0bcacd866483.png?width=686&height=396"
        },
        {
          href: "home",
          src:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/38549/20/6439/56250/5cd144c2E342043d8/b92fa8aa543ea6bd.png?width=686&height=396"
        },
        {
          href: "home",
          src:
            "https://img10.360buyimg.com/mcmktadmin/jfs/t1/43487/5/4156/40546/5cd1538cE5cb6ba14/0c91d635632dbf15.png?width=686&height=396"
        }
      ]
    };
  }
};
</script>
<style scoped lang='less'>
.SaveM {
  width: 100vw;
  padding-bottom: 5rem;
  .SaveBanner {
    width: 100%;
    // height: 21rem;
    padding-bottom: 5rem;
    background: url("https://u.jr.jd.com/growing/reMoney/images/Bitmapbg_c46fb46496.jpg")
      center no-repeat / 100% 100%;
    background-size: 100% auto;
    overflow: scroll;
    .swiperComponent {
      width: 90%;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
  .SaveContent {
    width: 100%;
    .SaveCard {
      width: 100%;
      .swiperComponent{
      }
      
      .DpanelTitleClass {
        text-align: left;
        color: red !important;
        border: 1px solid red;
      }
    }
    .SaveWelfare {
      .WelfareItem {
        width: 95%;
        margin: 0 auto;
        img {
          width: 48%;
          border-radius: 1rem;
          &:nth-child(1) {
            margin-right: 1%;
            box-sizing: border-box;
          }
        }
      }
      .WelfareNow {
        width: 95%;
        margin: 0 auto;
        margin-top: 0.2rem;
        img {
          width: 100%;
          border-radius: 1rem;
        }
      }
    }
    .enjoyFree {
      width: 90%;
      margin: 0 auto;
      box-shadow: 0 0.5rem 1.75rem 0 rgba(61, 63, 83, 0.12);
      img {
        width: 100%;
      }
      .enjoyFreeList {
        width: 100%;
        > div {
          display: inline-block;
        }
        .LIstItem {
          width: 33%;
          position: relative;
          .LIstItemTag {
            position: absolute;
            top: 0;
            left: 0;
            width: 60%;
            height: 2rem;
            line-height: 2rem;
            background: #ffe427;
            color: #333;
            font-size: 12px;
          }
          img {
            width: 100%;
          }
          .LIstItemInfo {
            width: 100%;
            line-height: 1.5;
            font-size: 12px;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
          .LIstItemMoney {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            span {
              color: #ff6b00;
              font-size: 13px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>