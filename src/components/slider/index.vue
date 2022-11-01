<script setup lang="ts">
import { cursorTo } from 'readline';
import { watch, ref, onMounted, defineProps, withDefaults } from 'vue'
import { musicStore, audioStore } from '../../store/index'
import AudioShow from '../../views/layouts/audio-show.vue';

// TODO: 有问题，音频无法同步更改

const props = withDefaults(defineProps<{
    width?: string
    value?: number
    changeValue?: Function
}>(), {
    width: 'w-20',
});

const circle = ref<HTMLElement | null>(null);
const slider = ref<HTMLElement | null>(null);
const sliderLine = ref<HTMLElement | null>(null);

let isSlider = false;

watch(musicStore.data.musicId, () => {
    if (musicStore.data.musicId) {
        circle.value?.addEventListener('mousedown', circleMouseDownHandler);
        slider.value?.addEventListener('click', lineClickHandler)
    }
})
onMounted(() => {
    circle.value!.style.marginLeft = props.value + "px"; // 圆圈处于进度条的位置 
    sliderLine.value!.style.width = props.value + "px"; // 进度条的长度
});

// 按下的事件, 这个是主动调用
const circleMouseDownHandler = (e: Event) => {
    isSlider = true;

    // 此时移除 
    if (!audioStore.data.audio.value) return
    audioStore.update().audio.stop(); // 先暂停
    audioStore.data.audio.value!.ontimeupdate = function () { }

    const x = (e as MouseEvent).clientX; // 默认x的值
    const offsetLeft = circle.value?.offsetLeft; // 位于父元素的何种位置
    const max = (slider.value?.offsetWidth as number) - (circle.value?.offsetWidth as number); // 进度条除了圆形的长度

    document.body.onmousemove = function (e) {
        if (!isSlider) {
            document.body.onmousemove = function () { }
            return
        }
        const x_ = e.clientX;
        let moveX = Math.min(max, Math.max(0, (offsetLeft as number) + (x_ - x)));
        circle.value!.style.marginLeft = moveX + "px";
        sliderLine.value!.style.width = moveX + "px";

        let value = Math.round(Math.max(0, moveX / max) * 100);// 转换成1-100的整数值

        // console.log(value);
        // props.changeValue && props.changeValue(moveX);
    }

    document.body.onmouseup = function () {
        isSlider = false;
    }
}

// 通过点击可修改
const lineClickHandler = (e: Event) => {
    if (!sliderLine.value && !circle.value) return

    if (!audioStore.data.audio.value) return

    audioStore.update().audio.stop(); // 先暂停
    audioStore.data.audio.value!.ontimeupdate = function () { }

    const max = (slider.value?.offsetWidth as number) - (circle.value?.offsetWidth as number); // 进度条除了圆形的长度
    sliderLine.value!.style.width = (e as MouseEvent).offsetX + 'px'
    circle.value!.style.marginLeft = (e as MouseEvent).offsetX + "px";

}

watch(props, () => {
    const max = (slider.value?.offsetWidth as number) - (circle.value?.offsetWidth as number); // 进度条除了圆形的长度
    const moveX = (props.value as number) * max;
    circle.value!.style.marginLeft = moveX + "px";
    sliderLine.value!.style.width = moveX + "px";
})

</script>

<template>
    <div class="slider relative flex-auto" :class="`${props.width}`">
        <div ref="circle"
            class="slider-circle w-4 h-4 rounded-full bg-white border-2 border-gray-400 absolute -top-1.5 cursor-pointer flex justify-center items-center">
            <div class="w-1 h-1 bg-red-400 rounded-full"></div>
        </div>
        <div ref="slider" class="slider-line h-1 bg-gray-300 rounded-lg cursor-pointer overflow-hidden">
            <div ref="sliderLine" class="slider-line bg-red-500 border-red-500 h-full w-0 rounded-full "></div>
        </div>
    </div>
</template>