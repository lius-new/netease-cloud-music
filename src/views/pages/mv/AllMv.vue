<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { mvStore } from '../../../store/mv-store'
import { getMv } from '../../../api/server/mv'

const tags1: string[] = ['全部', '华语', '欧美', '日本', '韩国', '其他']
const tags2: string[] = ['全部', '官方版', '原生', '现场版', '网易出品']
const tags3: string[] = ['上升最快', '最热', '最新']


const { area, type, order } = mvStore.data;

const mvs = ref<any>([]);

watchEffect(() => {
    getMv(area.value, type.value, order.value).then(res => {
        mvs.value = res
    })
})
</script>

<template>
    <div class="options-wrapper mb-4 pb-4 2xl:w-2/3 mx-auto flex flex-col border-b overflow-hidden">
        <div class="flex text-xs text-gray-500 my-1.5">
            <h3 class="mr-4">地区:</h3>
            <ul class="flex divide-x gap-x-4">
                <li @click="area = tag" :class="{ 'bg-gray-500 text-white px-1': area === tag }"
                    class="px-2 cursor-pointer" v-for="tag in tags1" :key="tag">{{
                    tag
                    }}</li>
            </ul>
        </div>
        <div class="flex text-xs text-gray-500 my-1.5">
            <h3 class="mr-4">类型:</h3>
            <ul class="flex divide-x gap-x-2">
                <li @click="type = tag" :class="{ 'bg-gray-500 text-white px-1': type === tag }"
                    class="px-2 cursor-pointer" v-for="tag in tags2" :key="tag">{{
                    tag
                    }}</li>
            </ul>
        </div>
        <div class="flex text-xs text-gray-500 my-1.5">
            <h3 class="whitespace-nowrap mr-4">排序:</h3>
            <ul class="flex flex-wrap divide-x gap-x-4">
                <li @click="order = tag" :class="{ 'bg-gray-500 text-white px-1': order === tag }"
                    class="px-2 cursor-pointer" v-for="tag, index in tags3" :key="index">{{ tag }}</li>
            </ul>
        </div>
    </div>
    <div class="2xl:w-2/3 mx-auto overflow-hidden grid grid-cols-4 gap-x-2 gap-y-4">
        <div v-for="mv in mvs" :key="mv.id" class="flex flex-col justify-center items-center">
            <div class="border w-full">
                <img :src="mv.cover" alt="" class=" w-full">
            </div>
            <div class="text-sm my-2 flex flex-col overflow-hidden truncate w-full">
                <p class=" overflow-hidden truncate">
                    {{ mv.name }}
                </p>
                <p class="text-xs text-gray-500 my-0.5">
                    {{ mv.artistName }}
                </p>
            </div>
        </div>
    </div>
</template>