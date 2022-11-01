<script setup lang="ts">
// 独家放松

import api from '../../../api/index'
import { ref } from 'vue'

const playlist = ref<any>([]);

api.get('/personalized/privatecontent/list').then(res => {
    playlist.value = res.data.result
    console.log(res.data.result);

})

</script>

<template>
    <div class="content-wrapper p-10 w-full overflow-y-scroll no-scrollbar flex flex-col">
        <div class=" flex flex-col justify-between mx-auto gap-x-8 w-4/5 lg:w-3/4 2xl:w-2/3">
            <h3 class="border-b py-2 my-2 w-full text-xl">
                独家放送
            </h3>
            <div class=" grid grid-cols-3 gap-x-4 gap-y-14">
                <div v-for="play in playlist" :key="play.id" class="">
                    <img class="cursor-pointer w-full" :src="play.picUrl" alt="">
                    <p class="my-2 text-sm cursor-pointer">{{ play.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>