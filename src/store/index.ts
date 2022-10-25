import { ref, watch } from 'vue'
import api from '../api'

// 控制音乐的id
export const musicId = ref<string>('')

// 修改音乐的id
export const changeMusicId = (id_: string) => {
  if (musicId.value !== id_) {
    musicId.value = id_
  }
}

// 歌曲的信息
export const musicMsg = ref<any>({})

// 歌曲切换的监听
watch(musicId, () => {
  if (musicId.value) {
    api.get(`/song/detail/?ids=${musicId.value}`).then((res) => {
      const songs = res.data.songs

      if (songs && songs.length > 0) {
        let author = ''
        let { name } = songs[0]

        if (songs[0].ar.length > 0) {
          author = songs[0].ar[0].name
        }
        let picUrl = songs[0].al.picUrl

        musicMsg.value = { name, author, picUrl }
      }
    })
  }
})

// 控制home的页面位于的页面
export const currentMenu = ref<string>('PersonalRecommendation')

export function changeCurrentMenu(path: string) {
  currentMenu.value = path
}
