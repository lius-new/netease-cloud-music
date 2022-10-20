<script setup lang="ts">
import { defineProps } from 'vue'
import icons from '../../components/icons'
interface Ipops {
    title: string
}

const props = defineProps<Ipops>();

</script>

<template>

    <header class="header-wrapper flex items-center justify-between px-4  bg-red-600 h-16">
        <div class="left-wrapper flex">
            <div class="log-wrapper flex w-64">
                <div class="flex items-center gap-x-4">
                    <div class="flex  cursor-pointer">
                        <img class="w-8 h-8" src="../../assets/logo-0.png" alt="">
                    </div>
                    <p class="text-lg text-white cursor-pointer" :title="props.title">
                        {{props.title}}
                    </p>
                </div>
            </div>
            <div class="next-pre-search-wrapper flex items-center w-64 gap-x-4">
                <div class="flex justify-center items-center">
                    <span
                        class="w-7 cursor-pointer h-5 flex justify-center items-center rounded-sm rounded-tr-none rounded-br-none border border-r-0 border-slate-600 border-opacity-50 text-white font-bold">
                        <icons.ChevornLeftIcon width="9" fill="white" />
                    </span>
                    <span
                        class="w-7 cursor-pointer h-5 flex justify-center items-center rounded-sm rounded-tl-none rounded-bl-none border border-gray-600 border-opacity-50 text-white font-bold">
                        <icons.ChevornRightIcon width="9" fill="#DDD1C6" />
                    </span>
                </div>
                <div
                    class="flex justify-center items-center px-4  bg-slate-600 bg-opacity-50 text-white text-sm h-6 rounded-xl">
                    <input class="h-6 pl-2 pr-2 rounded-xl bg-transparent  bg-opacity-50  focus:outline-0" type="text"
                        placeholder="搜索音乐,歌词,歌手,用户">
                    <icons.SearchIcon width="16" fill="#DDD1C6" />
                </div>
            </div>
        </div>
        <div class="right-wrapper flex divide-x divide-gray-600">
            <div class="option-wrapper flex  pr-8">
                <ul class="w-full flex gap-x-6 items-center">
                    <li class="text-xs flex cursor-pointer gap-x-1">
                        <icons.UserIcon width="16" fill="#DDD1C6" />
                        <p class=" flex items-end text-white">用户名</p>
                    </li>
                    <li class=" cursor-pointer">
                        <icons.ShiftIcon width="20" fill="#DDD1C6" />
                    </li>
                    <li class=" cursor-pointer">
                        <icons.GearIcon width="16" fill="#DDD1C6" />
                    </li>
                </ul>
            </div>
            <div class="window-operate-wrapper pl-8">
                <ul class="flex justify-between gap-x-3">
                    <li class="text-slate-100 text-md cursor-pointer">
                        <icons.MinusIcon width="16" fill="#DDD1C6" />
                    </li>
                    <li class="text-slate-100 text-md cursor-pointer">
                        <icons.ExpandIcon width="16" fill="#DDD1C6" />
                    </li>
                    <li class="text-slate-100 text-md cursor-pointer">
                        <icons.XmarkIcon width="16" fill="#DDD1C6" />
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>