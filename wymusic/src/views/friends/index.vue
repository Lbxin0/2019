<template>
    <div class='index'>
        <Header>
            <div class="singfind" slot="headeL"></div>
            <div class="searchson" slot="headeC">
               <span class="active">动态</span>
               <span>附近</span>
            </div>
        </Header>
    </div>
</template>
<script>
import Header from '@/components/HeaderNav'
export default {
    name: 'index',
    props: {
    
    },
    components:{
        Header
    }
}
</script>
<style scoped lang='less'>
    .index{
        .singfind{
            background: url('../../assets/images/icon/addfriend.png') center no-repeat / 100% 100%;
            background-size:contain;
            height:100%;
        }
        .searchson{
            height:100%;
            width:60%;
            margin:0 auto;
            font-size: 1.6rem;
            border:1px solid rgba(255,0,0,.5);
            border-radius: 1.25rem;
            >span{
                display: inline-block;
                width:50%;
                text-align: center;
                box-sizing: border-box;
                border-radius: 1.25rem;
            }
            .active{
                background:red;
                color: #fff;
            }
        }
    }
</style>