<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { changeMusicId } from '../../../../../store/index'
import { getBanners } from "../../../../../api/server/personal-recommendation";


const router = useRouter();

const banners = ref<any>([]);
const current = ref<number>(0);

let timer: any = 0;

// 挂载的前完成轮播图数据的获取
onBeforeMount(() =>
    getBanners().then(
        res => {
            banners.value = res
        }
    )
)

// 该事件用于自动切换轮播图
onMounted(() => {
    timer = setInterval(() => {
        current.value++;
        if (current.value === banners.value.length && banners.value?.length - 1) {
            current.value = 0;
        }
    }, 3000)

})
// 该事件用于清理定时器
onUnmounted(() => {
    clearInterval(timer as number);
})

// 该事件用于手动切换轮播图
const currentUpdateClickHandler = (n: number) => {
    current.value = n;
}

const bannerClickHandler = (obj: any) => {
    if (!obj?.targetId) {
        console.log('--未知(1)--');
        return
    }
    // 确认有id和是单曲 确定是否是当前音乐
    if (obj?.targetType === 1) {
        changeMusicId(obj?.targetId);
    } else if (obj?.targetType === 1000) {
        router.push({ path: '/songlist-detail', query: { id: obj?.targetId } })
    } else {
        console.log('--未知(2)--');
    }
}
</script>

<template>
    <div class="h-full overflow-hidden relative flex justify-center">
        <div @click="() => bannerClickHandler(banners[current])"
            class="w-full h-full bg-center bg-no-repeat bg-contain cursor-pointer" :style="{
                backgroundImage: 'url(' + banners[current]?.imageUrl + ')'
            }">
        </div>
        <ul class="absolute flex bottom-2 mx-auto z-10 gap-x-2 cursor-pointer">
            <li @click.self="()=>currentUpdateClickHandler(n-1)" v-for="n in banners.length"
                class="w-3 h-3 rounded-full bg-gray-800 bg-opacity-40">
            </li>
        </ul>
    </div>
</template>