<template>
  <div class="JDHeader">
    <div class="login">
      <span>登录</span>&nbsp;|
      <span>注册</span>
    </div>
    <div class="download">APP下载</div>
  </div>
</template>

<script>
export default {
  name: 'JDHeader',
  props: {
  }
}
</script>

<style scoped lang="less">
.JDHeader{
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ddd url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png") no-repeat center center;
  background-size:auto 40%;
  -webkit-background-color: #ddd;
  z-index:100;
  // border:1px solid red; 
  .login{
    float: left;
    font-size: 20px;
    height: 36px;
    line-height: 36px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin:auto;
    margin-left: 10px;
  }
  .download{
    font-size: 18px;
    border-width: 0;
    height: 36px;
    line-height: 36px;
    min-width: 70px;
    padding: 0;
    border-radius: 4px;
    padding: 0 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    background: red;
    margin: auto;
  }
}
</style>
