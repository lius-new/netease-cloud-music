<script setup lang="ts">

</script>

<template>
    <div class="content-wrapper py-6 flex-auto overflow-y-scroll no-scrollbar">
        <div class="flex items-center border-b gap-x-4 px-4">
            <h3 class="text-lg py-1">我的歌手</h3>
            <p class="text-xs text-gray-500 self-end py-1">3位歌手</p>
        </div>
        <ul class="px-4 gap-y-2 flex flex-col">
            <li class="h-20 flex justify-center items-center bg-slate-500" v-for="n in 3" :key="n">{{n}}</li>
        </ul>
    </div>
</template>