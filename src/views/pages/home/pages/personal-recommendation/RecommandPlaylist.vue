<script setup lang="ts">
import { defineProps } from 'vue'
import { getDayHan } from '../../../../../utils/index'

const props = defineProps<{
    recommands: any
}>();

</script>

<template>
    <div class="my-16">
        <div class=" py-6 pb-2 mb-2 flex border-b justify-between items-center">
            <h3 class="text-lg ">推荐歌单</h3>
            <p class="text-xs text-gray-400 cursor-pointer">更多&gt;&gt;</p>
        </div>
        <div class="grid grid-cols-5 gap-4 gap-y-16 ">
            <div class="cursor-pointer h-28 2xl:h-48 border" v-for="recommand in props.recommands.value"
                :key="recommand.id">
                <template v-if="recommand.id != '000'">
                    <img :src="recommand.picUrl" class="w-full h-full" alt="">
                    <p class="my-2 text-xs text-left">{{ recommand.name }}</p>
                </template>
                <template v-else>
                    <div class="bg-slate-50 w-full h-full flex flex-col justify-center items-center ">
                        <span class="text-xl text-gray-600">
                            星期{{ getDayHan(new Date().getDay() + '') }}
                        </span>
                        <span class="text-8xl text-red-600">
                            {{ new Date().getDate() }}
                        </span>
                    </div>
                    <p class="my-2 text-xs text-left">
                        每日推荐
                    </p>
                </template>
            </div>
        </div>
    </div>
</template>