<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { musicId } from '../../store/index'
import AudioShow from './audio-show.vue';
import { routes } from '../../router/routes';
import ListIcon from './left-icon.vue'
import { ListMusicIcon, HeartIcon, UserMusicIcon } from '../../components/icons/index'

const path = ref<string>(window.location.hash.replace(/.\//, '/')) // 默认是浏览器路径

const linkClickHandler = (p: string) => {
    path.value = p;
    console.log(path.value);
}

</script>

<template>
    <div class="left-wrapper w-72 border-r-2 flex flex-col justify-between">
        <div class="menu-wrapper">
            <div class="py-1">
                <h4 class="title px-3 text-sm text-gray-500 py-2">推荐</h4>
                <ul>
                    <li :class="{ 'bg-gray-200 border-l-4 border-red-600': path === option.path }"
                        v-for="option, index in routes.slice(0, 4)" :key="option.path"
                        class="pl-5 px-3 py-2 text-xs text-gray-800 cursor-pointer">
                        <router-link @click="() => linkClickHandler(option.path)" :to="option.path">
                            <div class="flex gap-x-3">
                                <ListIcon :id="`${index + 1}`" />
                                {{ option.text }}
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="py-1">
                <h4 class="title px-3 text-sm text-gray-500 py-2">
                    我的音乐

                </h4>
                <ul>
                    <!-- <li class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">本地音乐</li> -->
                    <!-- <li class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">下载管理</li> -->
                    <!-- <li class="pl-2 text-sm text-gray-800 py-1 cursor-pointer">我的音乐云盘</li> -->
                    <li :class="{ 'bg-gray-200 border-l-4 border-red-600': path === option.path }"
                        v-for="option in routes.slice(4, 5)" :key="option.path"
                        class="pl-5 px-3 text-xs text-gray-800 py-2 cursor-pointer">
                        <router-link @click="() => linkClickHandler(option.path)" :to="option.path">
                            <div class="flex gap-x-3">
                                <UserMusicIcon class="w-4" fill="gray" />
                                {{ option.text }}
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="py-1">
                <h4 class="title px-3 text-sm text-gray-500 py-2">创建的歌单</h4>
                <ul>
                    <li :class="{ 'bg-gray-200 border-l-4 border-red-600': path === option.path }"
                        v-for="option in routes.slice(5, 6)" :key="option.path"
                        class="pl-5 px-3 text-xs text-gray-800 py-2 cursor-pointer">
                        <router-link @click="() => linkClickHandler(option.path)" :to="option.path">
                            <div class="flex gap-x-3">
                                <HeartIcon class="w-4" fill="gray" />
                                {{ option.text }}
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="py-1">
                <h4 class="title px-3 text-sm text-gray-500 py-2">收藏的歌单</h4>
                <ul>
                    <li class="pl-5 px-3 text-xs text-gray-800 py-1 cursor-pointer">
                        <div class="flex gap-x-3">
                            <ListMusicIcon class="w-4" fill="gray" />
                            暗恋心事 | 过季的爱只剩酸涩
                        </div>
                    </li>
                    <li class="pl-5 px-3 text-xs text-gray-800 py-1 cursor-pointer">
                        <div class="flex gap-x-3">
                            <ListMusicIcon class="w-4" fill="gray" />
                            千里行走和更多好听的华语私人雷达
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t flex" v-show="musicId">
            <AudioShow />
        </div>
    </div>
</template>