<template>
  <div id="JDFooter">
    <router-link to="/SaveMoney/BorrowM" class="active">
      <img
        src="//img10.360buyimg.com/mcmktadmin/jfs/t1/28343/2/3984/3593/5c2dbaa5E3e2248bd/ebeb40d228ee4850.png?width=100&height=100"
      >
    </router-link>
    <router-link to="/SaveMoney/SaveM" >
      <img
        src="//img10.360buyimg.com/mcmktadmin/jfs/t1/37217/29/2925/2724/5cba86d6E10d99f00/752796fb2c27b103.png?width=100&height=100"
      >
    </router-link>
    <router-link to="/SaveMoney/MyM" >
      <img
        src="//img10.360buyimg.com/mcmktadmin/jfs/t1/15095/8/3228/4955/5c257e55Ee81402a8/152db759c0a8e55f.png?width=100&height=100"
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "JDFooter",
  components: {},
  methods: {
    // FooterHide(){
    //   this.$store.commit('FooterHide')
    // }
  },
};
</script>

<style lang="less" scoped>
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
  .router-link-active {
      border:1px solid red;
  }
}
</style>
