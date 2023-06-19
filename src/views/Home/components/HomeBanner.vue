<script setup>
import { onMounted} from 'vue'
// 触发action
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getBanner())

</script>



<template>
  <div class="home-banner">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in categoryStore.bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 50%;
  // height: 10%;
  margin: auto;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
}
</style>