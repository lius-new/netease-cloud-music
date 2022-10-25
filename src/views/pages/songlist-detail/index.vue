<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPlaylistDetail, getPlaylistTrack } from '../../../api/server/songlist-detail'
import { changeMusicId } from '../../../store/index'

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
    changeMusicId(id);
}

</script>

<template>
    <div class="content-wrapper py-6 px-10 flex-auto overflow-y-scroll no-scrollbar flex flex-col">
        <div class="flex gap-x-8">
            <div class="w-60  bg-slate-500">
                <img :src="playListState.playListDesc.playlist?.coverImgUrl" alt="">
            </div>
            <div class="w-full ">
                <div class="flex justify-between">
                    <p>
                        {{ playListState.playListDesc.playlist?.name }}
                    </p>
                    <div>

                        <p>{{ playListState.playListDesc.playlist?.trackCount }}</p>
                        <p>{{ playListState.playListDesc.playlist?.playCount }}</p>
                    </div>
                </div>
                <div class="flex">
                    <div>作者:{{ playListState.playListDesc.playlist?.creator.nickname }}</div>
                    <div>{{ new Date(playListState.playListDesc.playlist?.createTime) }}2020-02创建</div>
                </div>
                <div class="flex">
                    <button>播放全部</button>
                    <button>已收藏{{ playListState.playListDesc.playlist?.subscribedCount }}</button>
                    <button>分享{{ playListState.playListDesc.playlist?.shareCount }}</button>
                </div>
                <div>
                    <p>标签: {{ playListState.playListDesc.playlist?.tags }}/</p>
                    <p>简介 : {{ playListState.playListDesc.playlist?.description }}</p>
                </div>
            </div>
        </div>
        <div>
            <ul class="flex flex-col justify-center items-center gap-y-10 hover:cursor-pointer">
                <li @click="() => handleClick(n.id)" v-for="n in playListState.playList" :key="n">{{ n.name }}</li>
            </ul>
        </div>
    </div>
</template>