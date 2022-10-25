<script setup lang="ts">
import api from '../../api/index'
import { defineProps } from 'vue'

const props = defineProps<{
    musicId: string
}>()

</script>

<template>
    <div @click="">
        <slot></slot>
    </div>
</template>