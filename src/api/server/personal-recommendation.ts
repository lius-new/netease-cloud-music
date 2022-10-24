import api from '../index'
import { IPropPersonalRecommendation } from '../../typings/pages/home'

// 轮播图
export async function getBanners() {
  const resp = await api.get('/banner')
  return await resp.data.banners
}

// 推荐歌曲
export async function getPersonalized() {
  const resp = await api.get('/personalized')
  return await [
    { name: '每日推荐歌曲', id: '000' },
    ...resp.data.result.slice(0, 9),
  ]
}

// 独家放送
export async function getPrivatecontent() {
  const resp = await api.get(
    '/personalized/privatecontent/list?limit=3&offset=0'
  )
  return await resp.data.result
}
// 最新音乐
export async function getNewsong() {
  const resp = await api.get('/personalized/newsong')
  return await resp.data.result
}
// 最新MV
export async function getMv() {
  const resp = await api.get('/personalized/mv')
  return await resp.data.result
}

// 最新dj
export async function getDjprogram() {
  const resp = await api.get('/personalized/djprogram')
  return await resp.data.result
}

// 初始化页面的数据
export function initServer(state: IPropPersonalRecommendation, option?: any) {
  getPersonalized().then((res) => (state.recommands.value = res))
  getPrivatecontent().then((res) => (state.privatecontents.value = res))
  getNewsong().then((res) => (state.newsongs.value = res))
  getMv().then((res) => (state.mvs.value = res))
  getDjprogram().then((res) => (state.djprograms.value = res))
}
