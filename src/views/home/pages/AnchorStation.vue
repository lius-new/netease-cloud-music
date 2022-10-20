<script setup lang="ts">

const tab = ['华语', '流行', '摇滚', '民谣', '电子', '另类/独立', '轻音乐', '综艺', '影视原声', 'ACG']

</script>

<template>
    <div class="option-wrapper 2xl:w-2/3 mx-auto mb-10">
        <ul class="grid grid-cols-9 gap-x-4 gap-y-6">
            <li class="bg-gray-400 h-20" v-for="n in 25" :key="n">{{n}}</li>
        </ul>
    </div>
    <div class="2xl:w-2/3 mx-auto">
        <h3 class="border-b py-4 my-4 text-xl">精彩节目推荐</h3>
        <ul class="grid grid-cols-2 gap-x-4 gap-y-6">
            <li class="bg-gray-400 h-32" v-for="n in 4" :key="n">{{n}}</li>
        </ul>
    </div>
    <div class="2xl:w-2/3 mx-auto">
        <h3 class="border-b py-4 my-4 text-xl">精彩电台-谈情说爱</h3>
        <ul class="grid grid-cols-6 gap-x-4">
            <li class="bg-gray-400 h-32" v-for="n in 6" :key="n">{{n}}</li>
        </ul>
    </div>
    <div class="2xl:w-2/3 mx-auto">
        <h3 class="border-b py-4 my-4 text-xl">热门电台</h3>
        <ul class="grid grid-cols-6 gap-x-4 gap-y-6">
            <li class="bg-gray-400 h-32" v-for="n in 32" :key="n">{{n}}</li>
        </ul>
    </div>
</template>