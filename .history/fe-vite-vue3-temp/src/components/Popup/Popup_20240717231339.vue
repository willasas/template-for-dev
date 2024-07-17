<template>
  <transition name="fade">
    <div
      v-if="isVisible"
      ref="popupRef"
      class="text-popup"
      @click.stop="handleClickInside"
    >
      <button class="popup-close" @click="hide">Close</button>
      <div class="popup-content">
        <slot></slot> <!-- 这里可以插入任何传入的内容 -->
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { defineExpose } from 'vue';

const name = 'Popup';
const isVisible = ref(false);
const popupRef = ref(null);

function show() {
  isVisible.value = true;
}

function hide() {
  isVisible.value = false;
}

function handleClickInside(event) {
  event.stopPropagation();
}

// 监听外部点击关闭弹窗
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

function handleClickOutside(event) {
  if (popupRef.value?.contains(event.target)) {
    hide();
    console.log('click outside');
  }
}

defineExpose({ name });

</script>

<style scoped>
.text-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  /* display: none; */
}

.text-popup.fade-enter-active,
.text-popup.fade-leave-active {
  transition: opacity 0.3s ease;
}

.text-popup.fade-enter,
.text-popup.fade-leave-to {
  opacity: 0;
}

.popup-close {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}

.popup-content {
  /* 根据需要调整内容样式 */
}
</style>