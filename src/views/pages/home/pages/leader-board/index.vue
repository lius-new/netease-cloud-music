<script setup lang="ts">
import { watch, ref } from "vue";
import api from "../../../../../api/index";
import TopList from './TopList.vue'

// 排行榜分类
const topListCategories = ref<any>([]);
// 歌手排行榜
const songerTopList = ref<any>([]);

api.get('/toplist').then(res => {
    res.data.list.splice(4, 0, res.data.artistToplist)
    topListCategories.value = res.data.list;
});

api.get('/toplist/artist').then((res) => {
    songerTopList.value = res.data.list.artists.slice(0, 8);
})

</script>

<template>
    <div class="options-wrapper mb-4 xl:w-4/5 2xl:w-3/5 mx-auto">
        <h3 class="border-b py-4 my-2 text-lg">官方榜</h3>
        <div class="grid grid-cols-3 gap-x-4 gap-y-8">
            <div class="h-80 bg-slate-300" v-for="item,index in topListCategories.slice(0,5)" :key="index">
                <div>
                    {{item.name}}
                </div>
                <div>

                    <TopList v-if="index!=4" :id="`${item.id}`" />
                    <template v-if="index===4">
                        <ul>
                            <li v-for="songer,index in songerTopList" :key="index">{{songer.name}}</li>
                        </ul>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <div class="options-wrapper mb-4 xl:w-4/5 2xl:w-3/5 mx-auto">
        <h3 class="border-b py-4 my-2 text-lg">全球榜单</h3>
        <div class="grid 2xl:grid-cols-6 grid-cols-5 gap-x-4 gap-y-6">
            <div class="h-24 bg-slate-300" v-for="item,index in topListCategories.slice(5)" :key="index">{{item.name}}
            </div>
        </div>
    </div>
</template>