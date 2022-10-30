import { ref } from 'vue'

export const loginStore = {
  data: {
    isLogin: ref<boolean>(false), // 是否登陆
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
      login: {
        isLoginTrue() {
          _this.data.isLogin.value = true
        },
        isLoginFalse() {
          _this.data.isLogin.value = false
        },
      },
    }
  },
}
