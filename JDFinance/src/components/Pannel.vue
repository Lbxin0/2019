<template>
    <div  class='panelClass' :class="[panelClass,cpclass]">
        <h4 :class="panelTitleClass? 'panelTitleClass':''">-&nbsp;{{title}}&nbsp;- <slot name="titleadd" class="titleadd"></slot> </h4>
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
        },
        panelTitleClass:{
            type:Boolean
        }
    },
    data(){
     return {
        panelClass: 'panelClass'
     }
    }
}
</script>
<style scoped lang='sass'>
@import '../assets/css/element.scss'
.panelClass
    @include panel
    margin-bottom:0
    >h4
        font-size:20px
        height:60px
        line-height:60px
        .titleAdd
            top:50%
            font-size:14px
            color:#999
    .panelTitleClass
        text-align: left
</style>