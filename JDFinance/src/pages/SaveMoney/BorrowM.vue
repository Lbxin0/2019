<template>
    <div class='BorrowM'>
        <div class="Sign">
            
        </div>
        <div class="topContainer">
            <p class="topBorrow">最高可借</p>
            <h4 class="topBorrowItem">3000.000</h4>
            <div class="login">立即登录</div>
        </div>
        <swiper-component :items="Welfitems" />
        <div class="hasCarAndMoney">
            <Pannel :title="hasCarAndMoneyTitle"  :cpclass='cpclass'>
                <div class="imgBox">
                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/16662/30/15341/22141/5caf3007Ed04371f5/92aeb35325e56d32.png?width=375&height=233" alt="汽车分期">
                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/21337/31/13706/22340/5ca18608Ebdd6ea02/02d3b385bf9c045c.png?width=375&height=233" alt="汽车贷款">
                </div>
            </Pannel>
            <div class="BorrowSwiper">
                <swiper-component  :swiperSlideTramsform="true" :items="selfitems" :options="options"/>
            </div>
        </div>
        <div class="baitiaoService">
            <Pannel :title="baitiaoServiceTitle" :cpclass='cpclass' class="CPannel">
                <!-- <div class="imgBox">
                    <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png" alt="汽车分期">
                    <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png" alt="汽车贷款">
                </div> -->
                <div class="ServiceCard">
                    <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png" alt="汽车分期">
                </div>
                <div class="ServiceLogin">
                    <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png" alt="汽车贷款">
                    <div class="ServiceSincerity">小白信誉</div>
                    <div class="LoginView">登录查看</div>
                </div>
            </Pannel>
        </div>
        <div class="GoodService">
            <Pannel :title="GoodService" :cpclass='cpclass' class="CPannel">
               <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/35525/40/2975/21587/5cbd5b06E7ebc4232/b4596aec68de09cf.png?width=730&height=264" alt="">
            </Pannel>
        </div>
    </div>
</template>
<script>
import SwiperComponent from "@/components/Swiper";
import Pannel from '@/components/Pannel' ;
export default {
    name: 'BorrowM',
    components:{
        SwiperComponent,
        Pannel
    },
    data() {
        return {
            hasCarAndMoneyTitle:"有车有钱",
            baitiaoServiceTitle:"白条服务",
            GoodService:"精品活动",
            cpclass:"Dcpclass",
            options: {
                slidesPerView: 5,
                spaceBetween: 20,
                loop: false,
                autoplay: false,
            },
            selfitems: [
                {
                href: "home",
                title:"机票",
                src:
                    "https://img12.360buyimg.com/jrpmobile/jfs/t1/14341/37/3393/6583/5c26c570E1c91365c/a12b127c15c524c4.png?width=90&height=90"
                },
                {
                href: "home",
                title:"租房",
                src:
                    "https://img12.360buyimg.com/jrpmobile/jfs/t1/5678/12/7013/4702/5ba49a4fE808c96ed/2622695db5d0128b.png?width=88&height=88"
                },
                {
                href: "home",
                title:"房抵贷",
                src:
                    "https://img12.360buyimg.com/jrpmobile/jfs/t1/4294/38/6852/4745/5ba49a5aEeb72a2f0/b28774eadc4e1527.png?width=90&height=90"
                },
                {
                href: "home",
                title:"分期用",
                src:
                    "https://img12.360buyimg.com/jrpmobile/jfs/t1/4554/34/7050/3668/5ba49a60Ed1481e30/413fed46004f96e7.png?width=88&height=88"
                },
                {
                href: "home",
                title:"彩票推荐",
                src:
                    "https://img12.360buyimg.com/jrpmobile/jfs/t1/852/23/6959/5247/5ba49a6bE45fd05f7/36437307167c7071.png?width=90&height=90"
                },
                {
                href: "home",
                title:"教育",
                src:
                    "https://img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90"
                },
                {
                href: "home",
                title:"车险",
                src:
                    "https://img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90"
                },
                {
                href: "home",
                title:"家装",
                src:
                    "https://img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88"
                },
                {
                href: "home",
                title:"驾校",
                src:
                    "https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90"
                }
            ],
            Welfitems:[   //白条swiperlist数据
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t1/21509/20/4531/39775/5c33281eE7e0635bb/6a8c62f841f035a7.png?width=1080&height=240'
            },
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t22897/39/1541754983/14812/d61317bc/5b6263e4Nbd9cf24d.png?width=690&height=154'
            },
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t1/12277/16/15363/78163/5caf2fe1Ea8b5743e/5afe5457e88a1e33.jpg?width=1080&height=240'
            }
      ],
        }
    },
}
</script>
<style scoped lang='less'>
    .BorrowM{
        width: 100%;
        background: url('https://m.jr.jd.com/vip/borrowMoney/css/i/bj.png') top no-repeat / 100% 100%;
        background-size:100% auto;
        padding-top: 2rem;
        padding-bottom: 4rem;
        .Sign{
            position: fixed;
            bottom: 20%;
            right:0;
            width: 6rem;
            height: 10rem;
            transform: rotate(-20deg)  translateX(1rem);
            background: url('https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/signIcon.png') center no-repeat / 100% 100%;
            background-size:contain;
            z-index: 100;
        }
        box-sizing: border-box;
        .topContainer{
            width:92%;
            height: auto;
            margin: 0 auto;
            background: url('https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png') center no-repeat / 100% 100%;
            background-size:100% auto;
            padding: 10%;
            box-sizing: border-box;
            text-align: left;
            .topBorrow{
                height: 3rem;
                line-height: 3rem;
                font-size: 1.2rem;
                color:#fff;
            }
            .topBorrowItem{
                height: 3rem;
                line-height: 3rem;
                font-size: 1.6rem;
                color:#fff;
            }
            .login{
                width:45%;
                height: 4rem;
                line-height: 4rem;
                background: url('https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png') center no-repeat / 100% 100%;
                background-size:contain;
                text-align: center;
                font-size: 1.3rem;
                color: #fff;
            }
        }
        .hasCarAndMoney{
            width: 100vw;
            .imgBox{
                width: 100%;
                >img{
                    display: inline-block;
                    width:50%;
                }
            }
            .BorrowSwiper{
                width: 100%;

            }
        }
        .baitiaoService{
            width: 100%;
            .CPannel{
                >div{
                    display:inline-block;
                    height: 11rem;
                }
                .ServiceCard{
                    width: 60%;
                    img{
                        height: 100%;
                    }
                }
                .ServiceLogin{
                    width: 40%;
                    position: relative;
                    img{
                        height: 100%;
                    }
                    >div{
                        position: absolute;
                        left: 50%;
                        top: 43%;
                        color:#fff;
                        transform: translate(-50%,-50%)
                    }
                    .LoginView{
                        top:71%;
                        color: #ae8339;
                    }
                }
            }
        }
        .GoodService{
            width: 100%;
            .CPannel{
                img{
                    width: 100%;
                }
            }
        }
    }
</style>