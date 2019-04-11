<template>
    <div class='MoreWelfare'>
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
                {{titleadd}} >
            </span>
        </Pannel>
        <section style="margin-top:1px" v-for="item in sectionArray" :key="item">
            <img :src="item.src" alt="">
        </section>
    </div>
</template>
<script>
import Pannel from "@/components/Pannel"
export default {
    name: 'MoreWelfare',
    props: {
        title:{
            type:String
        },
        titleadd:{
            type:String
        },
        sectionArray:{
            type:Array
        }
    },
    components:{
        Pannel
    },
    data() {
        return {
            title:this.$props.title,
            titleadd:this.$props.titleadd,
            sectionArray:this.$props.sectionArray
        }
    },
}
</script>
<style scoped lang='sass'>
    .MoreWelfare
        section
            width:33%
            display: inline-block
            img
                width:100%
                display
</style>