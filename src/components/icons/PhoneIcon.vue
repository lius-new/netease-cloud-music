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
        <path class="fa-primary" d="M288 384H96V64h192V384z" />
        <path class="fa-secondary opacity-40"
            d="M304 0h-224C53.5 0 32 21.5 32 48v416C32 490.5 53.5 512 80 512h224c26.5 0 48-21.5 48-48v-416C352 21.5 330.5 0 304 0zM240 447.1C240 456.8 232.8 464 224 464H159.1C151.2 464 144 456.8 144 448S151.2 432 160 432h64C232.8 432 240 439.2 240 447.1zM288 384H96V64h192V384z" />
    </svg>
</template>