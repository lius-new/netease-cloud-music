import api from '../index'

/**
 * categores: 歌单分类的大类
 * subList: 歌单分类
 */
export async function getPlaylist() {
  const res = await api('/playlist/catlist')

  const { categories: _categories, sub } = await res.data

  const _subList: any = {}

  sub.forEach((item: any) => {
    let temp = _subList[item.category]
    _subList[item.category] = temp ? [...temp, item] : [item]
  })

  return {
    categories: Object.values(_categories),
    sublist: _subList,
  }
}

/**
 * 热门标签
 */
export async function getPlaylistHot() {
  const res = await api('/playlist/hot')

  return await res.data.tags.map((item: any) => item.name)
}

/**
 * 获取歌单
 */
export async function getPlaylistMusic() {
  const res = await api('/top/playlist?limit=20')

  res.data.playlists.map((item: any) => {
    item.playCount =
      (item.playCount + '').length < 5
        ? item.playCount
        : parseInt(parseInt(item.playCount) / 10000 + '') + '万'
  })

  return await res.data.playlists
}

/**
 * 获取指定类别的歌单
 */
export async function getPlaylistMusicByCategories(tag: string) {
  const res = await api(`/top/playlist/highquality?limit=20&cat=${tag}`)

  res.data.playlists.map((item: any) => {
    item.playCount =
      (item.playCount + '').length < 5
        ? item.playCount
        : parseInt(parseInt(item.playCount) / 10000 + '') + '万'
  })

  return await res.data.playlists
}
