<template>
    <div class='index'>
        <Header>
            <div class="singfind" slot="headeL"></div>
            <div class="searchson" slot="headeC">
                <input type="text" name="SearchSon" id="" placeholder="搜索热门歌曲">
            </div>
        </Header>
        <div class="awiper">
            <Swiper :SwiperList="SwiperList" :options="options"></Swiper>
        </div>
    </div>
</template>
<script>
import Header from '@/components/HeaderNav'
import Swiper from '@/components/swiper'
import axios from 'axios'
export default {
    name: 'index',
    data() {
        return {
            SwiperList:[],
            options:{
                loop:true,
                autoplay:true,
                pagination: {
                    el: ".swiper-pagination"
                },
            },
        }
    },
    components:{
        Header,
        Swiper
    },
    mounted() {
        axios.get('/banner').
            then(res=>{
                console.log(res.data.banners);
                this.SwiperList=res.data.banners
                
            }).
            catch(err=>{
                console.log(err);
                
            })
    },
}
</script>
<style scoped lang='less'>
    .index{
        .awiper{
            width:95%;
            margin:0 auto;
            border-radius:1rem;
            overflow: hidden;
            margin-top:1rem;
        }
        .singfind{
            background: url('../../assets/images/icon/phone.png') center no-repeat / 100% 100%;
            background-size:45%;
            height:100%;
        }
        .searchson{
            height:100%;
            input{
                border:none;
                width:95%;
                height:90%;
                border-radius:1.2rem;
                text-align: center;
                outline: none;
                padding:0 0.4rem;
                box-sizing: border-box;
                background: #ebecec url('../../assets/images/icon/search.png') left no-repeat / 100% 100%;
                background-size:contain;
            }
        }
    }
</style>