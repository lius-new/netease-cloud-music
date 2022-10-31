<script setup lang="ts">
import { loginStore } from '../../../../store/login-store'

</script>
<template>
    <div class="px-4">
        <div class="h-48 my-4 flex justify-center items-center select-none">
            <img class="w-36 h-36 select-none" ondragstart="return false;" src="../../../../assets/logo-1.png" alt="">
        </div>
        <div class="mx-auto w-2/3 my-4 flex flex-col justify-center items-center relative">
            <p class="text-sm bg-white z-10 px-2 text-gray-400">登陆方式</p>
            <p class="w-full border-t absolute"></p>
        </div>
        <div class="h-28 flex flex-col w-4/5 mx-auto gap-y-4 my-12">
            <button @click="loginStore.update().changeCurrent('Third')"
                class="py-1.5 rounded-3xl border border-red-500 hover:bg-red-400 text-red-600 outline-none">扫码登陆</Button>
            <button @click="loginStore.update().changeCurrent('Second')"
                class="py-1.5 rounded-3xl border border-red-500 hover:bg-red-400 text-red-600 outline-none">邮箱登陆</Button>
        </div>
    </div>
</template>