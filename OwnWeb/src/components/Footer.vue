<template>
  <div class="Footer">
    <div class="footercontent">
      <div class="logo">logo</div>
      <div class="contact">
        <ul>
          <li>联系我们</li>
          <li>客服电话</li>
          <li>办公时间</li>
          <li>联系我们</li>
          <li>客服电话</li>
        </ul>
      </div>
      <div class="case">
        <ul>
          <li>案例</li>
          <li>查看案例</li>
          <li>我的案例</li>
          <li>更多案例</li>
        </ul>
      </div>
      <div class="about">
        <ul>
          <li>关于我们</li>
          <li>办公时间</li>
          <li>联系我们</li>
          <li>客服电话</li>
          <li>办公时间</li>
        </ul>
      </div>
      
    </div>
    <div class="trademark">
          ©2019 Baidu  使用百度前必读 |百度人工翻译 | 百度翻译开放平台 |  百度大脑 |  翻译协议 |  建议与反馈 |
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {}
};
</script>
<style scoped lang='less'>
.Footer {
//   height: 180px;
  width: 100%;
  background: #5674aa;
    .trademark{
        // position: absolute;
        // bottom: 0;
        width: 100%;
        text-align: center;
        color: #a7a7ac;
        border-top: 1px solid #ccc;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
    }
    .footercontent{
        width:80%;
        display: flex;
        margin:auto;
        // position: absolute;
        // top: 50%;
        // left: 0;
        // right: 0;
        // transform: translateY(-50%);
        color:#fff;
        > div {
            flex: 1;
            text-align: center;
        ul {
            margin-bottom:15px;
            li {
                &:nth-child(1) {
                    height: 40px;
                    line-height: 40px;
                    font-size: 18px;
                }
                font-size: 13px;
                list-style: none;
                height: 20px;
                line-height:20px;
                }
            }
        }
  }
}
</style>