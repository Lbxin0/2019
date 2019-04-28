<template>
    <!-- <div class="pannelitem" v-for="(item.index) in adurllist" :key="index" @click="openvideo(item.id,item.artists[0].id)">
            <img :src="item.cover" alt="">
            
            <p class="txtover">{{item.name}}</p>
            <p class="txtover" style="color:#797979">{{item.artistName}}</p>
    </div> -->
    <div class="ddd"></div>
</template>
<script>
export default {
    props:{
        adurllist
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="less" scoped>
    .pannelitem{
        // flex: 1;
        width: 49%;
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
            font-size: 12px;
            height: 22px;
            &:nth-child(3){
            font-size: 11px;
            color: #bbb
            }
        }
    }
</style>


