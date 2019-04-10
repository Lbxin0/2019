<template>
    <div class='JDInfo'>
        <slot name="JDInfoAdd"></slot>
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
    
    }
}
</script>
<style scoped lang='sass'>
    .JDInfo
        width:100vw
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
</style>