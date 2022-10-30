<script setup lang="ts">
import { Teleport, defineProps, ref } from 'vue'
import { loginStore } from '../../../../store/login-store'
import Model from '../../../../components/model/index.vue'

import First from './first.vue';
import Second from './second.vue';
import Third from './third.vue';

const tabs = { First, Second, Third }

const current = loginStore.data.current

</script>
<template>
    <!-- 模态框 -->
    <Teleport to="body">
        <Model :show="loginStore.data.showModel.value" @close="loginStore.update().showModel.closeModel" width="w-96">
            <component :is="tabs[current]"></component>
        </Model>
    </Teleport>
</template>