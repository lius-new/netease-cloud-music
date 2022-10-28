import api from '../index'

// FeatureMV page
export const getNewMv = async (limit: string) => {
  const resp = await api.get(`/mv/first?limit=${limit}`)
  return await resp.data.data
}

export const getHotMv = async () => {
  const resp = await api.get(`/mv/all?order=最热&limit=8`)
  return await resp.data.data
}

export const getTopMv = async (area?: string, limit?: string) => {
  const limit_ = limit ? `limit=${limit}` : 'limit=10'
  const area_ = area ? `&area=${area}` : ''
  const resp = await api.get(`/top/mv?${limit_}${area_}`)
  return await resp.data.data
}

export const getMv = async (area?: string, type?: string, order?: string) => {
  const resp = await api.get(`/mv/all?area=${area}&type=${type}&order=${order}`)
  return await resp.data.data
}
