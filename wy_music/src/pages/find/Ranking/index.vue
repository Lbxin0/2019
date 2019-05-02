<template>
    <div class='index'>
        <div class="RankingNav">
            <div class="NavList" v-for="item in DNavList" :key="item.name" @click="ViewRanking(item.idx)">
                <router-link :to="{path:item.idx,query:{RankingData:RankingData}}">
                    {{item.name}}
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    name: 'index',
    data() {
        return {
            RankingData:'%5Bobject%20Object%5D',
            DNavList:[
                {
                    idx:"17",
                    name:"华语金曲"
                },{
                    idx:"1",
                    name:"热歌榜"
                },{
                    idx:"3",
                    name:"飙升榜"
                },{
                    idx:"5",
                    name:"UK排行榜"
                },{
                    idx:"7",
                    name:"KTV嗨榜"
                },{
                    idx:"8",
                    name:"iTunes榜"
                },{
                    idx:"9",
                    name:"韩国Melon"
                },{
                    idx:"15",
                    name:"中国TOP"
                },{
                    idx:"13",
                    name:"韩国原声榜"
                }
            ]
        }
    },
    methods: {
        ViewRanking(idx){
            // console.log(idx);
            Axios.get(`/top/list?idx=${idx}`)
            .then(res=>{
                console.log(res.data.playlist);
                this.RankingData=res.data.playlist
            }
            ).catch(err=>{
                console.log(err);
            })
        }
    },
}
</script>
<style scoped lang='less'>
    .index{
        width:100vw;
        .RankingNav{
            // width:100vw;
            height:4rem;
            line-height:4rem;
            overflow-x: scroll;
            &::-webkit-scrollbar{
                display:none;
            }
            white-space: nowrap;
            background:red;
            margin-top:1px;
            font-size: 1.3rem;
            position: fixed;
            top: 5rem;
            z-index: 111;
            .NavList{
                padding:0 1.4rem;
                text-align: center;
                display:inline-block;
                a{
                    color:#e4e4e4;
                    padding-bottom:0.5rem;
                    &.router-link-active{
                        color:#fff;
                        border-bottom:2px solid #fff;
                    }
                }
                
            }
        }
    }
</style>