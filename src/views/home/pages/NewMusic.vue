<script setup lang="ts">

const tags = ['全部', '华语', '欧美', '韩国', '日本']

</script>

<template>
    <div class="options-wrapper mb-4 2xl:w-2/3 mx-auto border-b pb-1">
        <div class=" flex justify-center ">
            <button class="border rounded-sm px-4 py-1">新歌速递</button>
            <button class="border rounded-sm px-4 py-1">新碟上架</button>
        </div>
        <ul class="flex pt-4 gap-x-6 text-sm">
            <li v-for="n in tags" :key="n">{{n}}</li>
        </ul>
    </div>
    <div class="mb-4 2xl:w-2/3 mx-auto">
        <ul class="flex flex-col gap-y-2">
            <li class="bg-gray-200" v-for="n in 100" :key="n">{{n}}</li>
        </ul>
    </div>
</template>