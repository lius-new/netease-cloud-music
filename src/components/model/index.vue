<script setup lang="ts">
import { XmarkIcon } from '../icons/index'
import { defineEmits, defineProps } from 'vue'

interface IModelProps {
    show?: Boolean
    width?: string
}
const emits = defineEmits(['close']);
const props = defineProps<IModelProps>();
</script>

<template>
    <Transition name="modal">
        <div v-if="props.show" class="modal-mask ">
            <div class="modal-wrapper">
                <div class="modal-container" :class="props.width">
                    <div class="modal-header flex items-center justify-end">
                        <XmarkIcon class="w-4 cursor-pointer" fill="gray" @click.stop="emits('close')" />
                    </div>
                    <div class="modal-body">
                        <slot>default body</slot>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    margin: 0px auto;
    padding: 10px 10px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>