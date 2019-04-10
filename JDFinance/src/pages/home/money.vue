<template>
  <div class="money">
    <Pannel :title="title" :cpclass="cpclass">
        <section class="content">
            <ul>
                <li v-for="item in Ditems" :key="item.title">
                    <div class="title">
                        <span class="sub">{{item.title}}</span>
                        <span class="text" v-if="item.sub">{{item.sub}}</span>
                    </div>
                    <p class="percent">{{item.rate}}</p>
                    <p class="description">{{item.text}}</p>
                </li>
                 <!-- <li>
                    <div class="title">
                        <span class="sub">说不定</span>
                        <span class="text">eeeeeee</span>
                    </div>
                    <p class="percent">55%</p>
                    <p class="description">ggggggggg</p>
                </li> -->
            </ul>
        </section>
    </Pannel>
  </div>
</template>
<script>
import Pannel from "@/components/Pannel";
export default {
  name: "money",
  props: {
    items:{
      type:Array
    }
  },
  mounted() {
    if(this.$props.items){
      this.Ditems=this.$props.items
    }
  },
  data() {
    return {
      title: "理财精选",
      cpclass:"",
      Ditems: [
        {
          title: "定期理财",
          sub: "理财首选",
          rate: "5.60%",
          text: "历史年回报率"
        },
        {
          title: "小白理财",
          sub: "理财首选",
          rate: "4.22%",
          text: "7日年化收益率"
        },
        {
          title: "月月盈",
          sub: "养老保障",
          rate: "5%",
          text: "七日年化收益率"
        },
        {
          title: "小白基金",
          sub: "天天赚钱",
          rate: "4.27%",
          text: "7日年化收益率"
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
.money
    width:100%
    .content
        ul 
          width:100%
          li
            width:50%
            box-sizing: border-box
            display: inline-block
            color:#333
            padding:10px 10px
            border-bottom:1px solid #ccc
            position: relative
            &:nth-child(odd)
              &::after
                content:" "
                width:1px
                height:55px
                position: absolute
                right:10px
                top:30px
                background:#ccc
            .title
              text-align: left
              height:20px
              line-height:20px
              padding:10px 0
              .sub
                font-size:18px
                font-weight: bold
              .text
                font-size:11px
                color:#FF5155
                padding:0 10px
                border:1px solid #FF5155
                height:20px
                line-height:20px
                display: inline-block
                box-sizing: border-box
                margin-left:5px
            .percent
              font-size:20px
              color:#FF5155
              text-align: left
              height:29px
              line-height:29px
              font-weight: bolder
            .description
              font-size:12px
              text-align: left
              height:17px
              line-height:17px
                
</style>