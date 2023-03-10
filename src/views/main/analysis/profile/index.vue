<template>
  <div class="profile">
    <n-carousel trigger="hover" draggable autoplay class="carousel">
      <template v-for="url in images" :key="url">
        <img :src="url" alt="">
      </template>
    </n-carousel>
  </div>
</template>

<script lang="ts" setup>
const images = [
  'https://www.ycvc.jx.cn/images/1.jpg',
  'https://www.ycvc.jx.cn/images/2.jpg',
  'https://www.ycvc.jx.cn/images/3.jpg',
  'https://www.ycvc.jx.cn/images/4.jpg'
]
</script>

<style lang="less" scoped>
.profile {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.carousel {
  width: 100%;
  height: 300px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
