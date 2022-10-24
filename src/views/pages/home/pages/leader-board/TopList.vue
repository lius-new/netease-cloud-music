<script setup lang="ts">

import api from "../../../../../api/index";
import { ref, onBeforeMount, defineProps } from 'vue'

const props = defineProps<{
    id: string
}>()

const toplist = ref<any>();

api.get(`/playlist/detail?id=${props.id}`).then(res => {
    toplist.value = res.data.playlist.tracks.slice(0, 8);
});

</script>

<template>
    <ul>
        <li v-for="songer,index in toplist " :key="index">{{songer.name}}</li>
    </ul>
</template>