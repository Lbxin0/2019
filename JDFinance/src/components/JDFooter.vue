<template>
  <div id="JDFooter">
    <router-link to="/home" class="active">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66"
        alt
        srcset
      >
      <span>首页</span>
    </router-link>
    <router-link to="/finance" >
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66"
        alt
        srcset
      >
      <span>理财</span>
    </router-link>
    <router-link to="/baitiao" >
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66"
        alt
        srcset
      >
      <span>白条</span>
    </router-link>
    <router-link to="/crowdfunding">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66"
        alt
        srcset
      >
      <span>众筹</span>
    </router-link>
    <router-link to="/relax">
      <img
        src="../assets/images/relax.png"
        alt
        srcset
      >
      <span>娱乐时刻</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "JDFooter",
  components: {}
};
</script>

<style lang="less" scope>
#JDFooter {
  width: 100%;
  height: 60px;
  // line-height: 80px;
  display: flex;
  position: fixed;
  bottom: 0;
  text-align: center;
  background: #fff;
  z-index:111;
  .router-link-active {
      color: red;
      background: #fff;
  }
  a {
    text-decoration: none;
    flex: 1;
    text-align: center;
    color: #656565;
    // &:link,
    // &:visited,
    // &:hover,
    // &:active{
    //   background: #fff;
    // }
    img {
      width: 40%;
      margin: 3px auto;
      display: block;
    }
    span {
      margin: 0 auto;
    }
  }
}
</style>
