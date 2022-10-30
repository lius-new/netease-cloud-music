<script setup lang="ts">
import AnchorStation from './pages/anchor-station/index.vue'
import Leaderboard from './pages/leader-board/index.vue'
import NewMusic from './pages/NewMusic.vue'
import PersonalRecommendation from './pages/personal-recommendation/index.vue'
import Songer from './pages/Songer.vue'
import SongList from './pages/song-list/index.vue'
import { homeMenuStore } from '../../../store'

const tabs = {
  PersonalRecommendation, SongList, AnchorStation, Leaderboard, Songer, NewMusic,
}

const menuListContent = [
  '个性推荐',
  '歌单',
  '主播电台',
  '排行榜',
  '歌手',
  '最新音乐',
]
</script>

<template>
  <div class="content-wrapper px-10 flex-auto overflow-y-scroll no-scrollbar">
    <div class="content-wrapper h-12 border-b w-full mb-5">
      <ul
        class="mx-auto flex w-3/5 text-xs lg:w-1/2 xl:w-1/3 lg:text-sm h-full justify-between items-center whitespace-nowrap">
        <li @click="() => { homeMenuStore.update().changeCurrentMenu(tab) }"
          class="cursor-pointer h-full flex items-center justify-center w-20"
          :class="{'border-b-2 border-red-600':homeMenuStore.data.currentMenu.value===tab}" v-for="_,tab,index in tabs"
          :key="tab">
          {{ menuListContent[index] }}
        </li>
      </ul>
    </div>
    <component :is="tabs[homeMenuStore.data.currentMenu.value]"></component>
  </div>
</template>