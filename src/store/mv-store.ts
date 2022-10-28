import { ref } from 'vue'

export const mvStore = {
  data: {
    current: ref<any>('FeaturedMv'),
    area: ref<string>('全部'),
    type: ref<string>('全部'),
    order: ref<string>('上升最快'),
  },
  update() {
    const _this = this
    return {
      updateCurrent(path: string) {
        _this.data.current.value = path
      },
    }
  },
}
