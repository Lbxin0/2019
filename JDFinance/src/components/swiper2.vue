<template>
  <div class="swiper">
    <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
      <div
        class="swiper-slide swiper-slide-active"
        style="width: 105px; margin-right: 30px;"
      >Slide 1</div>
      <div class="swiper-slide swiper-slide-next" style="width: 105px; margin-right: 30px;">Slide 2</div>
      <div class="swiper-slide" style="width: 105px; margin-right: 30px;">Slide 3</div>

      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
        <span
          class="swiper-pagination-bullet swiper-pagination-bullet-active"
          tabindex="0"
          role="button"
          aria-label="Go to slide 1"
        ></span>
        <span
          class="swiper-pagination-bullet"
          tabindex="0"
          role="button"
          aria-label="Go to slide 2"
        ></span>
        <span
          class="swiper-pagination-bullet"
          tabindex="0"
          role="button"
          aria-label="Go to slide 3"
        ></span>
      </div>
    </div>
  </div>
</template>
<script src="../assets/js/swiper.min.js"></script>
<script>
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

export default {
  name: "swiper",
  props: {}
};
</script>
<style scoped lang='sass'>
// @import './assets/css/swiper.min.css';
</style>