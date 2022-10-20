<script setup lang="ts">
import Layout from '../../layouts/index.vue'
import ListMenu from '../global/list-menu.vue'

</script>

<template>
    <div class="h-64 bg-green-100 w-full xl:w-4/5 2xl:w-2/3 mx-auto">
        轮播图
    </div>
    <div class="w-full xl:w-5/6 2xl:w-2/3 mx-auto">
        <div>
            <div class=" py-6 pb-2 flex border-b justify-between items-center">
                <h3 class="text-lg ">推荐歌单</h3>
                <p class="text-xs text-gray-400 cursor-pointer">更多&gt;&gt;</p>
            </div>
            <div class="grid grid-cols-5 gap-4 gap-y-16">
                <div class="bg-slate-500 text-center h-32 2xl:h-48" v-for="n in 10" :key="n">{{n}}</div>
            </div>
        </div>
        <div>
            <div class=" py-6 pb-2 flex border-b justify-between items-center">
                <h3 class="text-lg ">独家放送</h3>
                <p class="text-xs text-gray-400 cursor-pointer">更多&gt;&gt;</p>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-slate-500 text-center h-48" v-for="n in 3" :key="n">{{n}}</div>
            </div>
        </div>
        <div>
            <div class=" py-6 pb-2 flex border-b justify-between items-center">
                <h3 class="text-lg ">最新音乐</h3>
                <p class="text-xs text-gray-400 cursor-pointer">更多&gt;&gt;</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-500 text-center h-10" v-for="n in 10" :key="n">{{n}}</div>
            </div>
        </div>
        <div>
            <div class=" py-6 pb-2 flex border-b justify-between items-center">
                <h3 class="text-lg ">推荐MV</h3>
                <p class="text-xs text-gray-400 cursor-pointer">更多&gt;&gt;</p>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <div class="bg-slate-500 text-center h-48" v-for="n in 4" :key="n">{{n}}</div>
            </div>
        </div>
        <div>
            <div class=" py-6 pb-2 flex border-b justify-between items-center">
                <h3 class="text-lg ">主播电台</h3>
                <p class="text-xs text-gray-400 cursor-pointer">更多&gt;&gt;</p>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-slate-500 text-center h-36" v-for="n in 6" :key="n">{{n}}</div>
            </div>
        </div>
        <div class="border-t my-6 h-36 flex flex-col items-center justify-center gap-y-4">
            <p class="text-sm text-gray-500">现在可以根据个人喜好，自由调整首页栏目顺序啦～</p>
            <button class="border border-orange-500 px-4 py-1 rounded-md">调整栏目顺序</button>
        </div>
    </div>
</template>