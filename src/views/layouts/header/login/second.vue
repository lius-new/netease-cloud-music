<script setup lang="ts">
import { PhoneIcon } from '../../../../components/icons/index'
import { loginStore } from '../../../../store/login-store'

</script>
<template>
    <div class="px-4">
        <div class="h-48 my-4 flex justify-center items-center select-none">
            <PhoneIcon class="w-36 h-36 select-none" ondragstart="return false;" fill="#F47D7D" />
        </div>
        <div class="w-3/4 mx-auto flex flex-col justify-center ">
            <input placeholder="请输入手机号"
                class=" text-sm px-4 py-2 rounded-sm border outline-none border-gray-400 border-b-0" type="text"
                name="username" autocomplete="off">
            <div class="relative w-full border border-gray-400 flex ">
                <input placeholder="请输入验证码" class="text-sm px-4 py-2 rounded-sm outline-none" type="text" name="code"
                    autocomplete="off">
                <p class="absolute right-0 text-xs h-full flex items-center pr-2 text-gray-500 cursor-pointer">验证码</p>
            </div>
        </div>
        <div class="h-28 flex flex-col w-4/5 mx-auto gap-y-4 my-12">
            <Button
                class="py-1.5 rounded-lg border border-red-500 bg-red-500 hover:bg-red-600 text-red-200 outline-none">登陆</Button>
            <p @click="loginStore.update().changeCurrent('First')"
                class="text-xs underline text-right pr-2 text-gray-400 cursor-pointer">返回</p>
        </div>
    </div>
</template>