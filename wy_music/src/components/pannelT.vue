<template>
    <div class="contaier">
        <div class="header">{{adurlHeader}}</div> 
        <div class="pannelitem" v-for="item in adurllist" :key="item.id" @click="openpannel(item.id)">
            <!-- <router-link :to="{name:'pannelT', params:{pannelid: item.id} }" @click="pannelview(item.id)"> -->
            <!-- <router-link to="/find/pannelT" @click="pannerid()"> -->
                <span class="playcount" v-if="item.playCount"> {{item.playCount|playCount}}万</span>
            <router-link :to="{path:'/find/pannelT',query:{pannerid:item.id}}">
                <img :src="item.picUrl" alt="">{{item.id}}
                <p class="">{{item.name}}</p>
            </router-link>
           
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    filters:{
        playCount:function(val){
            let newval=val/10000;
            return newval.toString().split('.')[0]
        }
    },
    data(){
        return{
            adUrls:'',
            // adurlHeader:'',
            adurllist:[]
        }
    },
    methods: {
        pannerid(){
            this.$emit('changepannerid',false)
        },
        openpannel(id){
         axios.get(`/playlist/detail?id=${id}`).then(function(res){
            // alert(JSON.stringify(res))
        //  console.log(JSON.stringify(res)+"====================================");
        //  that.adurllist=res.data.result.slice(0,6);
         }).catch(function(err){
            //  alert(err)
             console.log(err);
         })
        }
    },
    props:['adUrl','adurlHeader'],
    created() {
        axios.get('/login/cellphone?phone=15101366030&password=Lbxin0516').then(function(res){
            // console.log(res);
            // alert(res)
        }).catch(function(err){
            console.log(err);
            
        })
    let that=this;
        axios.get(this.adUrl).then(function(res){
            // alert(JSON.stringify(res))
        //  console.log(JSON.stringify(res.data)+"====================================");
         that.adurllist=res.data.result.slice(0,6);
         }).catch(function(err){
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
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
    color: #000;
    // display: flex;
    // flex-wrap: wrap;
    // flex-direction: row;
    .header{
        width: 100%;
        text-align: left;
        // padding:0 0 10px 15px;
        padding-bottom: 10px;
        font-size: 1.4rem;
    }
    .pannelitem{
        // flex: 1;
        width: 32%;
        display: inline-block;
        margin-right: 2px;
        position: relative;
        .playcount{
            width: 60px;
            text-align: right;
            position: absolute;
            top: 5px;
            right: 5px;
            color: #fff;
            font-size: 12px;
            background:rgba(204, 204, 204,.6) url('../assets/icon/playson.png') left no-repeat / 90% 90%;
            background-size:contain;
        }
        &:last-child{
        margin-right: 0px;
        }
        img{
            width: 100%;
            border-radius: 3px;
        }
        p{
            font-size: 13px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:2;

            
        }
    }
}
</style>
