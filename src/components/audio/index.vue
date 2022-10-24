<script setup lang="ts">
import { watch } from 'fs';
import { onMounted, ref } from 'vue'
import api from "../../api/index";
import { musicId } from '../../store/index'

const url = ref<string>('');

// watch(musicId.value, (old, new) => {
//     console.log('发生改变');
// })

if (musicId.value) {
    console.log('--请求--');
    // api.get(`/song/url/v1?id=${musicId.value}&level=exhigh`).then(res => {
    api.get(`/song/url?id=7699382151`).then(res => {
        url.value = res.data.url;
        console.log('返回的数据:' + res.data);
    })
}


</script>

<template>
    <audio controls v-if="musicId">
        <!-- 
            
         -->
        <source
            src="http://m8.music.126.net/20221024225544/4966814384e…d6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
            type="audio/mp3" />
        <source :src="url" type="audio/mp3" />
        你的浏览器不支持audio元素
    </audio>
</template>