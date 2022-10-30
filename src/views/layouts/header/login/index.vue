<script setup lang="ts">
import { Teleport, defineProps, ref } from 'vue'
import { loginStore } from '../../../../store/login-store'
import Model from '../../../../components/model/index.vue'

import First from './first.vue';
import Second from './second.vue';
import Third from './third.vue';

defineProps<{
    show: boolean
}>()

const tabs = { First, Second, Third }

const current = loginStore.data.current

</script>
<template>
    <!-- 模态框 -->
    <Teleport to="body">
        <Model :show="show" @close="$emit('close')" width="w-96">
            <component :is="tabs[current]"></component>
        </Model>
    </Teleport>
</template>