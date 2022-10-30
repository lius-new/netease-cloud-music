<script setup lang="ts">
import { ref, watch, Ref, computed } from 'vue'
import { loginStore } from '../../../../store/login-store'
import { EmailIcon } from '../../../../components/icons/index'
import { loginByEmail } from '../../../../api/server/login'


const email = ref<string>('')
const passwd = ref<string>('')
const message = ref<string>('')
const isCanClickBtn = ref<boolean>(true);

const isCanClick = computed(() => {
    return !(checkEmail(email) && (passwd.value.length > 0))
})

const checkEmail = (email: Ref<string>): boolean => {
    // let reg = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/;
    let reg = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@(163.com)$/;
    return reg.test(email.value);
}

watch(email, () => {
    console.log(checkEmail(email));

    if (!checkEmail(email)) {
        message.value = '请输入正确的邮箱'
    } else {
        message.value = ''
    }
})

const loginClickHandler = () => {
    let ok;
    isCanClickBtn.value = false
    // 登录
    loginByEmail(email.value, passwd.value).then(res => {
        ok = res.code === 200 ? true : false;
        return;
    })

    // 登录成功，关闭
    if (ok) {
        loginStore.update().showModel.closeModel()
    } else {
        // 登录失败，提示信息
        message.value = '登录失败'
    }

}


</script>
<template>
    <div class="px-4">
        <div class="h-48 my-4 flex justify-center items-center select-none">
            <EmailIcon class="w-36 h-36 select-none" ondragstart="return false;" fill="#F47D7D" />
        </div>
        <div class="w-3/4 mx-auto flex flex-col justify-center ">
            <input placeholder="请输入163邮箱"
                class=" text-sm px-4 py-2 rounded-sm border outline-none border-gray-400 border-b-0" type="text"
                name="email" autocomplete="off" v-model="email" />
            <input placeholder="请输入密码" class=" text-sm px-4 py-2 border rounded-sm border-gray-400  outline-none"
                type="password" name="code" autocomplete="off" v-model="passwd">
            <p class="text-red-600 text-right text-xs my-2">{{ message }}</p>
        </div>
        <div class="h-28 flex flex-col w-4/5 mx-auto gap-y-4 my-4">
            <button @click="loginClickHandler" :disabled="isCanClick && isCanClickBtn"
                :class="{ 'cursor-not-allowed': isCanClick, ' hover:bg-red-700': !isCanClick }"
                class="py-1.5 rounded-lg border border-red-500 bg-red-500 text-red-200 outline-none">登录</button>
            <p @click="loginStore.update().changeCurrent('First')"
                class="text-xs underline text-right pr-2 text-gray-400 cursor-pointer">返回</p>
        </div>
    </div>
</template>