// import request from '@/utils/http'
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