<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    djprograms: any
}>()
</script>
<template>
    <div class="my-16">
        <div class=" py-6 pb-2 mb-2 flex border-b justify-between items-center">
            <h3 class="text-lg ">主播电台</h3>
            <p class="text-xs text-gray-400 cursor-pointer">更多&gt;&gt;</p>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class=" text-center h-36" v-for=" djprogram in props.djprograms.value" :key="djprogram.id">
                <div class=" flex">
                    <img class="h-24" :src="djprogram.picUrl" alt="">
                    <p>
                        {{ djprogram.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>