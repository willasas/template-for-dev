<template>
  <transition name="fade">
    <div v-if="isVisible" class="message" role="alert">
      {{ messageContent }}
    </div>
  </transition>
</template>

<script lang="ts">
import { ref, props, defineComponent, onMounted, watch } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    content: {
      type: [String, Number, Object],
      required: true,
    }
  },
  setup(props) {
    const isVisible = ref(false);
    const messageContent = ref('');

    const show = (content: string) => {
      messageContent.value = content ;
      isVisible.value = true;

      setTimeout(() => {
        isVisible.value = false;
      }, props.duration);
    };

    onMounted(() => {
      // 如果需要在组件挂载后立即显示消息，可以在这里调用 show 方法
      // 注意：如果这里需要显示默认消息，也需要传入一个字符串参数
      // show('Default Message');
    });

    // 监听 props.message 的变化，如果消息变化了，显示消息
    watch(() => props.message, (newMessage) => {
      if (newMessage) {
        show(newMessage); // 修复：传递 newMessage 作为参数
      }
    });

    return {
      show,
      isVisible,
      messageContent
    };
  },
});
</script>

<style scoped>
.message {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>