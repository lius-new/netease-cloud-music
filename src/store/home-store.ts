import { ref } from 'vue'

/**切换菜单 */
export const homeMenuStore = {
  data: {
    currentMenu: ref<string>('PersonalRecommendation'),
  },
  update() {
    const _this = this
    return {
      changeCurrentMenu(path: string) {
        _this.data.currentMenu.value = path
      },
    }
  },
}
