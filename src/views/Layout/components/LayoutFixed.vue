<script setup>
import LayoutHeaderUI from './LayoutHeaderUI.vue';
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)

</script>

<template>
    <div class="app-header-sticky" :class="{ show: y > 78 }">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">主页</RouterLink>
            </h1>
            <!-- 导航区域 -->
            <LayoutHeaderUI></LayoutHeaderUI>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.app-header-sticky {
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    // 此处为关键样式
    // 状态一：往上平移自身高度 + 完全透明
    transform: translateY(-200%);
    opacity: 10;

    // 状态二：移除平移 + 完全不透明
    &.show {
        transition: all 0.3s linear;
        transform: none;
        opacity: 1;
    }

    .container {
        display: flex;
        align-items: center;
    }
    .logo {
        width: 200px;
        a {
            display: block;
            height: 100px;
            width: 90%;
            text-indent: -9999px;
            background: url('@/assets/svg/nodata.svg') no-repeat center center / contain;
        }
    }

}
</style>