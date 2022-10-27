<script setup lang="ts">
import { defineProps } from 'vue'

const props = withDefaults(defineProps<{
    fill?: string
}>(), {
    fill: 'white'
})
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" :fill="props.fill">
        <path d="M256 96V64h64V96 416v32H256V416 256L0 448V64L256 256V96z" />
    </svg>
</template>