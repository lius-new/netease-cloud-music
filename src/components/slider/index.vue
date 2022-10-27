<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults } from 'vue'
import { musicId } from '../../store/index'

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

onMounted(() => {
    musicId.value && circle.value?.addEventListener('mousedown', circleMouseDownHandler);
    circle.value!.style.marginLeft = props.value + "px";
    sliderLine.value!.style.width = props.value + "px";
});

// 按下的事件
const circleMouseDownHandler = (e: Event) => {
    isSlider = true;

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
        let value = Math.round(Math.max(0, moveX / max) * 100); //转换成百分比
        if (props.changeValue) {
            props.changeValue(value);
        }
    }

    document.body.onmouseup = function () {
        isSlider = false;
    }
}
</script>

<template>
    <div class="slider relative" :class="`${props.width}`">
        <div ref="circle"
            class="slider-circle w-4 h-4 rounded-full bg-white border-2 border-gray-400 absolute -top-1.5 cursor-pointer flex justify-center items-center">
            <div class="w-1 h-1 bg-red-400 rounded-full"></div>
        </div>
        <div ref="slider" class="slider-line h-1 bg-gray-300 rounded-lg cursor-pointer overflow-hidden">
            <div ref="sliderLine" class="slider-line bg-red-500 border-red-500 h-full w-0 rounded-full "></div>
        </div>
    </div>
</template>
