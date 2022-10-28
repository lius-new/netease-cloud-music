<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import { mvStore } from '../../../store/mv-store'
import { getTopMv } from '../../../api/server/mv'

const tags1 = ['内地', '港台', '欧美', '日本', '韩国'];

const topMvs = ref<any>([[]]);
const topKey = ref<any>('内地');

onBeforeMount(() => {
    getTopMv(topKey.value, '50').then(res => topMvs.value = res)
})

watch(topKey, () => {
    getTopMv(topKey.value, '50').then(res => topMvs.value = res)
})
</script>

<template>
    <div class="mb-4 pb-1 2xl:w-2/3 mx-auto flex flex-col border-b overflow-hidden">
        <div class="flex justify-between ">
            <div class="flex">
                <p class="text-xl">Mv排行榜</p>
                <ul class="flex text-xs divide-x items-end">
                    <li @click="topKey = tag" class="px-4 text-gray-500 cursor-pointer" v-for="tag in tags1" :key="tag">
                        {{ tag }}</li>
                </ul>
            </div>
            <p class="text-sm underline self-end cursor-pointer" @click="mvStore.update().updateCurrent('FeaturedMv')">
                返回
            </p>
        </div>
    </div>
    <div class="mb-4 pb-1 2xl:w-2/3 mx-auto grid grid-cols-2 py-4 gap-y-4 overflow-hidden">
        <div class="h-24 2xl:h-36" v-for="mv, index in topMvs" :key="mv.id">
            <div class="flex justify-between gap-x-2 h-full">
                <div class="flex gap-x-2">
                    <p class="text-lg text-gray-600 italic">
                        {{ (index + 1) < 10 ? ('0' + (index + 1)) : index + 1 }} </p>
                            <img class="h-full mx-auto border" :src="mv.cover" alt="">
                </div>
                <div class="mx-auto flex flex-auto justify-start flex-col text-gray-600">
                    <p class="text-sm">
                        {{ mv.name }}
                    </p>
                    <p class="text-xs">
                        {{ mv.artistName }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>