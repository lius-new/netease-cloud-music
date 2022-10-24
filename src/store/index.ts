import { ref } from 'vue'

export const musicId = ref<string>('')

export const changeMusicId = (id_: string) => {
  musicId.value = id_
}
