import { watch, ref, computed, watchEffect } from 'vue'
import { getAccount } from '../utils/index'

export const loginStore = {
  data: {
    isLogin: ref<boolean>(false),
    showModel: ref<boolean>(false), // 是否显示登陆
    current: ref<string>('First'), // 当前选项页面
  },
  update() {
    const _this = this
    return {
      changeCurrent(path: string) {
        _this.data.current.value = path
      },
      showModel: {
        startModel() {
          _this.data.showModel.value = true
        },
        closeModel() {
          _this.data.showModel.value = false
          _this.data.current.value = 'First'
        },
      },
      isLogin: {
        update() {
          const { id, userName } = getAccount()
          _this.data.isLogin.value = Boolean(id && userName)
        },
      },
    }
  },
}

watchEffect(() => {
  const { id, userName } = getAccount()
  loginStore.data.isLogin.value = Boolean(id && userName)
})