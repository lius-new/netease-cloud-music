import api from '../index'

/**
 * 获取歌单的详情
 * @param id 歌单id
 */
export async function getPlaylistDetail(id: string) {
  const resp = await api.get(`/playlist/detail?id=${id}`)
  return resp.data
}

/**
 * 获取信息
 * @param id 
 */
export async function getPlaylistTrack(id: string) {
  const resp = await api.get(`/playlist/track/all?id=${id}`)
  return resp.data.songs
}
