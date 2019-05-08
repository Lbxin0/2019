<template>
    <div class='Source'>
        <div class="SourceHeadNav">
            <router-link to="/source/book" class="">图书</router-link>
            <router-link to="/source/video">视频</router-link>
            <router-link to="/source/Community">社区</router-link>
            <router-link to="/source/blog">博客推荐</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Source',
    props: {
        
    }
}
</script>
<style scoped lang='less'>
    .router-link-active{
        color: #d9534f!important;
        font-weight: bold;
        font-size: 1.6rem;
        background: rgba(180, 180, 180, 0.5);
    }
    .Source{
        width: 100%;
        .SourceHeadNav{
            width:100%;
            height: 4rem;
            line-height: 4rem;
            background: rgba(138, 138, 138,.9);
            display:flex;
            a{
                flex:1;
                text-align: center;
                text-decoration: none;
                color: rgb(226, 226, 226);
                font-size: 1.4rem;
                letter-spacing: 0.3rem;
            }
        }
    }
</style>