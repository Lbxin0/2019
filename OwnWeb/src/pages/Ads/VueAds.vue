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
import axios from 'axios'
export default {
    name: 'OwnType',
    data() {
        return {
            Type:"Vue资讯",
            SingleTxtTitle:"HTML+CSS",
            SingleTxtTxtNum:25,
            // axiosurl:"http://api01.idataapi.cn:8000/article/idataapi?apikey=XNujFrUdnYF6SZoU5kE5UHK8saiEfNKegwdPocPXYf6An2cmfZH6AWTIp5mzj11E&kw=&KwPosition=3&kwMode=3&sentiment=-1",
            // axiosurl:"http://api01.idataapi.cn:8000/article/idataapi?kw=vue&KwPosition=1&appCode=toutiao.com&size=20&publishDateRange=1554508800,1557100800&createDateRange=1554508800,1557100800&apikey=XNujFrUdnYF6SZoU5kE5UHK8saiEfNKegwdPocPXYf6An2cmfZH6AWTIp5mzj11E",
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
    mounted() {
        // axios.get(`${this.axiosurl}`).then(res=>{
        //     console.log(res);
        // }).catch(err=>{
        //     console.log(err);
        // })
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
        margin-top:0.5rem;
        .TypeList{
            width:100%;
            color: rgb(255, 162, 0);
            font-size: 1.2rem;
            text-transform: capitalize;
        }
    }
</style>