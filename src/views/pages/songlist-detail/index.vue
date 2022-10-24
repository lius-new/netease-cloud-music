<script setup lang="ts">
import api from '../../../api/index'
import { useRoute } from 'vue-router'
import { ref } from 'vue'


const route = useRoute();
const { id } = route.query;

const playListDesc = ref<any>({});
const playList = ref<any>({});

api.get(`/playlist/detail?id=${id}`)
    .then(res => {
        playListDesc.value = res.data
    })
    .catch(err => console.log(err))

api.get(`/playlist/track/all?id=${id}`)
    .then(res => {
        playList.value = res.data.songs
    })
    .catch(err => console.log(err))

</script>

<template>
    <div class="content-wrapper py-6 px-10 flex-auto overflow-y-scroll no-scrollbar flex flex-col">
        <div class="flex gap-x-8">
            <div class="w-60  bg-slate-500">
                <img :src="playList.playlist?.coverImgUrl" alt="">
            </div>
            <div class="w-full ">
                <div class="flex justify-between">
                    <p>
                        {{playListDesc.playlist?.name}}
                    </p>
                    <div>

                        <p>{{playListDesc.playlist?.trackCount}}</p>
                        <p>{{playListDesc.playlist?.playCount}}</p>
                    </div>
                </div>
                <div class="flex">
                    <div>作者:{{playListDesc.playlist?.creator.nickname}}</div>
                    <div>{{new Date(playListDesc.playlist?.createTime)}}2020-02创建</div>
                </div>
                <div class="flex">
                    <button>播放全部</button>
                    <button>已收藏{{playListDesc.playlist?.subscribedCount}}</button>
                    <button>分享{{playListDesc.playlist?.shareCount}}</button>
                </div>
                <div>
                    <p>标签: {{playListDesc.playlist?.tags}}/</p>
                    <p>简介 : {{playListDesc.playlist?.description}}</p>
                </div>
            </div>
        </div>
        <div>
            <ul class="flex flex-col justify-center items-center gap-y-10">
                <li v-for="n in playList" :key="n">{{n.name}}</li>
            </ul>
        </div>
    </div>
</template>