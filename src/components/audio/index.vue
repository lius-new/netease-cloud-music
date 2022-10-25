<script setup lang="ts">
import { watch, reactive, ref } from 'vue'
import api from "../../api/index";
import { musicId } from '../../store/index'

const url = ref<string>('');

const checker = reactive({
    checkUse: ref<boolean>(false),
    message: ref<any>('')
})

watch(musicId, () => {
    api.get(`/check/music?id=${musicId}`).then(res => {
        checker.checkUse = res.data.success;
        checker.message = res.data.message;

        if (checker.checkUse) {
            api.get(`/song/url/v1?id=${musicId}&level=exhigh`).then((res) => {
                console.log(res.data);
            })
        }
    })
})
</script>

<template>
    <template v-if="musicId && checker.checkUse">
        <audio controls v-if="musicId && checker.checkUse">
            <source :src="url" type="audio/mp3" />
            你的浏览器不支持audio元素
        </audio>
    </template>
</template>