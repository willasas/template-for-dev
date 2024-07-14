<!-- <template>
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
    }
  },
  setup(props, { emit }) {
    const isVisible = ref(false);
    const messageContent = ref('');

    const show = (content) => {
      messageContent.value = content ;
      isVisible.value = true;

      setTimeout(() => {
        isVisible.value = false;
      }, props.duration);
    };

    onMounted(() => {
      // 如果需要在组件挂载后立即显示消息，可以在这里调用 show 方法
      // show();
    });

    // 监听 props.message 的变化，如果消息变化了，显示消息
    watch(() => props.message, (newMessage) => {
      if (newMessage) {
        show();
      }
    });

    return {
      show,
      isVisible,
      messageContent
    };
  },
});
</script> -->
<template>
  <transition name="fade">
    <div v-if="isVisible" class="message" role="alert">
      {{ messageContent }}
    </div>
  </transition>
</template>

<script lang="ts">
import { ref, props, defineComponent, nextTick, watch } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  setup(props) {
    const isVisible = ref(false);
    const messageContent = ref(props.message); // 初始化 messageContent 为初始的 message prop

    const show = () => {
      isVisible.value = true;
      nextTick(() => { // 等待 DOM 更新
        setTimeout(() => { // 设置延迟关闭
          isVisible.value = false;
        }, props.duration);
      });
    };

    // 如果需要在组件挂载后立即显示消息
    // show();

    // 如果 props.message 会变化，并且希望自动更新显示的消息，则保留 watch
    watch(() => props.message, show);

    return {
      isVisible,
      messageContent,
      show
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