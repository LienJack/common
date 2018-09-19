<template>
    <section>
      <div class="swiper-contain">
        <swiper :options="options">
            <swiper-slide><div :class="$style.box">1</div></swiper-slide>
            <swiper-slide><div :class="$style.box">2</div></swiper-slide>
            <swiper-slide><div :class="$style.box">3</div></swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
      </div>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
  components: {
      swiper,
      swiperSlide,
  },
  data () {
    return {
      options: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        notNextTick: false,
      }
    }
  }
}
</script>

<style module>
.swiper-contain {
  width: 100vw;
  height: 300px;
  overflow: hidden;
}
  .box {
    width: 100%;
    height: 300px;
    text-align: center;
    background-color: #999;
  }
</style>


