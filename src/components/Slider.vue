<template>
    <div>
      <carousel
          :items="1"
          :autoplay="true"
          :nav="false"
      >
      <img src="@/assets/image/mu-kit.jpg" alt="">
      <img src="@/assets/image/arsenal-kit.jpg" alt="">
      <img src="@/assets/image/barcelona-kit.jpg" alt="">
      <img src="@/assets/image/spurs-kit.jpg" alt="">
      <img src="@/assets/image/juventus-kit.jpg" alt="">
      </carousel>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
//   name : 'Slider',
	components: { carousel }
}
</script>

<style lang="scss" scoped>

</style>
