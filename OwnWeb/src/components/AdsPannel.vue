<template>
    <div class='AdsPannel'>
        <h2 class="PannelTitle">{{title}}</h2>
        <slot name="PannelItem" class="PannelItem">
            <p>暂无数据</p>
        </slot>
    </div>
</template>
<script>
export default {
    name: 'AdsPannel',
    props: {
        title:{
            type:String,
            require:true
        }
    }
}
</script>
<style scoped lang='less'>
    .AdsPannel{
        width:100%;
        .PannelTitle{
            width: 100%;
            // text-align: center;
            padding-left: 0.5rem;
            box-sizing: border-box;
            height:3rem;
            line-height:3rem;
            background:#f5f5f5;
            color: #3d3d3d;
            font-size: 1.2rem;
        }
        .PannelItem{
            width:100%;
            color:red;
            display: block;
            border:1px solid red; 
            padding:0 2.5rem!important;
        }
    }
</style>