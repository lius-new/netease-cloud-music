import { watch, ref } from 'vue'
import { getTime } from '../utils/index'

export const audioStore = {
  data: {
    use: ref<boolean>(false), // 歌曲是否可用
    message: ref<any>(''), // 歌曲是否可用的信息
    url: ref<string>(''), // 当前播放音乐的url
    toggle: ref<boolean>(false), // 播放音乐图标
    volume: ref<number>(10), // 声量
    progress: ref<number>(0), // 进度条进度
    time: ref<number>(0), // 歌曲时长
    audio: ref<HTMLAudioElement | null>(null), // audio的元素
  },
  update() {
    const _this = this
    return {
      use: {
        updateUse: (u: boolean) => (_this.data.use.value = u),
      },
      message: {
        updateMessage: (m: any) => (_this.data.message.value = m),
      },
      url: {
        updateUrl(url: string) {
          if (!url) return
          _this.data.url.value = url
        },
      },
      toggle: {
        udpateToggle(value: boolean) {
          _this.data.toggle.value = value
        },
        toggleOn() {
          _this.data.toggle.value = true
        },
      },
      volume: {
        // 控制音量
        updateVolume(v: number) {
          _this.data.volume.value = v
        },
        initVolume() {
          _this.data.volume.value = 10 // 长度
          _this.data.audio.value!.volume = 10 / 100 // 实际上的音量
        },
      },
      progress: {
        // 控制进度条
        updateProgress(p: number) {
          _this.data.progress.value = p
        },
      },
      time: {
        updateTime(t: number) {
          _this.data.time.value = t
        },
      },
      audio: {
        start() {
          _this.data.audio.value?.play()
          _this.data.toggle.value = true
        },
        stop() {
          _this.data.audio.value?.pause()
          _this.data.toggle.value = false
        },
      },
    }
  },
}

// 声音发生变化
watch(audioStore.data.volume, () => {
  const { audio, volume } = audioStore.data
  if (!audio.value) return
  audio.value!.volume = volume.value / 100
})
