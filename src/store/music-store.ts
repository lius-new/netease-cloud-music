import { ref, watch } from 'vue'
import api from '../api'

/**
 * music store
 */
export const musicStore = {
  data: {
    musicId: ref<string>(''), // 播放音乐id
    musicMsg: ref<any>({}),
  },
  update: function () {
    const _this = this
    return {
      changeMusicId: function (id_: string) {
        if (_this.data.musicId.value === id_) return // 如果是一样就不切换id
        _this.data.musicId.value = id_
      },
    }
  },
}

// 歌曲切换的监听
watch(musicStore.data.musicId, () => {
  const { musicId } = musicStore.data

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

        musicStore.data.musicMsg.value = { name, author, picUrl }
      }
    })
  }
})
