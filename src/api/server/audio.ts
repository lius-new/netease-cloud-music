import api from '../index'

export const checkAudioUse = async (id: string) => {
  const resp = await api.get(`/check/music?id=${id}`)
  return await resp.data
}

export const getAudio = async (id: string) => {
  //TODO: &level=exhigh 修改为传入的参数
  const resp = await api.get(`/song/url/v1?id=${id}&level=exhigh`)
  return await resp.data.data
}
