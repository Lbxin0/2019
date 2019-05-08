<template>
    <div class='communityPannel'>
        <!-- {{$route.params.type}} -->
        <div class="PannelContainer" v-for="(item,index) in DCommunity" :key="index">
            <a :href="item.href">
                <img :src="item.src" :alt="item.title">
                <div class="communityInfo">
                    <h3>{{item.title}}</h3>
                    <h4>{{item.introduce}}</h4>
                    <h5>{{item.Enintroduce}}</h5>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'communityPannel',
    data() {
        return {
            CommunityList:[],
            DCommunity:'Designer',
            DCommunityList:[],
            routeParams:""
        }
    },
    watch: {
        routeParams(newval){
            this.DCommunity=this.CommunityList[newval+"Community"];
            // console.log(this.bookList[newval+"Books"]);
        },
        $route(to,from){
            // console.log(to.path.split('/')[3]);
            this.routeParams=to.path.split('/')[3];
            console.log(this.routeParams);
            
        }
    },
    props: {
    
    },
    mounted() {
        axios.get('https://x0516.github.io/SourceData/json/Community.json').then(res=>{
            this.CommunityList=res.data;
            this.DCommunity=this.CommunityList[this.DCommunity+"Community"];
            
        }).catch(err=>{
            console.log(err);
        })
    },
}
</script>
<style scoped lang='less'>
    .communityPannel{
        width:100%;
        background:rgb(187, 187, 187);
        .PannelContainer{
            width:31%;
            display:inline-block;
            margin:1%;
            height:18rem;
            position: relative;
            color: rgb(255, 0, 242);
            z-index: 0;
            &::after{
                content:"";
                display: block;
                position: absolute;
                top:-2px;
                left: -2px;
                right: -2px;
                bottom:-2px;
                background:red;
                z-index: -2;
                background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
                filter: blur(8px);
                opacity: 0;
                transition-duration: 1s;
            }
            &:hover{
                &::after{
                    opacity: 1;
                }
            }
            &::before{
                content:"";
                display: block;
                position: absolute;
                top:0px;
                left: 0px;
                right: 0px;
                bottom:0px;
                background:#fff;
                z-index: -1;
            }
            a{
                color: rgb(255, 0, 242);
                text-decoration: none;
                transition-duration: 1s;
                &:hover{
                    color:rgb(226, 4, 4);
                }
            }
            img{
                position: absolute;
                width:100%;
                height:100%;
            }
            .communityInfo{
                width:100%;
                position: absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                text-align: center;
                h3{
                    // height: 4rem;
                    line-height: 4rem;
                    font-size: 2.0rem;
                    font-weight: bolder;
                }
                h4{
                    // height: 3rem;
                    line-height: 3rem;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                h5{
                    // height: 2rem;
                    line-height: 2rem;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
            }
        }
    }
</style>