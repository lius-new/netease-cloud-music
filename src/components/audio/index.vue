<script setup lang="ts">
import { watch } from 'vue'
import { checkAudioUse, getAudio } from "../../api/server/audio";
import { musicStore, audioStore } from '../../store/index'
import Slider from '../slider/index.vue'
import { PlayIcon, ForwardIcon, PauseIcon, VolumeHighIcon } from '../icons/index'

const { musicId } = musicStore.data;
const { audio, use, time, url, toggle, volume, progress } = audioStore.data
const { updateUse } = audioStore.update().use;
const { updateUrl } = audioStore.update().url
const { toggleOn, udpateToggle } = audioStore.update().toggle
const { updateVolume } = audioStore.update().volume
const { updateProgress } = audioStore.update().progress
const { updateTime } = audioStore.update().time
const { start, stop } = audioStore.update().audio;

watch(musicId, () => {
    checkAudioUse(musicId.value).then(res => {
        updateUse(res.success)
        if (!use.value) return
        getAudio(musicId.value).then(res => {
            if (!res || res.length <= 0) return
            updateUrl(res[0].url)
            setTimeout(() => { 
                if (!audio.value) audio.value = document.querySelector('#audio')
                start();
                toggleOn();
                // 初始化的时候的声音/进度条/时长
                updateVolume((volume.value));
                updateProgress(progress.value);
                updateTime(audio.value!.duration);
            }, 5000)
        })
    });

});

// 播放音乐
const toggleMusicClickHandler = () => {
    udpateToggle(url.value ? !toggle.value : false); // 修改播放按钮
    if (audio && toggle.value) start();
    else stop();
}
</script>

<template>
    <audio id="audio" v-if="musicId && use" :src="url" preload='metadata'>
    </audio>

    <div class="audio-controls flex justify-center items-center">
        <div @click="toggleMusicClickHandler"
            class="relative audio-toggle flex items-center w-10 h-10 rounded-full bg-red-600 cursor-pointer">
            <PlayIcon v-if="!toggle" class="w-4 mx-auto absolute left-3.5" fill="white" />
            <PauseIcon v-else class="w-4 mx-auto absolute left-3" fill="white" />
        </div>
        <div class="audio-pre relative flex items-center mx-6 w-8 h-8 rounded-full bg-red-600 cursor-pointer">
            <ForwardIcon class="w-3 mx-auto absolute left-2.5" fill="white" />
        </div>
    </div>
    <div class="flex-auto px-10">
        <Slider :value="progress" :change-value="updateProgress" width="full" />
    </div>

    <div class="flex flex-2 items-center w-48 justify-around ">
        <div class="flex items-center gap-x-2">
            <VolumeHighIcon class="w-4" fill="gray" />
            <Slider :value="volume" :change-value="updateVolume" />
        </div>
        <div
            class="border-2 w-5 h-5 text-xs text-gray-600 flex justify-center items-center border-gray-400 cursor-pointer">
            词</div>
    </div>
</template>