<script setup lang="ts">
import { watch, ref, onMounted, defineProps, withDefaults, computed } from 'vue'
import { musicStore, audioStore } from '../../store/index'

const props = withDefaults(defineProps<{
    type?: string
    width?: string
    value?: number  // 绑定的数据
    changeValue?: Function // 修改绑定数据的函数
}>(), {
    width: 'w-20', // 这个是进度条的总长度
});

// 定义一个方法，将值转换为进度然后传递给修改progress
const updateValue = (v: number) => {
    // 音频的时长为03:04, 长度为240, 此时如何转换呢 current / 03:04 * 240 = 实际长度
    // progress 是实际上的播放的进度吗？ 是的
    console.log(props?.type);
    if (props?.type) {
        console.log('修改音量');
        props?.changeValue && props?.changeValue(v);
    } else {
        console.log('修改进度');
        const { audio } = audioStore.data
        if (!audio.value) return
        audio.value!.currentTime = audio.value!.duration * v; // 总时长 乘以进度条百分比=播放的进度条
    }
}

const circle = ref<HTMLElement | null>(null);
const slider = ref<HTMLElement | null>(null);
const sliderLine = ref<HTMLElement | null>(null);

let isSlider = false;

watch(musicStore.data.musicId, () => {
    if (musicStore.data.musicId) { // 当有音乐的时候开启绑定事件
        circle.value?.addEventListener('mousedown', circleMouseDownHandler);
        slider.value?.addEventListener('click', lineClickHandler)
    }
})

onMounted(() => {
    if (!circle.value && !sliderLine.value) return

    // circle.value?.addEventListener('mousedown', circleMouseDownHandler);
    // slider.value?.addEventListener('click', lineClickHandler)

    // TODO: 挂载的时候设置现在处于进度条的位置(测试，后面删除)
    circle.value!.style.marginLeft = props.value + "px"; // 圆圈处于进度条的位置 
    sliderLine.value!.style.width = props.value + "px"; // 进度条的长度
});

// 按下的事件, 这个是主动调用
const circleMouseDownHandler = (e: Event) => {
    isSlider = true;

    audioStore.update().audio.stop();

    const x = (e as MouseEvent).clientX; // 默认x的值
    const offsetLeft = circle.value?.offsetLeft; // 位于父元素的何种位置
    const max = (slider.value?.offsetWidth as number) - (circle.value?.offsetWidth as number); // 进度条除了圆形的长度

    document.body.onmousemove = function (e) {
        if (!isSlider) {
            document.body.onmousemove = function () { }
            audioStore.update().audio.start();
            return
        }
        const x_ = e.clientX;
        let moveX = Math.min(max, Math.max(0, (offsetLeft as number) + (x_ - x)));
        circle.value!.style.marginLeft = moveX + "px";
        sliderLine.value!.style.width = moveX + "px";
        let value = Math.round(Math.max(0, moveX / max) * 100);// 转换成1-100的整数值

        updateValue(moveX / max); // 修改进度条的进度
    }

    document.body.onmouseup = function () {
        isSlider = false;
    }
}

// 通过点击可修改
const lineClickHandler = (e: Event) => {
    if (!sliderLine.value && !circle.value) return
    sliderLine.value!.style.width = (e as MouseEvent).offsetX + 'px'
    circle.value!.style.marginLeft = (e as MouseEvent).offsetX + "px";
    const max = (slider.value?.offsetWidth as number) - (circle.value?.offsetWidth as number); // 进度条除了圆形的长度

    audioStore.update().audio.stop();
    updateValue((e as MouseEvent).offsetX / max)
    audioStore.update().audio.start();
}

// 播放音乐的时候自动的跳动
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