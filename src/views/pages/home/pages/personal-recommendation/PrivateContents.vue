<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    privatecontents: any
}>();

</script>

<template>
    <div class="my-16">
        <div class=" py-6 pb-2 mb-2 flex border-b justify-between items-center">
            <h3 class="text-lg ">独家放送</h3>
            <p class="text-xs text-gray-400 cursor-pointer">更多&gt;&gt;</p>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class=" text-center w-80 h-48 " v-for=" privatecontent in props.privatecontents.value"
                :key="privatecontent.id">
                <img class="cursor-pointer" :src="privatecontent.sPicUrl" alt="">
                <p class="my-2 text-left text-sm cursor-pointer">
                    {{ privatecontent.name }}
                </p>
            </div>
        </div>
    </div>
</template>