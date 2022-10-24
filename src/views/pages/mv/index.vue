<script setup lang="ts">

const tags1 = ['内地', '港台', '欧美', '日本', '韩国'];

</script>

<template>
    <div class="content-wrapper px-10 py-4 flex-auto overflow-y-scroll no-scrollbar ">
        <div class="flex gap-x-2 mx-auto  justify-center">
            <button class="border px-4 py ">Mv精选</button>
            <button class="border px-4 py ">网易出品</button>
            <button class="border px-4 py ">全部Mv</button>
        </div>
        <div class="2xl:w-3/4 mx-auto">
            <div class="flex items-end justify-between border-b py-2">
                <div class="flex gap-x-6">
                    <h3 class="text-lg">最新MV</h3>
                    <ul class="flex text-xs divide-x items-end">
                        <li class="px-4 text-gray-500" v-for="tag in tags1" :key="tag">{{tag}}</li>
                    </ul>
                </div>
                <div class=" text-gray-500 text-xs">更多&gt;&gt;</div>
            </div>
            <div class="grid grid-cols-4 gap-x-4 gap-y-6 py-4">
                <div class="h-36 2xl:h-48 bg-slate-400" v-for="n in 8" :key="n">{{n}}</div>
            </div>
        </div>
        <div class="2xl:w-3/4 mx-auto">
            <div class="flex items-end justify-between border-b py-2">
                <div class="flex gap-x-6">
                    <h3 class="text-lg">热播MV</h3>
                </div>
                <div class=" text-gray-500 text-xs">更多&gt;&gt;</div>
            </div>
            <div class="grid grid-cols-4 gap-x-4 gap-y-6 py-4">
                <div class="h-36 2xl:h-48 bg-slate-400" v-for="n in 8" :key="n">{{n}}</div>
            </div>
        </div>
        <div class="2xl:w-3/4 mx-auto">
            <div class="flex items-end justify-between border-b py-2">
                <div class="flex gap-x-6">
                    <h3 class="text-lg">MV排行榜</h3>
                    <ul class="flex text-xs divide-x items-end">
                        <li class="px-4 text-gray-500" v-for="tag in tags1" :key="tag">{{tag}}</li>
                    </ul>
                </div>
                <div class=" text-gray-500 text-xs">更多&gt;&gt;</div>
            </div>
            <div class="grid grid-cols-2 gap-x-4 gap-y-6 py-4">
                <div class="h-36 2xl:h-48 bg-slate-400" v-for="n in 8" :key="n">{{n}}</div>
            </div>
        </div>
    </div>
</template>