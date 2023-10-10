<script setup>
import { Search } from "@element-plus/icons-vue";
import SmallWindowDisplay from "./SmallWindowDisplay.vue";
import { ref } from "vue";
// 创建响应式变量
// const isPopupVisible = ref(false);
// function showPopup() {
//   isPopupVisible.value = true;
//   console.log("显示搜索");
// }

// function hidePopup() {
//   isPopupVisible.value = false;
// }
// 创建图片状态数组，初始状态为隐藏
const imageStates = ref([]);

// 初始化图片状态数组
for (let i = 0; i < 10; i++) {
  imageStates.value.push({ showSearch: false });
}

// 显示 Search 图标
function showSearch(index) {
  imageStates.value[index].showSearch = true;
}

// 隐藏 Search 图标
function hideSearch(index) {
  imageStates.value[index].showSearch = false;
}
</script>

<template>
  <div id="image-container">
    <ul v-for="(row, rowIndex) in 5" :key="rowIndex">
      <li v-for="(col, colIndex) in 2" :key="colIndex">
        <!-- 转换为一维位置 -->
        <img
          src="@/assets/images/image1.jpg"
          alt="Image 1"
          @mouseover="showSearch(rowIndex * 2 + colIndex)"
          @mouseout="hideSearch(rowIndex * 2 + colIndex)"
        />
        <el-row v-if="imageStates[rowIndex * 2 + colIndex].showSearch" class="search-row">
          <el-button :icon="Search" circle />
        </el-row>
      </li>
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
  position: relative; /* 添加相对定位 */
}

#image-container img {
  width: 200px;
  height: 150px;
}
.search-row {
  position: absolute; /* 添加绝对定位 */
  left: 0;
  bottom: 0;
}
</style>
