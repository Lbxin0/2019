<template>
  <div class="HeaderNav">
    <div class="headercontainer">
        <!-- <div class="logo">马斯克---logo</div> -->
        <router-link to="/home" class="">首页</router-link>
        <router-link to="/blog">博客</router-link>
        <router-link to="/source">资源</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/life">生活</router-link>
        <router-link to="/Project">项目</router-link>
        <section class="login">
          <router-link to="/register">注册</router-link>
          <router-link to="/login">登录</router-link>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.router-link-active{
  color: #d9534f!important;
  font-weight: bold;
  transform: scale(1.2)
}
.HeaderNav{
  width: 100%;
  height:50px;
  line-height: 50px;
  background:#5674aa;
  box-sizing: border-box;
  .headercontainer{
    width:80%;
    height:100%;
    margin: 0 auto;
    display:flex;
    a{
      color: #fff;
      text-decoration: none;
      float: left;
      flex:1;
      text-align: center;
      letter-spacing: 0.3rem;
    }
    .logo{
      width:15%;
      float: left;
    }
    .login{
      width:15%;
      float: right;
      a{
        width:50px;
      }
    }
   
  }
}
</style>
