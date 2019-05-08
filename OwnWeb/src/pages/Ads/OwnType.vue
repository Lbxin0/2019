<template>
    <div class='OwnType'>
        <ads-pannel :title="Type">
          <div class="TypeList" slot="PannelItem" v-for="(item, index) in TypeList" :key="index">
            <single-txt :Title="item.SingleTxtTitle" :TxtNum="item.SingleTxtTxtNum"></single-txt>
          </div>
        </ads-pannel>
    </div>
</template>
<script>
import SingleTxt from '@/components/SingleTxt.vue'
import AdsPannel from '@/components/AdsPannel.vue'
export default {
    name: 'OwnType',
    data() {
        return {
            Type:"个人分类",
            SingleTxtTitle:"HTML+CSS",
            SingleTxtTxtNum:25,
            TypeList:[
                {
                    SingleTxtTitle:"HTML+CSS",
                    SingleTxtTxtNum:25
                },{
                    SingleTxtTitle:"JavaScript",
                    SingleTxtTxtNum:35
                },{
                    SingleTxtTitle:"vue",
                    SingleTxtTxtNum:50
                },{
                    SingleTxtTitle:"less",
                    SingleTxtTxtNum:25
                }
            ]
        }
    },
    components:{
        SingleTxt,
        AdsPannel,
    }
}
</script>
<style scoped lang='less'>
    .OwnType{
        width:100%;
        padding-bottom: 0.5rem;
        .TypeList{
            width:100%;
            color: rgb(255, 162, 0);
            font-size: 1.2rem;
            text-transform: capitalize;
        }
    }
</style>