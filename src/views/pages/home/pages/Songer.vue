<script setup lang="ts">
import { ref } from "vue";
import api from "../../../../api/index";

const tags1 = ['全部', '华语', '欧美', '日本', '韩国', '其他']

const tags2 = ['全部', '男歌手', '女歌手', '乐队组合']

const songerArtists = ref<any>();

api.get('/top/artists')
    .then(res => {
        songerArtists.value = res.data.artists
    });

</script>

<template>
    <div class="options-wrapper mb-8 pb-4 2xl:w-2/3 mx-auto flex flex-col border-b overflow-hidden">
        <div class="flex text-sm text-gray-500 my-2">
            <h3 class="">语种:</h3>
            <ul class="flex divide-x">
                <li class="px-4" v-for="tag in tags1" :key="tag">{{tag}}</li>
            </ul>
        </div>
        <div class="flex text-sm text-gray-500 my-2">
            <h3 class="">分类:</h3>
            <ul class="flex divide-x">
                <li class="px-4" v-for="tag in tags2" :key="tag">{{tag}}</li>
            </ul>
        </div>
        <div class="flex text-sm text-gray-500 my-2">
            <h3 class="whitespace-nowrap">筛选:</h3>
            <ul class="flex flex-wrap divide-x gap-y-2">
                <li class="px-1">全部</li>
                <li class="px-1" v-for="n in 26" :key="n">{{String.fromCharCode((n+64))}}</li>
                <li class="px-1">#</li>
            </ul>
        </div>
    </div>
    <div class="mb-4 2xl:w-2/3 mx-auto">
        <div class="grid 2xl:grid-cols-6 grid-cols-5 gap-x-4 gap-y-6">
            <div class="h-36 bg-slate-300" v-for="songer in songerArtists" :key="songer.id">{{songer.name}}</div>
        </div>
    </div>
</template>