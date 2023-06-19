import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/category'
import { getBannerAPI } from '@/apis/category'

export const useCategoryStore = defineStore('category', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const categoryList = ref([])

  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    // console.log(res)
    categoryList.value = res.data
  }
  // 轮播图
  const bannerList = ref([])
  const getBanner = async (id = 1) => {
    const res = await getBannerAPI(id)
    // console.log(res)
    bannerList.value = res.data
  }
  const changeBanner = async (id) => {
    await getBanner(id)
  }
  return {
    categoryList,
    bannerList,
    getCategory,
    getBanner,
    changeBanner
  }
})
