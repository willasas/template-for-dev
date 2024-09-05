<template>
  <transition name="fade">
    <div
      v-if="props.modelValue"
      ref="dialogRef"
      class="my-dialog"
      @click.self="handleClickOutside"
    >
      <div class="dialog-header">
        <span class="dialog-title">{{ title }}</span>
        <button class="dialog-close" @click="close">Close</button>
      </div>
      <div class="dialog-body">
        <slot></slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer">
          <button @click="close">Cancel</button>
          <button type="primary" @click="confirm">Confirm</button>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { defineExpose } from 'vue';

const props = withDefaults(defineProps<{
  modelValue: boolean;
  title?: string;
}>(), {
  modelValue: false,
  title: '',
});

const emit = defineEmits(['update:modelValue', 'confirm']);

const dialogRef = ref<HTMLDivElement | null>(null);

function close() {
  emit('update:modelValue', false);
}

function confirm() {
  emit('confirm');
  close();
}

function handleClickOutside() {
  if (dialogRef.value && !dialogRef.value.contains(event.target as Node)) {
    close();
  }
}
</script>

<style scoped>
.my-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.dialog-title {
  font-size: 18px;
  font-weight: bold;
}

.dialog-close {
  background: none;
  border: none;
  cursor: pointer;
}

.dialog-body {
  margin-bottom: 10px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
