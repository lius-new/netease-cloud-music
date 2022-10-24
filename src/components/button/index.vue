<script setup lang="ts">
import { defineProps } from 'vue'
import SongList from '../../views/pages/home/pages/SongList.vue';

interface IButton {
    class?: string
}

const props = defineProps<IButton>();

</script>

<template>
    <button class="border outline-none px-2 py-1 " :class="props.class">
        <slot></slot>
    </button>
</template>