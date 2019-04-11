<template>
    <div class='crowdfunding'>
        <TopSwiper></TopSwiper>
        <Pannel :title="title" :cpclass="cpclass">
            <span
                slot="titleadd"
                class="titleadd"
                style="
                        position:absolute;
                        right:10px;
                        font-size:14px;
                        color:#999;

                    "
                >
                不抢白不抢 >
            </span>
        </Pannel>
        <section>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
        </section>
        <AdviceGoods></AdviceGoods>
        <MoreWelfare :title="MoreWelfareTitle" :titleadd="MoreWelfareTitleAdd" :sectionArray="sectionArray"></MoreWelfare>
        <JDinfo></JDinfo>
    </div>
</template>
<script>
import TopSwiper from './topswiper' 
import AdviceGoods from './AdviceGoods' 
import Pannel from "@/components/Pannel"  
import MoreWelfare from "./MoreWelfare"
import JDinfo from "../JDInfo";  
export default {
    name: 'crowdfunding',
    components: {
        TopSwiper,
        Pannel,
        AdviceGoods,
        MoreWelfare,
        JDinfo
    },
    data() {
        return {
            title:"每日签到",
            cpclass:"cpclass",
            MoreWelfareTitle:"更多福利",
            MoreWelfareTitleAdd:"专享福利",
            sectionArray:[
                {src:"//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330"},
                {src:"//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330"},
                {src:"//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330"}
            ]
        }
    },
}
</script>
<style scoped lang='sass'>
    .crowdfunding
        padding-bottom:60px
        .cpclass
            margin-top: 20px
        section
            width: 100%
            img
                width:50%
                margin:0
                padding:0
</style>