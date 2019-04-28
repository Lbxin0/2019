<template>
    <div class="container">
        <header>
            pannelT
        </header>
        <banner 
            :bannerurl='sonurl'
        />
        <!-- <pannelT :adUrl='adUrl'></pannelT> -->
    </div>
</template>
<script>
import banner from '../../components/BannerComponent'
// import pannelT from '../../components/pannelT'
export default {
    data() {
        return {
         pannelid:'',
         sonurl:'/related/playlist?id=1',
         adUrl:"/top/playlist/highquality"
        }
    },
    created() {
        
    },
    components:{
        banner,
        // pannelT
    },
    mounted() {
        let that=this;
        that.pannelid=that.$route.params.pannelid;
    },
}
</script>
<style lang="less" scoped>
    .container{
        width: 100vw;
        header{
            width: 100%;
            .soninfo{
                height: 4rem;
                border:1px solid red; 
            }
        }
    }
</style>
