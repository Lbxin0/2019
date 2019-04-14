<template>
    <div class='index'>
        <Header>
            <div class="singfind" slot="headeL"></div>
            <div class="searchson" slot="headeC">
               <span>我的音乐</span>
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
            background: url('../../assets/images/icon/cloud.png') center no-repeat / 100% 100%;
            background-size:contain;
            height:100%;
        }
        .searchson{
            height:100%;
            font-size: 1.6rem;
        }
    }
</style>