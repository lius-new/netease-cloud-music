<script setup lang="ts">
import { homeMenuStore } from '../../../../../store';

import { defineProps } from 'vue'

const props = defineProps<{
    newsongs: any
}>()


</script>

<template>
    <div class="my-16">
        <div class=" py-6 pb-2 mb-2 flex border-b justify-between items-center">
            <h3 class="text-lg ">最新音乐</h3>
            <p @click="() => homeMenuStore.update().changeCurrentMenu('NewMusic')"
                class="text-xs text-gray-400 cursor-pointer">更多&gt;&gt;</p>
        </div>
        <div class="grid grid-cols-2 border divide-x">
            <div class=" text-center h-14 " v-for="newsong, index in props.newsongs.value" :key="newsong.id">
                <div class="flex items-center px-4 gap-x-4 h-full hover:bg-gray-200 hover:cursor-pointer">
                    <p class="text-gray-500 text-sm ">{{ index }}</p>
                    <img class="w-10 " :src="newsong.picUrl" alt="">
                    <p>
                        {{ newsong.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>