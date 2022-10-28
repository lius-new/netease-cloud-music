<script setup lang="ts">
import { musicStore } from '../../store/index'
import { HeartIcon, TrashIcon } from '../../components/icons/index'
const { musicMsg } = musicStore.data
</script>

<template>
    <div class="w-16 h-16 bg-slate-300" :class="{ 'hover:opacity-80 hover:cursor-pointer': musicMsg.picUrl }">
        <img v-if="musicMsg.picUrl" class="w-full h-full" :src="musicMsg.picUrl" />
    </div>
    <div class="flex h-16 items-center px-2 justify-between flex-auto">
        <div class="music-msg ">
            <ul class="flex flex-col justify-around h-full">
                <li class="font-mono text-sm  overflow-hidden" :class="{ 'hover:cursor-pointer': musicMsg.name }">{{
                        musicMsg.name || '选择歌曲'
                }}
                </li>
                <li class="text-xs" :class="{ 'hover:cursor-pointer': musicMsg.author }">{{ musicMsg.author || '' }}
                </li>
            </ul>
        </div>
        <div class="flex flex-col justify-around h-full">
            <span>
                <HeartIcon class="w-4 cursor-pointer" fill="gray" />
            </span>
            <span>
                <TrashIcon class="w-4 cursor-pointer" fill="gray" />
            </span>
        </div>
    </div>
</template>