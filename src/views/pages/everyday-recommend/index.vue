<script setup lang="ts">
// 歌单详情
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getDayHan, getTime } from '../../../utils/index'
import { HeartIcon, CirclePlayIcon } from '../../../components/icons/index'
import api from '../../../api'
import { musicStore } from '../../../store/index'
import { PassThrough } from 'stream'

const playListState = reactive({
    playList: ref<any>({})
})

api.get('/recommend/songs?cookie=MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/neapi/feedback; HTTPOnly;__csrf=46e9b720f7832fac54512c41b7cd5915; Max-Age=1296010; Expires=Wed, 16 Nov 2022 02:01:05 GMT; Path=/;;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/api/feedback; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/api/feedback; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_SNS=; Max-Age=0; Expires=Tue, 01 Nov 2022 02:00:55 GMT; Path=/;MUSIC_U=e477bf7e4171c610ee61bf1e682aa93b86ca5508b50996fe1f050f0ed3772916c84e8a4f4ba4f13e3ce9894d22a3e3d44673be6a4f3e81a025be65314b5d70e1233816d9502a6727d4dbf082a8813684; Max-Age=15552000; Expires=Sun, 30 Apr 2023 02:00:55 GMT; Path=/; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1600933731835; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_R_T=1625308270592; Max-Age=2147483647; Expires=Sun, 19 Nov 2090 05:15:02 GMT; Path=/neapi/clientlog; HTTPOnly').then((res) => {
    playListState.playList.value = res.data.data.dailySongs
})

const handleClick = (id: string) => {
    musicStore.update().changeMusicId(id);
}

</script>

<template>
    <div class="content-wrapper py-6  w-full overflow-y-scroll no-scrollbar flex flex-col">
        <div class="flex px-10 ">
            <div
                class="w-32 h-32 flex flex-col justify-center items-center overflow-hidden bg-white border border-gray-300">
                <span class="text-xl text-gray-600">
                    星期{{ getDayHan(new Date().getDay() + '') }}
                </span>
                <span class="text-4xl text-red-600">
                    {{ new Date().getDate() }}
                </span>
            </div>
            <div class="mx-4">
                <div class="flex justify-between my-3 text-xl">
                    每日歌曲推荐
                </div>
                <div class="flex gap-x-4 my-4 text-xs text-gray-400">
                    根据你的音乐口味生成，每天6:00更新
                </div>
            </div>
        </div>
        <div class="my-12 px-10 ">
            <ul class="w-full flex flex-col justify-center items-center border">
                <li class="grid w-full grid-cols-12 whitespace-nowrap h-8 items-center  text-sm hover:bg-gray-200 ">
                    <div class="col-span-2 2xl:col-span-1 flex justify-around pl-6">
                        <CirclePlayIcon class="w-4" fill="#AD1414" />
                        <p class="text-gray-500"> 播放全部</p>
                    </div>
                    <p class="cursor-pointer col-span-3 2xl:col-span-4 px-4 overflow-hidden truncate">{{ }}</p>
                    <p class=" overflow-hidden col-span-3 2xl:col-span-3 px-4 truncate">{{ }}</p>
                    <p class=" overflow-hidden col-span-2 2xl:col-span-3 px-4 truncate">{{ }}</p>
                    <p class="  col-span-1 px-4">
                        <button class="border outline-none px-4 py-0.5 border-gray-500">收藏全部</button>
                    </p>
                </li>
                <li class="grid w-full grid-cols-12 whitespace-nowrap h-8 items-center even:bg-gray-50 text-sm hover:bg-gray-200"
                    @click="() => handleClick(n.id)" v-for="n, index in playListState.playList.value" :key="index">
                    <div class="col-span-2 2xl:col-span-1 flex justify-center gap-x-4 pr-6">
                        <p class="text-gray-500">{{ index + 1 }}</p>
                        <HeartIcon class="w-4" fill="gray" />
                    </div>
                    <p class="cursor-pointer col-span-3 2xl:col-span-4 px-4 overflow-hidden truncate">{{ n.name }}</p>
                    <p class=" overflow-hidden col-span-3 2xl:col-span-3 px-4 truncate">{{ n.ar[0].name }}</p>
                    <p class=" overflow-hidden col-span-2 2xl:col-span-3 px-4 truncate">{{ n.name }}</p>
                    <p class=" overflow-hidden col-span-1 px-4">{{ getTime(n.dt) }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>