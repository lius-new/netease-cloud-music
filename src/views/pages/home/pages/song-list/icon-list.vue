<script setup lang="ts">
import { defineProps } from 'vue'
import {
    PianoIcon,
    RectAngleIcon,
    SimleIcon,
    CoffeeIcon,
    GlobeIcon,
} from '../../../../../components/icons'

defineProps<{
    index: number
}>()

</script>

<template>
    <template v-if="index===0">
        <GlobeIcon class="w-6" fill="#F87171" />
    </template>
    <template v-else-if="index===1">
        <RectAngleIcon class="w-6" fill="#F87171" />
    </template>
    <template v-else-if="index===2">
        <SimleIcon class="w-6" fill="#F87171" />
    </template>
    <template v-else-if="index===3">
        <CoffeeIcon class="w-6" fill="#F87171" />
    </template>
    <template v-else-if="index===4">
        <PianoIcon class="w-6" fill="#F87171" />
    </template>
</template>