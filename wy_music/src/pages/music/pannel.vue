<template>

    <div class="contaier">
        <Banner :to-banner=adurllist @sendsonurl="receivesonurl(arguments)"></Banner>
    </div>

</template>
<script>
import axios from 'axios'
import Banner from './banner.vue'
export default {
    components:{
        Banner
    },
    methods:{
        receivesonurl(sonurl,sonitem){
            let that=this;
            // alert(sonitem);
            // console.log('--urlurlurlurlurlurlurlurl');
            that.sonurl=sonurl;
            that.$emit('sendsonurl',that.sonurl,sonitem)
        }
    },
    data(){
        return{
           adurllist:[],
           singerid:'',
           sonurl:'',
           swiperOption: {
              slidesPerView: 1,  //设置slider容器能够同时显示的slides数量(carousel模式)。
              autoplay: {
                 delay: 2000,
                  stopOnLastSlide: false,
                  disableOnInteraction: false,
              },
              loop: true,
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true
              },
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  hideOnClick: false,
              }
                }
        }
    },
    // props:['adUrl','adurlHeader'],
    created() {
        let that=this;
        axios.get('/toplist/artist').then(function(res){
            // console.log(JSON.stringify(res.data.list.artists))
         that.adurllist=res.data.list.artists.slice(0,30);
         }).catch(function(err){
            //  alert(err)
             console.log(err);
         })
         
    },
}
</script>
<style lang="less" scoped>
.txtover{
    overflow: hidden;
    text-overflow:ellipsis;//文本溢出显示省略号
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.contaier{
    box-sizing: border-box;
    // margin-top: 10px;
    // display: flex;
    // flex-wrap: wrap;
    // flex-direction: row;
    .header{
        width: 100%;
        text-align: left;
        // padding:0 0 10px 15px;
        padding-bottom: 10px;
    }
    .pannelitem{
        // flex: 1;
        width: 32%;
        display: inline-block;
        margin-right: 2px;
        &:last-child{
        margin-right: 0px;
        }
        img{
            width: 100%;
            border-radius: 3px;
        }
        p{
            font-size: 13px;
            height: 32px;
        }
    }
}
</style>
