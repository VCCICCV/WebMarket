<script setup>
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
</script>

<template>
    <!-- 头部 -->
    <LayoutHeader></LayoutHeader>
    <!-- 主体 -->
    <RouterView />
    <!-- 页脚 -->
    <LayoutFooter />
</template>
