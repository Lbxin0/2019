<template>
    <div class='book'>
        <div class="bookNav">
            <router-link to="/source/Community/Designer" class="">设计师</router-link>
            <router-link to="/source/Community/Web">Web端</router-link>
            <router-link to="/source/Community/Picture">灵感图库</router-link>
            <router-link to="/source/Community/Txt">杂志文本</router-link>
        </div>
        <div class="bookContainer">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'book',
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
    .book{
        width:100%;
        display:flex;
        border-top: 1px solid rgba(138, 138, 138,0);
        .bookNav{
            flex:1;
            background: rgba(138, 138, 138,.9);
            a{
                text-decoration:none;
                color:#000;
                height: 4rem;
                line-height: 4rem;
                display: block;
                text-align: center;
            }
        }
        .bookContainer{
            flex:4;
            margin-left: 0.1rem;
            box-sizing: border-box;
        }
    }
</style>