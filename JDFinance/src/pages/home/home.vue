<template>
    <div class='home'>
        <swiper-component :items='items' :options="options"/>
        <!-- <div class="list">
            <div class="item" v-for="item in enters" :key="item.img">
                <router-link :to="item.href">
                <img :src="item.img" :alt="item.title">
                <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </div> -->
        <singer-pAnnel :enters="enters"></singer-pAnnel>
        <Pannel :title="title" :cpclass='cpclass'>
            <div class="content">
                <div class="item">
                    <h4>下载APP<span class=" red">送888元礼包</span></h4>
                    <p class=" gray">新手专享</p>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
                </div>
                <div class=" item">
                    <ul>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
                        <h4 class=" red">领128元新手礼包</h4>
                        <p class=" gray">立即开通</p>
                    </li>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100">
                        <h4>打白条 <span class=" red">享免息</span></h4>
                        <p class=" gray">立即开通享豪礼</p>
                    </li>
                    </ul>
                </div>
            </div>
        </Pannel>
        <money></money>
        <homeswiper></homeswiper>
        <newproduct></newproduct>
        <JDInfo></JDInfo>
        <!-- <SwiperComponents></SwiperComponents> -->
    </div>
</template>
<script>  
import SwiperComponent from '@/components/Swiper'
import SingerPAnnel from '@/components/singerPAnnel' 
import Pannel from '@/components/Pannel' 
import money from './money'
import newproduct from './newproduct'
import homeswiper from './homeswiper'
import JDInfo from '../JDInfo'
// import axios from 'axios'

export default {
    name: 'home',
    props: {
    
    },
    data() {
        return {
            title:"新手特权",
            cpclass:'cpclass',
            options:{
                loop:true,
                autoplay:true,
                pagination: {
                    el: ".swiper-pagination"
                },
            },
            panel:'',
            items: [{
                href: 'home',
                src: 'https://img12.360buyimg.com/jrpmobile/jfs/t15841/116/2678213635/24286/b0e919db/5ab386c2Ndc61eee8.jpg'
            },
            {
                href: 'home',
                src: 'https://img12.360buyimg.com/jrpmobile/jfs/t14677/259/2692320740/48815/dc123010/5ab386a9N6d74c344.jpg'
            },
            {
                href: 'home',
                src: 'https://img12.360buyimg.com/jrpmobile/jfs/t15676/247/2538809957/41087/aac15da2/5ab3869eN9282380d.jpg'
            }
            ],
            enters: [{
                href: 'home',
                img: 'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                title: '优惠券'
            },
            {
                href: '/freePacket',
                img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                title: '领红包'
            },
            {
                href: 'home',
                img: 'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                title: '抢钢镚'
            },
            {
                href: 'home',
                img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                title: '白条提额'
            },
            {
                href: 'home',
                img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
                title: '工资理财'
            },
            {
                href: 'home',
                img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
                title: '众筹'
            },{
                href: 'home',
                img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90',
                title: '租房'
            },
            {
                href: 'home',
                img: 'https://img12.360buyimg.com/jrpmobile/jfs/t27088/243/2089650291/12365/2469f395/5bf677f9N795eec5e.png?width=120&height=120',
                title: '车主服务'
            },]
        }
    },
    components:{
        SwiperComponent,
        Pannel,
        money,
        homeswiper,
        newproduct,
        JDInfo,
        SingerPAnnel
        // SwiperComponents
    },
    mounted() {
   
    },
}
</script>
<style scoped  lang="sass">
@import "~swiper/dist/css/swiper.css"
@import '../../assets/css/element.scss'
.home
    padding-bottom:80px
    .cpclass
        @include panel
        font-size: 14px
    .panel
        width: 100vw
        @include panel
    .content
        @include list(row)
        border:1px solid #ddd
        .item
            width: 50%
            box-sizing: border-box
            &:first-child
                text-align: center
                border-right: 1px solid #ddd
            img
                width: 102px
                height: 102px
                margin: 20px auto
            h4
                font-size: 14px
                line-height: 40px
            .red
                color: #f00
            .gray
                font-size: 14px
                color: #999
            p
                margin-top: 6px
                font-size: 14px
            ul
                width: 100%
                li
                    height: 100px
                    width: 100%
                    box-sizing: border-box
                    position: relative
                    &:first-child
                        border-bottom: 1px solid #ddd
                h4
                    white-space: nowrap
                    text-overflow: ellipsis
                    overflow: hidden
                    text-align: center
                    padding-top:20px
                    width: 70%
                    font-size: 14px
                p
                    text-align: center
                    width: 70%
                    font-size: 14px
                img 
                    width: 30%
                    height: 60px
                    float: right
                  
    

</style>