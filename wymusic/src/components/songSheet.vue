<template>
    <div class='songSheet'>
        <div class="sonItem">
            <img src="http://p1.music.126.net/ZaGxRKrE8A96F74Vt-dPrQ==/109951164001276099.jpg" alt="" >
            <slot name="son-itemAdd" class="sonItemAdd"></slot>
        </div>
        <div class="sonInfo">滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚滚</div>
    </div>
</template>
<script>
export default {
    name: 'songSheet',
    props: {
        songSheet:{
            type:Array,
            require:true
        }
    }
}
</script>
<style scoped lang='less'>
    .songSheet{
        height: 15rem;
        width:15rem;
        border:1px solid red;
        .sonInfo{
            font-size: 1.3rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            // text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 2;
        }
        .sonItem{
            height:75%;
            position: relative;
            .sonItemAdd{
                width:4.5rem;
                height:1.5rem;
                line-height:1.5rem;
                text-align: right;
                position: absolute;
                top: 0;
                right:0;
                color:#fff;
                background:rgba(238, 238, 238,.35) url('../assets/images/icon/playson.png') left no-repeat / 100% 100%;
                background-size:25%;
                
            }
            img{
                width:100%;
                height:100%
            }
        }
    }
</style>