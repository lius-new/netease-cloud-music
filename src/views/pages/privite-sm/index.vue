<script setup lang="ts">

</script>

<template>
    <div class="content-wrapper p-10 flex-auto overflow-y-scroll no-scrollbar flex flex-col">
        <div class="top-wrapper flex justify-between mx-auto h-3/5 gap-x-8 w-1/2">
            <div class="flex-1 py-8">
                <div class=" h-96 bg-slate-400"></div>
                <ul class="flex justify-between">
                    <li class="w-12 h-12 flex justify-center items-center bg-slate-200" v-for="n in 4" :key="n">
                        {{n}}</li>
                </ul>
            </div>
            <div class="flex-1 bg-slate-500">this</div>
        </div>
        <div class="bottom-wrapper mx-auto w-1/2 my-20">
            <h3 class="text-lg border-b">听友评论</h3>
            <div class=" flex justify-center flex-col gap-y-4">
                <div class="h-20 flex justify-center items-center bg-gray-200" v-for="n in 20">{{n}}</div>
            </div>
        </div>
    </div>
</template>