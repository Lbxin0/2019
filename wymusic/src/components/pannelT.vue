<template>
    <div class='pannelT'>
        <div class="pannelHeade">
            <h1 class="pannelTitle">{{pannelTitle}}</h1>
            <h4 class="pannelInfo">{{pannelInfo}}</h4>
        </div>
        <slot name="my-header"></slot>
    </div>
</template>
<script>
export default {
    name: 'pannelT',
    props: {
        pannelTitle:{
            type:String,
            require:true
        },
        pannelInfo:{
            type:String,
        }
    }
}
</script>
<style scoped lang='less'>
    .pannelT{
        .pannelHeade{
            width:100%;
            height:2.5rem;
            line-height:2.5rem;
            h1,h4{
                display:inline-block;
            }
            .pannelTitle{
                width:25%;
                text-align: center;
                color:#000;
                font-weight:bold;
                float: left;
                font-size: 1.6rem;
            }
            .pannelInfo{
                width:20%;
                float:right;
                text-align: center;
                border:1px solid #eee;
                border-radius:1.25rem;
                font-size: 1.2rem;
            }
        }
    }
</style>