<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getPlaylist, getPlaylistHot, getPlaylistMusic, getPlaylistMusicByCategories } from './../../../../../api/server/song-list'
import Button from '../../../../../components/button/index.vue'
import IconList from './icon-list.vue'
import {
    ChevornDownIcon, PlayIcon,
} from '../../../../../components/icons'

// ref 控制弹出框
const popover = ref<boolean>(false);

const check = ref<string>('全部标签');

// ref 控制数据
const categories = ref<string[]>([]);
const subList = ref<any>({});
const hot = ref<string[]>([]);
const musicList = ref<any>();

// api
getPlaylistHot().then(res => hot.value = res)

getPlaylist().then(res => {
    categories.value = res.categories as string[];
    subList.value = res.sublist as any
})

getPlaylistMusic().then(res => musicList.value = res)

// router
const router = useRouter();

const clickHandler = (id: string) => {
    router.push({ path: '/songlist-detail', query: { id: id } });
}

const clickCheckHandler = (name: string) => {
    name === '全部标签' ?
        getPlaylistMusic().then(res => musicList.value = res) :
        getPlaylistMusicByCategories(name).then(res => musicList.value = res);
    check.value = name;
}
</script>

<template>
    <div @click.capture="popover=false">
        <div class="options-wrapper mb-4 2xl:w-2/3 mx-auto select-none">
            <div class="relative">
                <Button @click="popover=!popover"
                    class="text-xs text-gray-500 border-gray-300 flex gap-x-2 items-center rounded-sm">
                    <p>全部歌单</p>
                    <ChevornDownIcon width="10" fill="gray" />
                </Button>
                <div v-if="popover"
                    class="absolute bg-white top-10 border flex flex-col h-96 overflow-y-scroll overflow-x-hidden gray-scrollbar z-10">
                    <div class="px-72"></div>
                    <div class="border-b text-sm py-4 pl-4 flex justify-start">
                        选择标签
                    </div>
                    <div class="w-full my-2 px-6 flex justify-center">
                        <button @click="()=>{clickCheckHandler('')}" :class="{'border-red-500':check==='全部标签'}"
                            class="border w-full h-8 outline-none text-xs text-gray-500">全部标签</button>
                    </div>
                    <div class="w-full my-2 px-6 flex flex-col gap-y-4">
                        <div class="flex gap-x-10" v-for="(categorie,index) in categories">
                            <div class="w-12 flex gap-x-2 text-red-400">
                                <p>
                                    <IconList :index="index" />
                                </p>
                                <p class="whitespace-nowrap">
                                    {{categorie}}
                                </p>
                            </div>
                            <div class="flex-auto  grid grid-cols-5">
                                <div @click="()=>{clickCheckHandler(sub.name)}"
                                    :class="{'border-red-500':check === sub.name}"
                                    class="text-sm text-gray-500 cursor-pointer px-2 py-1 border flex justify-center items-center"
                                    v-for="sub,index_ in subList[index]" :key="index_">{{sub.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" flex gap-x-4 mt-2">
                <h3 class="whitespace-nowrap text-sm">热门标签:</h3>
                <ul class="flex justify-between  divide-x">
                    <li @click="()=>{clickCheckHandler(t)}"
                        class="text-xs text-gray-500 flex items-center px-2 lg:px-4 cursor-pointer whitespace-nowrap"
                        v-for="t,index in hot" :key="index">{{t}}</li>
                </ul>
            </div>
        </div>
        <div
            class="grid justify-start items-start grid-cols-5 2xl:grid-cols-5 2xl:gap-x-14 md:gap-x-6 gap-x-4  gap-y-10 2xl:w-2/3 overflow-hidden 2xl:mx-auto ">
            <div @click="()=>clickHandler(music.id)" class="flex justify-start items-start overflow-hidden relative"
                v-for="music in musicList" :key="music.id">
                <div
                    class="w-full group flex flex-col gap-y-2 justify-start items-start overflow-hidden cursor-pointer select-none">
                    <div class="border border-gray-400  overflow-hidden ">
                        <img :src="music.coverImgUrl" class="2xl:w-64 w-36" alt="">
                    </div>
                    <p
                        class="absolute group-hover:flex top-2 left-2 text-sm justify-start items-center border rounded-full">
                        <img src="../../../../assets/logo-0.png" class="w-4 2xl:w-8" alt="">
                    </p>
                    <p
                        class="absolute hidden group-hover:flex  bg-gradient-to-l from-gray-600 w-full px-2 text-sm justify-end items-center">
                        {{music.playCount}}
                    </p>
                    <div class="absolute hidden group-hover:flex bottom-14 w-full rounded-full justify-end px-2">
                        <p
                            class="group-hover:flex  bottom-14 bg-black border rounded-full w-7 h-7 justify-center items-center">
                            <PlayIcon width="8" fill="white"></PlayIcon>
                        </p>
                    </div>
                    <p class="w-48 text-sm">
                        {{music.name}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
