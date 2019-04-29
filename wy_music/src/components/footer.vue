<template>
  <div class="hello" @click="closeplay()">
      <router-link  to="/find" class="find active"> <span></span> 发现</router-link>
      <router-link  to="/video" class="video"><span></span>视频</router-link>
      <router-link  to="/music" class="own"><span></span>歌单</router-link>
      <router-link  to="/Lvideo" class="own"><span></span>小视频</router-link>
      <router-link  to="/account" class="account"><span></span>账号</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['iframeState'],
  methods: {
      closeplay(){
        // this.$emit('changeiframeState','true')
        // console.log(iframeState);
        
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .hello{
        width:100vw;
        // border: 1px solid red;
        display: flex;
        position: fixed;
        bottom: 0;
        background: rgb(240, 240, 240);
        // padding: 0.3rem 0px;
        font-size: 1.6rem;
        .router-link-active{
            color: red;
        }
        >a{
            flex:1;
            text-align: center;
            color: rgb(22, 22, 22);
            text-decoration: none;
            line-height: 1;
            margin-bottom: -0.2rem;
            padding:0.6rem 0;
            // &.active{
            //     color: rgb(219, 20, 20);
            // }
            span{
                margin: 0 auto;
                height: 2rem;
                margin-bottom: 0.2rem;
            }
        }
        .find{
            span{
                display: block;
                width: 50%;
                background: url('../assets/footer-nav/finda.png') center  no-repeat;
                background-size: contain;
            } 
        }
          .video{
            span{
                display: block;
                width: 50%;
                background: url('../assets/footer-nav/video.png') center  no-repeat;
                background-size: contain;
            } 
        }
          .own{
            span{
                display: block;
                width: 50%;
                background: url('../assets/footer-nav/friend.png') center  no-repeat;
                background-size: contain;
            } 
        }
          .account{
            span{
                display: block;
                width: 50%;
                background: url('../assets/footer-nav/account.png') center  no-repeat;
                background-size: contain;
            } 
        }
    }
</style>
