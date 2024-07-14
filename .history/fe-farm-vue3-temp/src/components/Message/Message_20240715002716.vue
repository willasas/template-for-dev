<template>
  <transition name="fade">
    <div v-if="isVisible" class="message" role="alert">
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';

// const props = defineProps({
//   message: {
//     type: String,
//     required: true
//   },
//   duration: {
//     type: Number,
//     default: 3000
//   }
// });

// const isVisible = ref(false);

// const show = () => {
//   isVisible.value = true;
//   setTimeout(() => {
//     isVisible.value = false;
//   }, props.duration);
// };


import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'message',
  props: {
    message: {
      type: String as () => string,
      required: true,
    },
    duration: {
      type: Number as () => number,
      default: 3000,
    },
  },
  setup(props) {
    const isVisible = ref(false);

    const show = () => {
      isVisible.value = true;
      setTimeout(() => {
        isVisible.value = false;
      }, props.duration);
    };

    return {
      show,
      isVisible,
    };
  },
});
</script>

<style scoped>
.message {
  /* Add your styles here */
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