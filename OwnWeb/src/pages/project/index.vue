<template>
  <div class="Progect">
    <div class="ProgectPannel">
      <progect-pannel
        :options="options"
        v-for="item in DProgectData"
        :key="item.id"
        :ProgectData="item"
      ></progect-pannel>
    </div>
  </div>
</template>
<script>
import ProgectPannel from "@/components/ProgectPannel.vue";
export default {
  name: "Progect",
  props: {},
  data() {
    return {
      DProgectData: [
        {
          id:"vue01",
          HeadType: "前端",
          HeadName: "前端vue项目",
          SwiperListData: [
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/7f4c7eff7a9e2bb41835b82f4012016b57608d30/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f4a445f46696e616e63652f486f6d652f686f6d65312e6a7067"
            },
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/802f7b54a4c79fd543b8ca0a975270b2939c6676/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f4a445f46696e616e63652f486f6d652f667265655061636b65742e6a7067"
            },
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/3297e73a385f33f9d5913bf91675e9c329717d2e/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f4a445f46696e616e63652f46696e616e63652f66696e616e63652e6a7067"
            },
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/c31cb5fd9323d6ed4367c3a64265eb534df7780b/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f4a445f46696e616e63652f4261695469616f2f6261697469616f2e6a7067"
            },
            {
              href: "home",
              src: "https://camo.githubusercontent.com/1359feb3dd578f73014f949da56c231989896a30/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f4a445f46696e616e63652f43726f776446756e64696e672f63726f776466756e64696e672e6a7067"
            },
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/7c36f91c15c9fc57d6a274e5b6ab30bd5ea60477/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f4a445f46696e616e63652f52656c61782f72656c61782e6a7067"
            }
          ],
          ProgectIName: "Vue全家桶 京东金融 WebApp",
          ProgectISkill: "vue全家桶+ swiper + less + ES6",
          ProgectIAim:"前端组件、模块化练习",
          ProgectIComplete:"否",
          ProgectIHref:"https://github.com/X0516/2019/tree/master/JDFinance",
          ProgectIDesc:
            "通过项目练习，熟悉Vue 全家桶，让自己提前熟悉公司项目开发流程，并且通过练习项目拓展其他相关技术栈，提高自己的整体技术开发能力。"
        },
        {
          id:"vue02",
          HeadType: "前端",
          HeadName: "前端vue项目",
          SwiperListData: [
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/19695d8268de376b51fc647f64029c33a63f0d7e/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f77795f6d757369632f46696e642e6a7067"
            },
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/9eb448fe3c4a95a92c54d038ca8f83cecc763bfd/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f77795f6d757369632f766964656f2e6a7067"
            },
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/2c0e09388d3f2a650518fae9f81da9b64538a147/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f77795f6d757369632f766964656f5f706c61792e6a7067"
            },
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/3eece0a75dd49f957492f835883a432644b6476c/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f77795f6d757369632f73696e6765725f6974656d2e6a7067"
            },
            {
              href: "home",
              src: "https://camo.githubusercontent.com/4e9f22210e8a287aef6c65d8dc32aa503677b4fc/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f77795f6d757369632f736f6e5f706c61792e6a7067"
            },
            {
              href: "home",
              src:
                "https://camo.githubusercontent.com/be47505664564c4c1af14379902fdf300c891e2b/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f77795f6d757369632f7365617263685f6974656d2e6a7067"
            },
            {
              href: "home",
              src:
              "https://camo.githubusercontent.com/29e6897c01b03368967dd5b082a342f55a28b50c/68747470733a2f2f78303531362e6769746875622e696f2f536f75726365446174612f50726f6a656374536f75726365496d672f77795f6d757369632f52616e6b696e674c6973742e6a7067"
            }
          ],
          ProgectIName: "Vue全家桶 网易云音乐 WebApp",
          ProgectISkill: "vue全家桶+ better-scroll + Scss + ES6",
          ProgectIAim:"前端组件、模块化练习",
          ProgectIComplete:"否",
          ProgectIHref:"https://github.com/X0516/2019/tree/master/wy_music",
          ProgectIFunction:"播放器推荐页面、热榜页面、歌手页面、歌单详情、歌手详情、排行榜详情、搜索页面、播放列表、用户中心等。",
          ProgectIDesc:
            "通过项目练习，熟悉Vue 全家桶，让自己提前熟悉公司项目开发流程，并且通过练习项目拓展其他相关技术栈，提高自己的整体技术开发能力。"
        }
      ],
      options: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
    };
  },
  components: {
    ProgectPannel
  }
};
</script>
<style scoped lang='less'>
.Progect {
}
</style>