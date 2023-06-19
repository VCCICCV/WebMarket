import httpInstance from "@/utils/http"

/**
 * @description: 获取一级导航数据
 * @param {*} id 导航id
 * @return {*}
 */
export function getCategoryAPI () {
  return httpInstance({
    url: '/category/list'
  })
}
/**
 * @description: 获取轮播图数据
 * @param {*} id 导航id
 * @return {*}
 */
export function getBannerAPI (id) {
  return httpInstance({
    url: `/category/banner/${id}`
  })
}
