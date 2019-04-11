<template>
    <div class='topswiper'>
        <div class="swiperlist" v-for="item in swiperlist" :key="item.title">
            <transition name="slide-fade">
                <div class="listitem" v-if="swiperindexD==item.index">{{item.title}}</div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: 'topswiper',
    props: {
    
    },
    data() {
        return {
            swiperlist:[
                {title:"签到领流量，1元500M！",index:0},
                {title:"百万白条券免费送，速来领取！！  ",index:1},
                {title:"京东券完任务免费送，速来领取！ ",index:2},
                {title:"签到领取商品券，GoGo！ ",index:3},
                {title:"签到升等级,行动起来吧",index:4},
            ],
            swiperindexD:0
        }
    },
    mounted() {
        this.setTimer()
    },
    methods: {
        setTimer: function () {
            let that=this,
                listlength=this.swiperlist.length-1;
　　　　    this.timer = setInterval( () => {
                if (this.swiperindexD>=listlength) {
                    this.swiperindexD=0
                } else {
                    this.swiperindexD++
                }
　　　　　}, 2500)
　　    }
    },
    distroyed: function () {
　　    clearInterval(this.setTimer)
    }
}
</script>
<style scoped lang='sass'>
    .topswiper
        width:100%
        height:45px
        line-height:45px
        background:#fff url('//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png') left center no-repeat
        background-size:25%
        overflow: hidden
        margin:10px 0
        .swiperlist
            width:70%
            float: right
            font-size:14px
            text-align: left
            .slide-fade-enter-active
                transition: all .3s ease
            .slide-fade-enter
                transform: translateY(30px)
                opacity:1
            .slide-fade-leave-to
                transform: translateY(-10px)
                opacity: 0
            .listitem
                font-weight: bold

        
</style>