<script setup lang="ts">

</script>

<template>
    <div class="options-wrapper mb-4 xl:w-4/5 2xl:w-3/5 mx-auto">
        <h3 class="border-b py-4 my-2 text-lg">官方榜</h3>
        <div class="grid grid-cols-3 gap-x-4 gap-y-8">
            <div class="h-80 bg-slate-300" v-for="n in 5" :key="n">{{n}}</div>
        </div>
    </div>
    <div class="options-wrapper mb-4 xl:w-4/5 2xl:w-3/5 mx-auto">
        <h3 class="border-b py-4 my-2 text-lg">全球榜单</h3>
        <div class="grid 2xl:grid-cols-6 grid-cols-5 gap-x-4 gap-y-6">
            <div class="h-24 bg-slate-300" v-for="n in 58" :key="n">{{n}}</div>
        </div>
    </div>
</template>