<template>
  <div class="GoodsItem">
    <div class="GoodsList" v-for="item in GoodsList" :key="item.skuId">
      <div class="ItemIcon">
        <img :src='item.imageUrl' :alt="item.goodsName" >
      </div>
      <p class="ItemDesc">
        <span class="selfRed">自营</span>
        {{item.goodsName}}
      </p>
      <h3 class="price">
        每月
        <span class="DetailPrice">￥ {{item.installmentPrice}}</span>
      </h3>
      <h4 class="ItemFree">{{item.installment}} 个月免息</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsItem",
  props: {
    GoodsList: {
      type: Array
    }
  }
};
</script>
<style scoped lang='less'>
.GoodsItem {
  width: 100%;
  height: 100%;
  padding: 0.35rem 0.2rem;
  box-sizing: border-box;
  .GoodsList{
      width:47%;
      display:inline-block;
      padding:0.8rem 0.2rem;
      border-bottom:1px solid rgba(194, 148, 81,.1);
  }
  .ItemFree {
    height: 1.5rem;
    line-height: 1.5rem;
    color: #c29451;
    padding: 0.05rem 0.18rem;
    width: 50%;
    border: 1px solid #c29451;
    text-align: center;
    font-size: 0.8rem;
  }
  .ItemIcon {
    height: 9rem;
    img {
      height: 100%;
    }
  }
  .ItemDesc {
    height: 2.25rem;
    line-height: 1.2rem;
    color: #333;
    font-size: 0.8rem;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    .selfRed {
      color: #fff;
      background: #f13a4d;
      font-size: 0.8rem;
      padding: 0.03rem 0.3rem;
    }
  }
  .price {
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: left;
    color: #999;
    font-size: 0.85rem;
    margin: 0.2rem 0;
    .DetailPrice {
      color: #f13a4d;
      font-size: 0.8rem;
    }
  }
}
</style>