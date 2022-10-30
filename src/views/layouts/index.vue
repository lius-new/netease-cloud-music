<script setup lang="ts">
import config from '../../config'
import { RouterView } from 'vue-router'
import Header from './header/index.vue'
import Footer from './footer.vue'
import Left from './left.vue'

</script>

<template>
    <div class="body-wrapper h-full flex flex-col overflow-hidden">
        <Header :title="config.siteName" />
        <main class="main-wrapper h-full flex overflow-hidden ">
            <Left />
            <router-view></router-view>
        </main>
        <Footer />
    </div>
</template>