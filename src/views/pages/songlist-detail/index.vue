<script setup lang="ts">
// 歌单详情
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { formatWanToTenThousand, getYearMonthDay, getTime } from '../../../utils/index'
import { MusicNoteIcon, CirclePlayIcon, FolderPlusIcon, ShareSquareIcon, HeartIcon } from '../../../components/icons/index'
import { getPlaylistDetail, getPlaylistTrack } from '../../../api/server/songlist-detail'
import { musicStore } from '../../../store/index'
import Button from '../../../components/button/index.vue'

const { id } = useRoute().query;

const playListState = reactive({
    playListDesc: ref<any>({}),
    playList: ref<any>({})
})

getPlaylistDetail(id as string).then(res => {
    playListState.playListDesc = res
})

getPlaylistTrack(id as string).then(res => {
    playListState.playList = res
})

const handleClick = (id: string) => {
    musicStore.update().changeMusicId(id);
}

</script>

<template>
    <div class="content-wrapper py-6  w-full overflow-y-scroll no-scrollbar flex flex-col">
        <div class="flex gap-x-8 px-10">
            <div class="w-60 ">
                <img :src="playListState.playListDesc.playlist?.coverImgUrl" alt="">
            </div>
            <div class="w-full ">
                <div class="flex justify-between my-3">
                    <p class="text-xl flex items-center gap-x-2">
                        <strong class="bg-red-700 text-white px-2 py-1 text-xs">歌单</strong>
                        {{ playListState.playListDesc.playlist?.name }}
                    </p>
                    <div class="flex gap-x-4 text-sm items-center">
                        <p class="flex items-center gap-x-1 text-gray-600">
                            <MusicNoteIcon class="w-3" fill="gray" />
                            {{ formatWanToTenThousand(playListState.playListDesc.playlist?.trackCount) }}
                        </p>
                        <p class="flex items-center gap-x-1 text-gray-600">
                            <CirclePlayIcon class="w-4" fill="gray" />
                            {{ formatWanToTenThousand(playListState.playListDesc.playlist?.playCount) }}
                        </p>
                    </div>
                </div>
                <div class="flex gap-x-4 my-3">
                    <div class="flex gap-x-2 items-center text-gray-500">
                        <img :src="playListState.playListDesc.playlist?.creator.avatarUrl" class="w-8 h-8 rounded-full"
                            alt="">
                        <div class=" h-full flex items-center text-sm text-gray-700">
                            {{ playListState.playListDesc.playlist?.creator.nickname }}
                        </div>
                        <div class="text-xs h-full flex items-center">{{ getYearMonthDay(new
                                Date(playListState.playListDesc.playlist?.createTime))
                        }}创建</div>
                    </div>
                </div>
                <div class="flex gap-x-4 my-3">
                    <Button class="px-2 py-1 rounded-sm text-xs border-gray-400 flex gap-x-2">
                        <CirclePlayIcon class="w-4" fill="#B91C1C" />
                        <p>播放全部</p>
                    </Button>
                    <Button class="px-2 py-1 rounded-sm text-xs border-gray-400 flex gap-x-2">
                        <FolderPlusIcon class="w-4" fill="gray" />
                        <p>
                            已收藏({{ playListState.playListDesc.playlist?.subscribedCount }})
                        </p>
                    </Button>
                    <Button class="px-2 py-1 rounded-sm text-xs border-gray-400 flex gap-x-2">
                        <ShareSquareIcon class="w-4" fill="gray" />
                        <p>
                            分享{{ playListState.playListDesc.playlist?.shareCount }}
                        </p>
                    </Button>
                </div>
                <div class="text-xs my-2 flex flex-col gap-y-4">
                    <div class="flex gap-x-3">
                        标签:
                        <ul class="flex">
                            <li class="text-blue-600 cursor-pointer"
                                v-for="tag, index in playListState.playListDesc.playlist?.tags" :key="index">
                                {{ tag }}<i class="mx-2 text-black">/</i>
                            </li>
                        </ul>
                    </div>
                    <p class="w-96 overflow-hidden truncate">简介 : {{ playListState.playListDesc.playlist?.description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="my-12">
            <div class="border-b border-red-700 flex gap-x-2">
                <div class=" cursor-pointer px-4 ml-12 h-7 flex items-center bg-red-500 text-slate-50">歌曲列表</div>
                <div class=" cursor-pointer border-t border-l border-r border-gray-400 px-4 h-7 flex items-center">评论
                </div>
                <div class=" cursor-pointer border-t border-l border-r border-gray-400 px-4 h-7 flex items-center">收藏者
                </div>
            </div>
            <ul class="w-full flex flex-col justify-center items-center">
                <li class="grid w-full grid-cols-12 border-b whitespace-nowrap">
                    <div class="col-span-2 2xl:col-span-1 grid grid-cols-2 border-r border-gray-200 text-center">
                        <p></p>
                        <p class="border-l border-gray-200 ">操作</p>
                    </div>
                    <p class="col-span-3 2xl:col-span-4 border-r border-gray-200 px-4">音乐标题</p>
                    <p class="col-span-2 2xl:col-span-3 border-r border-gray-200 px-4">歌手</p>
                    <p class="col-span-2 2xl:col-span-3 border-r border-gray-200 px-4">专辑</p>
                    <p class="col-span-1 px-4">时长</p>
                </li>
                <li class="grid w-full grid-cols-12 whitespace-nowrap h-8 items-center odd:bg-gray-50 text-sm hover:bg-gray-200"
                    @click="() => handleClick(n.id)" v-for="n, index in playListState.playList" :key="n">
                    <div class="col-span-2 2xl:col-span-1 flex justify-end gap-x-4 pr-6">
                        <p class="text-gray-500">{{ index + 1 }}</p>
                        <HeartIcon class="w-4" fill="gray" />
                    </div>
                    <p class="cursor-pointer col-span-3 2xl:col-span-4 px-4 overflow-hidden truncate">{{ n.name }}</p>
                    <p class=" overflow-hidden col-span-2 2xl:col-span-3 px-4 truncate">{{ n.ar[0].name }}</p>
                    <p class=" overflow-hidden col-span-2 2xl:col-span-3 px-4 truncate">{{ n.al.name }}</p>
                    <p class=" overflow-hidden col-span-1 px-4">{{ getTime(n.dt) }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>