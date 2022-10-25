<script setup lang="ts">
import { defineProps } from 'vue'
import { TvMusicIcon } from '../../components/icons/anchor-station';
import { MusicIcon, SignalIcon, FriendIcon } from '../../components/icons/index'

defineProps<{
    id: string
}>();

</script>

<template>
    <template v-if="id == '1'">
        <MusicIcon class="w-4" fill="gray" />
    </template>
    <template v-else-if="id == '2'">
        <SignalIcon class="w-4" fill="gray" />
    </template>
    <template v-else-if="id == '3'">
        <TvMusicIcon class="w-4" fill="gray" />
    </template>
    <template v-else-if="id == '4'">
        <FriendIcon class="w-4" fill="gray" />
    </template>
</template>