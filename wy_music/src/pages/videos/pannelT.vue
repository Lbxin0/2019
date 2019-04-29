<template>
    <div  class='panelClass' :class="[panelClass,cpclass]">
        <h4 style="z-index:-1">-&nbsp;{{title}}&nbsp;- <slot name="titleadd" class="titleadd"></slot> </h4>
        <slot ></slot>
    </div >
</template>
<script>
export default {
    name: 'pannel',
    props: {
        cname:{
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        cpclass:{
            type:String
        }
    },
    data(){
     return {
        panelClass: 'panelClass'
     }
    }
}
</script>
<style scoped lang='less'>
.panelClass{
    margin-bottom:0;
    color:#000;
    >h4{
        font-size:20px;
        height:60px;
        line-height:60px;
        position:relative;
        .titleAdd{
            position:absolute;
            top:50%;
            transform:translatey(-50%);
            // right:10px;
            font-size:14px;
            color:#999;
        }
    }
}
</style>