<template>
    <div class='index'>
        <Header>
            <div class="singfind" slot="headeL"></div>
            <div class="searchson" slot="headeC">
                <input type="text" name="SearchSon" id="" placeholder="搜索热门歌曲">
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
            background: url('../../assets/images/icon/camera.png') center no-repeat / 100% 100%;
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
                background:#fff url('../../assets/images/icon/search.png') left no-repeat / 100% 100%;
                background-size:contain;
            }
        }
    }
</style>