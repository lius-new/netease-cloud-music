<script setup lang="ts">
import { computed } from 'vue'
import FeaturedMv from './FeaturedMv.vue'
import AllMv from './AllMv.vue'
import MvTopList from './MvTopList.vue';
import { mvStore } from '../../../store/mv-store'

const menu = ['Mv精选', '全部Mv']
const tabs = { FeaturedMv, AllMv, MvTopList }

const current = computed<string>(() => mvStore.data.current);

</script>

<template>
    <div class="content-wrapper px-10 py-4 w-full overflow-y-scroll no-scrollbar ">
        <div v-if="current != 'MvTopList'" class="flex mx-auto  justify-center">
            <template v-for="(_, tab, index) in tabs">
                <button v-if="index < 2" @click="() => mvStore.update().updateCurrent(tab)"
                    class=" py-1 outline-none text-sm border px-6 border-gray-400 text-gray-500" :class="{
                        'bg-gray-300 text-slate-700': current === tab,
                        'rounded-tl-md rounded-bl-md': index === 0,
                        'rounded-tr-md rounded-br-md border-l-0': index === 1
                    }">
                    {{ menu[index] }}
                </button>
            </template>
        </div>
        <component :is="tabs[current]"></component>
    </div>
</template>