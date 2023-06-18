<script setup>
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
// 触发获取导航列表的action

import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
    <!-- 头部 -->
    <LayoutFixed></LayoutFixed>
    <LayoutHeader></LayoutHeader>

    <!-- 主体 -->
    <RouterView />
    <!-- 页脚 -->
    <LayoutFooter />
</template>
