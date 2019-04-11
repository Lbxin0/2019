<template>
    <div class='MoreWelfare'>
        <Pannel :title="Dtitle">
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
                {{Dtitleadd}} >
            </span>
        </Pannel>
        <section style="margin-top:1px" v-for="item in DsectionArray" :key="item.src">
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
            Dtitle:this.$props.title,
            Dtitleadd:this.$props.titleadd,
            DsectionArray:this.$props.sectionArray
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