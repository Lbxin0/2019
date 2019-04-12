<template>
  <div class="newproduct">
    <Pannel :title="title" style="position:relative">
      <span slot="titleadd"
        class="titleadd"
        style="
                position:absolute;
                right:10px;
                font-size:14px;
                color:#999;

            "
      >更多尖货 ></span>
      <div class="productlist">
          <div class="list" >
                <div class="itenlist" v-for="item in productlist" :key="item.src">
                    <img :src="item.src" alt="">
                </div>
          </div>
      </div>
    </Pannel>
  </div>
</template>
<script>
import Pannel from "@/components/Pannel";
export default {
  name: "newproduct",
  props: {},
  data() {
    return {
      title: "众筹新品",
      productlist: [
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/30149/40/8970/20149/5ca2e84dE7641a4dc/342b926b8582a140.jpg?width=335&height=421"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421"
        },
        {
            href:"home",
            src:"//img12.360buyimg.com/jrpmobile/jfs/t1/19514/33/13824/16597/5ca2e84eE4b9cc39a/23b319b8846b585c.png?width=335&height=421"
        }
      ]
    };
  },
  components: {
    Pannel
  }
};
</script>
<style scoped lang='sass'>
.productlist
        width:100vw
        text-align: left
        overflow:hidden
        .itenlist
            display: inline-block
            width:110px
            margin:0 5px
        img
            width:100%
            height:auto
            display:inline-block
</style>