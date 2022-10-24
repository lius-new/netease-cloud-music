<script setup lang="ts">
import { ref } from 'vue';
import api from '../../.../../../../../api/index'
import IconList from './icon-list.vue'

// 节目列表
const categories = ref<any>([])

// 精彩节目推荐
const programs = ref<any>([]);

// 谈情说爱-电台
const sayLoves = ref<any>([]);
// 热门-电台
const hotList = ref<any>([])

api.get('/dj/catelist')
    .then(res => {
        categories.value = [{ name: '排行榜' }, ...res.data.categories]
    })

api.get('/program/recommend')
    .then(res => {
        programs.value = res.data.programs.slice(0, 4);
    })

api.get('/dj/recommend').then(res => sayLoves.value = res.data.djRadios.slice(0, 6))

api.get('/dj/hot').then(res => hotList.value = res.data.djRadios)

</script>

<template>
    <div class="option-wrapper 2xl:w-2/3 mx-auto mb-10">
        <ul class="grid grid-cols-9 gap-x-4 gap-y-6">
            <li class=" h-20 relative flex flex-col justify-center gap-y-2 cursor-pointer hover:bg-gray-300 rounded-md"
                v-for="categorie ,index in categories" :key="index">
                <p class="flex justify-center">
                    <IconList :index="index" :width_="6" />
                </p>
                <p class="text-xs flex justify-center text-gray-500">
                    {{categorie.name}}
                </p>
            </li>
        </ul>
    </div>
    <div class="2xl:w-2/3 mx-auto">
        <h3 class="border-b py-4 my-4 text-xl">精彩节目推荐</h3>
        <ul class="grid grid-cols-2 gap-x-4">
            <li class="h-32 flex gap-x-4" :class="{'border-t pt-6':index>1}" v-for=" program,index in programs"
                :key="program">
                <img :src="program.coverUrl" class="w-24 h-24" alt="">
                <p class="text-sm whitespace-nowrap overflow-hidden truncate">
                    {{program.name}}
                </p>
            </li>
        </ul>
    </div>
    <div class="2xl:w-2/3 mx-auto mb-20">
        <h3 class="border-b py-4 my-4 text-xl">精彩电台-谈情说爱</h3>
        <ul class="grid grid-cols-6 gap-x-4">
            <li class="" v-for="item in sayLoves" :key="item.id">
                <div>
                    <img class="w-44 h-40" :src="item.picUrl" alt="">
                    <p class="text-sm whitespace-nowrap overflow-hidden truncate">
                        {{item.copywriter}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
    <div class="2xl:w-2/3 mx-auto">
        <h3 class="border-b py-4 my-4 text-xl">热门电台</h3>
        <ul class="grid grid-cols-6 gap-x-4 gap-y-6">
            <li class="flex flex-col gap-y-2" v-for="item in hotList" :key="item.id">
                <img class="h-40 w-40" :src="item.picUrl" alt="">
                <p class="text-sm whitespace-nowrap overflow-hidden truncate">
                    {{item.name}}
                </p>
            </li>
        </ul>
    </div>
</template>