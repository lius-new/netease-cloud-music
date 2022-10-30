<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { getLoginQrKey, getLoginQrCreate, checkStatus, getLoginStatus } from '../../../../api/server/login'
import { loginStore } from '../../../../store/login-store'


const url = ref<string>('')

onBeforeMount(async () => {

    let timer: NodeJS.Timer;
    let key: string = '';
    await getLoginQrKey().then((res) => {
        key = res.code === 200 ? res.data.unikey : ''
        return
    })

    if (key.length === 0) return
    getLoginQrCreate(key).then(res => {
        const { qrimg } = res.data;
        if (res.code === 200 && qrimg) { // 成功显示图片
            url.value = qrimg;
        }
        return
    })

    timer = setInterval(async () => {
        const statusRes = await checkStatus(key)
        if (statusRes.code === 800) {
            console.log('二维码已过期,请重新获取')
            clearInterval(timer);
        }
        if (statusRes.code === 803) {
            // 这一步会返回cookie
            clearInterval(timer)
            console.log('授权登录成功');
            await getLoginStatus(statusRes.cookie)
            localStorage.setItem('cookie', statusRes.cookie)
        }
    }, 3000)

})

</script>
<template>
    <div class="px-4">
        <div class="h-48 my-4 flex justify-center items-center select-none">
            <img class="w-48 h-48 select-none" ondragstart="return false;" :src="url" alt="">
        </div>
        <div class="mx-auto w-2/3 my-4 flex justify-center items-center gap-x-4">
            <p @click="" class="select-none text-xs underline text-gray-400 cursor-pointer">刷新</p>
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