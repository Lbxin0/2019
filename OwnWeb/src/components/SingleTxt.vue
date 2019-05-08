<template>
    <div class='SingleTxt'>
        <div class="TxtItem">
            {{Title}} <span class="TxtNum">{{TxtNum}}篇</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SingleTxt',
    props: {
        Title:{
            type:String,
            require:true
        },
        TxtNum:{
            type:Number,
            require:true
        }
    }
}
</script>
<style scoped lang='less'>
    .SingleTxt{
        widows: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        padding:0 0.5rem;
        .TxtItem{
            height: 2.5rem;
            line-height: 2.5rem;
            font-size: 1.4rem;
            color: #ffa200;
            .TxtNum{
                font-size: 1.2rem;
                color: #858585;
                float: right;
            }
        }
    }
</style>