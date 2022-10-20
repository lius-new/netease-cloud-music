<script setup lang="ts">

const tab = ['华语', '流行', '摇滚', '民谣', '电子', '另类/独立', '轻音乐', '综艺', '影视原声', 'ACG']

</script>

<template>
    <div class="options-wrapper mb-4">
        <div>
            <button class="border text-sm px-4 py-1 rounded-md">全部歌单</button>
        </div>
        <div class="flex gap-x-4 mt-2">
            <h3 class="whitespace-nowrap text-sm">热门标签:</h3>
            <ul class="flex justify-between  divide-x">
                <li class="text-xs text-gray-500 flex items-center px-2 lg:px-4 cursor-pointer whitespace-nowrap" v-for="t,index in tab"
                    :key="index">{{t}}</li>
            </ul>
        </div>
    </div>
    <div class="grid grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-6">
        <div class="flex justify-center items-center h-48 bg-gray-400" v-for="n in 40" :key="n">{{n}}</div>
    </div>
</template>