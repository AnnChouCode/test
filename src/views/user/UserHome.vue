<template>
  <div class="bg-white">
    <div class="container">
      <!-- 探索新作品 -->
      <swiperProductComponent dataCategory="products"></swiperProductComponent>
    </div>
  </div>
</template>

<script>
// Import Components
import SwiperProductComponent from '@/components/swiper/SwiperProductComponent.vue'

export default {
  data () {
    return {
      tempMessage: {
        type: '',
        Name: ''
      },
      message: {
        subject: '',
        body: ''
      }
    }
  },
  components: {
    SwiperProductComponent
  }
}
</script>

<style lang="scss" scoped>
.banner {
  min-height: 289px;

  @media (min-width: 768px) {
    min-height: 100dvh;
  }

  &-title {
    padding-top: 60px;
  }
}

/* 首頁文章 */
.home-article {
  img {
    transition: transform 0.3s;
  }

  // hover 效果
  &-img:hover{
    .home-article-mask:after{
      border:1px solid white;
    }

    img {
      transform: scale(1.5) translate(-15%, 0%);
    }
  }

  &:has(.home-article-img:hover) .home-article-img:not(:hover){
    .home-article-mask{
      background: rgba(0, 0, 0, 0.4);
    }
  }

  // RWD
  >.home-article-img:first-child>a>div:first-child {
    height: 208px;

    @media (min-width: 576px) {
      height: 350px;
    }

    @media (min-width: 1200px) {
      height: 822px;
    }
  }

  >.home-article-img:nth-child(n+3)>a>div:first-child {
    aspect-ratio: 3/4;

    @media (min-width: 768px) {
      aspect-ratio: 1/1;
    }
  }

  // 遮罩
  &-mask {
    background: linear-gradient(to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(94, 94, 94, 0) 63%,
        rgba(0, 0, 0, 0.6) 100%);
    transition: background 0.3s ease;

    &::after{
      content:'';
      position: absolute;
      width: 98%;
      height: 98%;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      transition: border 0.3s;
    }
  }
}

/* 優惠券 */
.home-coupon {
  min-height: 302px;

  @media (min-width: 768px) {
    min-height: 311px;
  }
}
</style>
