<script setup lang="ts">
import { ref, reactive, onBeforeMount } from "vue";
import { IPropPersonalRecommendation } from '../../../../../typings/pages/home'
import { initServer } from "../../../../../api/server/personal-recommendation";
import Banner from './Banner.vue'
import RecommandPlaylist from "./RecommandPlaylist.vue";
import PrivateContents from "./PrivateContents.vue";
import NewSongs from "./NewSongs.vue";
import DjPrograms from "./DjPrograms.vue";

// state
const pageState: IPropPersonalRecommendation = reactive({
    recommands: ref<any>([]), // 歌单
    privatecontents: ref<any>([]), // 独家放松
    newsongs: ref<any>([]), // 最新音乐
    mvs: ref<any>([]), // 最新mv
    djprograms: ref<any>([]), // 最新dj
})

// init state
onBeforeMount(() => initServer(pageState))

</script>

<template>
    <div class="h-64 w-full xl:w-4/5 2xl:w-2/3 mx-auto">
        <Banner />
    </div>
    <div class="w-full xl:w-5/6 2xl:w-2/3 mx-auto select-none">
        <RecommandPlaylist :recommands="pageState.recommands" />
        <PrivateContents :privatecontents="pageState.privatecontents" />
        <NewSongs :newsongs="pageState.newsongs" />
        <DjPrograms :djprograms="pageState.djprograms" />
        <div class="border-t my-6 h-36 flex flex-col items-center justify-center gap-y-4">
            <p class="text-sm text-gray-500">现在可以根据个人喜好，自由调整首页栏目顺序啦～</p>
            <button class="border border-orange-500 px-4 py-1 rounded-md">调整栏目顺序</button>
        </div>
    </div>
</template>