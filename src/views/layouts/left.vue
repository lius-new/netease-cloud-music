<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '../../router/routes';
import Audio from '../../components/audio/index.vue'

const lovers = ['我喜欢的音乐'];

</script>

<template>
    <div class="left-wrapper w-72 border-r-2 flex flex-col justify-between">
        <div class="menu-wrapper">
            <div class="px-3 py-1">
                <h4 class="title text-sm text-gray-500 py-2">推荐</h4>
                <ul>
                    <li v-for="option in routes.slice(0, 4)" :key="option.path"
                        class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">
                        <router-link :to="option.path">
                            {{ option.text }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="px-3 py-1">
                <h4 class="title text-sm text-gray-500 py-2">我的音乐</h4>
                <ul>
                    <!-- <li class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">本地音乐</li> -->
                    <!-- <li class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">下载管理</li> -->
                    <!-- <li class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">我的音乐云盘</li> -->
                    <li v-for="option in routes.slice(4, 5)" :key="option.path"
                        class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">
                        <router-link :to="option.path">
                            {{ option.text }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="px-3 py-1">
                <h4 class="title text-sm text-gray-500 py-2">创建的歌单</h4>
                <ul>
                    <li v-for="option in routes.slice(5)" :key="option.path"
                        class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">
                        <router-link :to="option.path">
                            {{ option.text }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="px-3 py-1">
                <h4 class="title text-sm text-gray-500 py-2">收藏的歌单</h4>
                <ul>
                    <li class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">暗恋心事 | 过季的爱只剩酸涩</li>
                    <li class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">千里行走和更多好听的华语私人雷达</li>
                </ul>
            </div>
        </div>
        <div class="border-t h-20 flex">
            <div class="w-20 h-20 bg-slate-500">
                <Audio />
            </div>
            <div class="flex items-center px-2 py-2 justify-between flex-auto">
                <div class="music-msg h-full ">
                    <ul class="flex flex-col justify-around h-full">
                        <li>孤独城市</li>
                        <li>李上安</li>
                    </ul>
                </div>
                <div class="flex flex-col justify-around h-full">
                    <span>图标</span>
                    <span>图标</span>
                </div>
            </div>
        </div>
    </div>
</template>