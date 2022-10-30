<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import { mvStore } from '../../../store/mv-store'
import { getNewMv, getHotMv, getTopMv } from '../../../api/server/mv'

const tags1 = ['内地', '港台', '欧美', '日本', '韩国'];

const newMvs = ref<any>([]);
const hotMvs = ref<any>([]);
const topMvs = ref<any>([]);

const topKey = ref<any>('内地');

onBeforeMount(() => {
    getNewMv('8').then(res => newMvs.value = res)
    getHotMv().then(res => hotMvs.value = res)
    getTopMv().then(res => topMvs.value = res)
})

watch(topKey, () => {
    getTopMv(topKey.value).then(res => topMvs.value = res)
})

</script>

<template>
    <div class="2xl:w-3/4 mx-auto mb-8 ">
        <div class="flex items-end justify-between border-b py-2">
            <div class="flex gap-x-6">
                <h3 class="text-lg">最新MV</h3>
                <ul class="flex text-xs divide-x items-end">
                    <li class="px-4 text-gray-500" v-for="tag in tags1" :key="tag">{{ tag }}</li>
                </ul>
            </div>
            <div class="text-gray-500 text-xs cursor-pointer" @click="mvStore.update().updateCurrent('AllMv')">
                更多&gt;&gt;</div>
        </div>
        <div class="grid grid-cols-4 gap-x-4 gap-y-6 py-4">
            <div class="h-36 2xl:h-48 flex justify-center flex-col " v-for="mv in newMvs" :key="mv.id">
                <img class="w-11/12 h-36 mx-auto border" :src="mv.cover" alt="">
                <div class="w-11/12 mx-auto">
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
    <div class="2xl:w-3/4 mx-auto mb-8">
        <div class="flex items-end justify-between border-b py-2">
            <div class="flex gap-x-6">
                <h3 class="text-lg">热播MV</h3>
            </div>
            <div class=" text-gray-500 text-xs cursor-pointer"
                @click="mvStore.data.order.value = '最热'; mvStore.update().updateCurrent('AllMv')">
                更多&gt;&gt;</div>
        </div>
        <div class="grid grid-cols-4 gap-x-4 gap-y-6 py-4">
            <div class="h-36 2xl:h-48" v-for="mv in hotMvs" :key="mv.id">
                <img class="w-11/12 xl:h-36 h-24 mx-auto border" :src="mv.cover" alt="">
                <div class="w-11/12 mx-auto">
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
    <div class="2xl:w-3/4 mx-auto">
        <div class="flex items-end justify-between border-b py-2">
            <div class="flex gap-x-6">
                <h3 class="text-lg">MV排行榜</h3>
                <ul class="flex text-xs divide-x items-end">
                    <li @click="topKey = tag" class="px-4 text-gray-500 cursor-pointer" v-for="tag in tags1" :key="tag">
                        {{ tag }}</li>
                </ul>
            </div>
            <div class=" text-gray-500 text-xs" @click="mvStore.update().updateCurrent('MvTopList')">更多&gt;&gt;</div>
        </div>
        <div class="grid grid-cols-2 py-4 gap-y-4">
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
    </div>
</template>