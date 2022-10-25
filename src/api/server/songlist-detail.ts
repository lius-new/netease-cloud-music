import api from '../index'

export async function getPlaylistDetail(id: string) {
  const resp = await api.get(`/playlist/detail?id=${id}`)
  return resp.data
}

export async function getPlaylistTrack(id: string) {
  const resp = await api.get(`/playlist/track/all?id=${id}`)
  return resp.data.songs
}
