<template>
    <div class='JDInfo'>
        <slot name="JDInfoAdd">
            <div class="list" slot="JDInfoAdd">
                <div class="item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
                </div>
            </div>
        </slot>
        <ul>
            <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'JDInfo',
    props: {
    
    },
    data() {
        return {
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
        }
    },
}
</script>
<style scoped lang='sass'>
    .JDInfo
        width:100vw
        margin-top:20px
        ul
            // background:#F5F5F5
            background:#fff
            li
                height:40px
                line-height:40px
                color:#999
                border-top:1px solid #ddd
                font-size:12px
                padding:6px 0
        .list
            display: flex
            padding:5px 0
            background:#fff
            justify-content: center
            padding:10px 0
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