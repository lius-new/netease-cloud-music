<script setup lang="ts" >
import {
    BilibiliIcon,
    BookIcon,
    BooksIcon,
    ChartIcon,
    CrystalIcon,
    FamilyIcon,
    Graduation,
    GuitarElectricIcon,
    MicrophoneIcon,
    MicrophoneStand,
    MoonIcon,
    NewsIcon,
    QuinscapeIcon,
    RadioIcon,
    SquareEllipsisIcon,
    StarIcon,
    SunglassIcon,
    TimelineIcon,
    TvMusicIcon,
    MugHotIcon
} from '../../../../../components/icons/anchor-station/index'


import { defineProps } from 'vue'

defineProps<{
    index?: number
    width_?: number
}>()

</script>

<template>
    <template v-if="index===0">
        <ChartIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===1">
        <MoonIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===2">
        <TvMusicIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===3">
        <BookIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===4">
        <MicrophoneIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===5">
        <MicrophoneStand :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===6">
        <GuitarElectricIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===7">
        <Graduation :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===8">
        <BilibiliIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===9">
        <SunglassIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===10">
        <MugHotIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===11">
        <FamilyIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===12">
        <NewsIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===13">
        <RadioIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===14">
        <CrystalIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===15">
        <TimelineIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===16">
        <StarIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===17">
        <QuinscapeIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===18">
        <SquareEllipsisIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===19">
        <BooksIcon :class="`w-6`" fill="gray" />
    </template>
    <template v-else-if="index===19">
        <ChartIcon :class="`w-6`" fill="gray" />
    </template>
</template>