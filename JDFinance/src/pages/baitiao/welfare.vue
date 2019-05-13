<template>
  <div class="welfare">
    <Pannel :title="title" :cpclass="cpclass">
      <div class="welfareContainer">
				<div class="moneyitem" v-for="item in welfareitem" :key="item.title">
        <div class="itemimg">
          <img :src="item.img" alt>
        </div>
        <div class="iteminfo">
          <h4>{{item.title}}</h4>
          <p>{{item.text}}</p>
        </div>
        <div class="itemcontrol">{{item.info}} ></div>
      </div>
			</div>
    </Pannel>
    <swiper-component :items="Welfitems" />
  </div>
</template>
<script>
import SwiperComponent from "@/components/Swiper";
import Pannel from "@/components/Pannel";
export default {
  name: "welfare",
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
      title: "白条福利",
      cpclass:"welfare",
      Welfitems:[   //白条swiperlist数据
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t1/21509/20/4531/39775/5c33281eE7e0635bb/6a8c62f841f035a7.png?width=1080&height=240'
            },
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t22897/39/1541754983/14812/d61317bc/5b6263e4Nbd9cf24d.png?width=690&height=154'
            },
            {
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t1/12277/16/15363/78163/5caf2fe1Ea8b5743e/5afe5457e88a1e33.jpg?width=1080&height=240'
            }
      ],
      welfareitem: [               
        {
          title: "开通白条",
          text: "送188元礼包",
          info:"立即开通",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120"
        },
        {
          title: "白条闪付",
          text: "新手享158元礼包",
          info:"随机立减",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120"
        },
        {
          title: "白条提额",
          info:"去提额",
          text: "金融app专享提额礼包",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120"
        }
      ],
    };
  },
  components: {
    Pannel,
    SwiperComponent
  }
};
</script>
<style scoped lang='sass'>
.welfareContainer
	border-top:1px solid #ddd
	padding:10px 0
	.moneyitem
		width:100%
		display: flex
		padding:0 15px
		box-sizing: border-box
		margin-bottom:5px
		.itemimg
			flex:1.5
			img
				width:100%
		.iteminfo
			flex:4
			text-align: left
			padding-left:10px
			padding-top:10px
			h4
				height:40%
			p
				height:40%
					font-size: 14px
					color: #999
					line-height: 1.3
		.itemcontrol
			flex:2
			font-size: 14px
			color: #FF801A
			line-height:4
</style>