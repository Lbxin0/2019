<template>
    <div class='book'>
        <div class="bookNav">
            <router-link to="/source/book/FrontEnd" class="">前端</router-link>
            <router-link to="/source/book/BackEnd">后端</router-link>
            <router-link to="/source/book/Server">服务端</router-link>
            <router-link to="/source/book/Other">其他</router-link>
        </div>
        <div class="bookContainer">
            <transition name="fade">
                <router-view class="routerViewCon"></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: 'book',
    props: {
    
    },
    data() {
        return {
            fade:"FadeAnimation"
        }
    },
}
</script>
<style scoped lang='less'>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.routerViewCon{
    // transition: all 2s linear;
    opacity: 1;
}
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