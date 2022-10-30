import { ref } from 'vue'

/* 切换菜单 */
export const loginStore = {
  data: {
    current: ref<string>('First'),
  },
  update() {
    const _this = this
    return {
      changeCurrent(path: string) {
        _this.data.current.value = path
      },
    }
  },
}
