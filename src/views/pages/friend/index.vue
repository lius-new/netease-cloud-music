<script setup lang="ts">


</script>

<template>
    <div class="content-wrapper px-10 flex-auto overflow-y-scroll no-scrollbar relative">
        <div class="flex w-full">
            <div class="left-wrapper px-4 w-full ">
                <div class="border-b flex items-center ">
                    <div class=" w-full h-16 flex justify-between items-center ">
                        <h3 class=" text-xl">动态</h3>
                        <button class="px-2 rounded-xl border text-xs">发动态</button>
                    </div>
                </div>
                <div class="dynamic-wrapper my-10">
                    <div class="h-64 bg-slate-400 my-4" v-for="n in 12" :key="n">
                        {{n}}
                    </div>
                </div>
            </div>
            <div class="right-wrapper w-56 border-l ">
                右边
            </div>
        </div>
    </div>
</template>