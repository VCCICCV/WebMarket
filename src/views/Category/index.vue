<script setup>
import SmallWindowDisplay from './SmallWindowDisplay.vue'
import {ref} from 'vue'
// 创建响应式变量
const isPopupVisible = ref(false);
function showPopup() {
  isPopupVisible.value = true;
}

function hidePopup() {
  isPopupVisible.value = false;
}
</script>

<template>
  <div id="image-container">
  <ul  v-for="row in 5">
    <li v-for="col in 2" :key=col><img src="@/assets/images/image1.jpg" alt="Image 1" @mouseover="showPopup" @mouseout="hidePopup"></li>
    <!--小窗展示 -->
    <SmallWindowDisplay v-if="isPopupVisible" />
  </ul>
</div>

</template>


<style scoped lang="scss">

  #image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #image-container li {
    margin: 10px;
  }

  #image-container img {
    width: 200px;
    height: 150px;
  }

</style>