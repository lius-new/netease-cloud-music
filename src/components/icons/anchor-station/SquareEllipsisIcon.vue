<script setup lang="ts">
import { defineProps } from 'vue'

const props = withDefaults(defineProps<{
    fill?: string
}>(), {
    fill: 'white'
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" :fill="props.fill">
        <path
            d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM192 256c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm128 32c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zM96 256c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32z" />
    </svg>
</template>