<template>
    <div class='SigerrPannel'>
        <div class="list">
            <div class="item" v-for="item in enters" :key="item.img" :style="PannelClass">
                <router-link :to="item.href">
                <img :src="item.img" :alt="item.desc">
                <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SigerrPannels',
    props: {
        enters:{
            type:Array,
            require:true
        },
        PannelClass:{
            type:String
        }
    }
}
</script>
<style scoped lang='less'>
    .SigerrPannel{
        width:100%;
        .list{
            display: flex;
            padding:5px 0;
            justify-content: center;
            flex-wrap: wrap;
            align-items:center;
            width:100vw;
            .item{
                text-align: center;
                display:flex;
                width:24vw;
                padding:7px 0;
                a{
                    text-decoration: none;
                    color:#333;
                    img{
                        display: block;
                        width:55%;
                        border-radius: 50%;
                        margin: 0 auto;
                    h4{
                        font-size: 18px;
                        margin-top: 12px;
                        color: #666;
                        }
                    }
                }
            }
        }
    }
</style>