<script setup lang="ts">
import { watch, reactive, ref } from 'vue'
import Slider from '../slider/index.vue'
import api from "../../api/index";
import { PlayIcon, ForwardIcon, PauseIcon, VolumeHighIcon } from '../icons/index'
import { musicId } from '../../store/index'

// url
const url = ref<string>('');
// 控制是否播放
const musicToggle = ref<boolean>(false);
// audio
const audio = ref<HTMLAudioElement | null>(null);

// 定义一个变量用于控制音量
const volume = ref<number>(20);

// 定义一个变量用于记录进度
const progress = ref<number>(0);

// 定义一个变量记录总长度
let allTime = 0;

const changeVolume = (v: number) => {
    volume.value = v;
}
const changeProgress = (p: number) => {
    progress.value = p;
}

const checker = reactive({
    checkUse: ref<boolean>(false),
    message: ref<any>('')
})

watch(musicId, () => {
    // let musicId = { value: '1438432515' }
    api.get(`/check/music?id=${musicId.value}`).then(res => {
        checker.checkUse = res.data.success;
        checker.message = res.data.message;

        if (checker.checkUse) {
            api.get(`/song/url/v1?id=${musicId.value}&level=exhigh`).then((res) => {
                const data = res.data.data;
                if (data && data.length > 0) {
                    url.value = data[0].url;
                    musicToggle.value = true;
                    audio.value || (audio.value = document.querySelector('#audio'));
                    setTimeout(() => {
                        audio.value?.play(); // 播放
                        audio.value!.volume = volume.value / 100;
                        audio.value!.currentTime = progress.value;
                        allTime = audio.value!.duration; // 总时间
                    }, 5000)
                }
            })
        }
    })
})

// 播放音乐
const toggleMusicClickHandler = () => {
    musicToggle.value = url.value ? !musicToggle.value : false;

    if (audio != null && musicToggle.value) {
        audio.value?.play();
    } else {
        audio.value?.pause();
    }
}
watch(volume, () => {
    if (audio.value) {
        audio.value!.volume = volume.value / 100;
    }
})
watch(progress, () => {
    if (audio.value) {
        audio.value!.currentTime = progress.value / 100 * allTime;
    }
})

</script>

<template>
    <audio id="audio" v-if="musicId && checker.checkUse" :src="url" preload='metadata'>
    </audio>

    <div class="audio-controls flex justify-center items-center">
        <div @click="toggleMusicClickHandler"
            class="relative audio-toggle flex items-center w-10 h-10 rounded-full bg-red-600 cursor-pointer">
            <PlayIcon v-if="!musicToggle" class="w-4 mx-auto absolute left-3.5" fill="white" />
            <PauseIcon v-else class="w-4 mx-auto absolute left-3" fill="white" />
        </div>
        <div class="audio-pre relative flex items-center mx-6 w-8 h-8 rounded-full bg-red-600 cursor-pointer">
            <ForwardIcon class="w-3 mx-auto absolute left-2.5" fill="white" />
        </div>
    </div>
    <div class="flex-auto px-10">
        <Slider :value="progress" :change-value="changeProgress" width="full" />
    </div>

    <div class="flex flex-2 items-center w-48 justify-around ">
        <div class="flex items-center gap-x-2">
            <VolumeHighIcon class="w-4" fill="gray" />
            <Slider :value="volume" :change-value="changeVolume" />
        </div>
        <div
            class="border-2 w-5 h-5 text-xs text-gray-600 flex justify-center items-center border-gray-400 cursor-pointer">
            词</div>
    </div>
</template>