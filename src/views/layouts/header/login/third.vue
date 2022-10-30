<script setup lang="ts">
import { loginStore } from '../../../../store/login-store'

</script>
<template>
    <div class="px-4">
        <div class="h-48 my-4 flex justify-center items-center select-none">
            <img class="w-48 h-48 select-none" ondragstart="return false;" src="../../../../assets/logo-1.png" alt="">
        </div>
        <div class="mx-auto w-2/3 my-4 flex justify-center items-center gap-x-4">
            <p class="select-none text-xs underline text-gray-400 cursor-pointer">刷新</p>
            <p @click="loginStore.update().changeCurrent('First')"
                class="select-none text-xs underline  text-gray-400 text-right pr-2 cursor-pointer">返回</p>
            <!-- <p class="w-full border-t absolute"></p> -->
        </div>
        <div class="h-28 flex flex-col w-4/5 mx-auto gap-y-4 my-12">
            <!-- <Button class="py-1.5 rounded-3xl border border-red-500 hover:bg-red-400 text-red-600">手机号登陆</Button>
            <Button class="py-1.5 rounded-3xl border border-red-500 hover:bg-red-400 text-red-600">扫码登陆</Button> -->
        </div>
    </div>
</template>