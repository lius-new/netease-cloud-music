<script setup lang="ts">
import { defineProps } from 'vue'

const props = withDefaults(defineProps<{
    fill?: string
}>(), {
    fill: 'white'
})
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" :fill="props.fill">
        <path d="M384 256L0 32V480L384 256z" />
    </svg>
</template>