<template>
    <div class='headers'>
        <div class="headeL">
            <slot name="headeL">5</slot>
        </div>
        <div class="headeC">
            <slot name="headeC">2</slot>
        </div>
        <div class="musicPlay"></div>
    </div>
</template>
<script>
export default {
    name: 'headers',
    props: {
    
    }
}
</script>
<style scoped lang='less'>
    .headers{
        height:3rem;
        line-height:3rem;
        // border:1px solid red; 
        display: flex;
        justify-content: center;
        align-items: center;
        padding:.4rem 0;
        >div{
            text-align: center;
            width:100%;
            height:100%;
        }
        .headeL{
            flex:1
        }
        .headeC{
            flex:4
        }
        .musicPlay{
            flex:1;
            background: url('../assets/images/icon/play.png') center no-repeat / 100% 100%;
            background-size:45%
            
        }
    }
</style>