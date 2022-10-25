<script setup lang="ts">
import { musicMsg } from '../../store/index'
import { HeartIcon, TrashIcon } from '../../components/icons/index'
</script>

<template>
    <div class="w-20 h-20 bg-slate-300" :class="{ 'hover:opacity-80 hover:cursor-pointer': musicMsg.picUrl }">
        <img :src="musicMsg.picUrl" />
    </div>
    <div class="flex items-center px-2 py-2 justify-between flex-auto">
        <div class="music-msg ">
            <ul class="flex flex-col justify-around h-full">
                <li class="font-mono" :class="{ 'hover:cursor-pointer': musicMsg.name }">{{ musicMsg.name || '选择歌曲' }}
                </li>
                <li class="text-sm" :class="{ 'hover:cursor-pointer': musicMsg.author }">{{ musicMsg.author || '' }}
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