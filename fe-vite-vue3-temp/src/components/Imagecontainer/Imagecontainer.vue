<template>
  <div :class="['image-container', customClasses]" :style="customStyles">
    <div v-if="!loaded && placeholder" class="placeholder">{{ placeholder }}</div>
    <img
      :src="src"
      :alt="alt"
      @load="handleImageLoad"
      @error="handleImageError"
      :style="{ display: loaded ? 'block' : 'none' }"
      :loading="lazyLoad ? 'lazy' : undefined"
    />
    <div v-if="error" class="error">Image cannot be displayed</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ImageComponent',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    customClasses: {
      type: String,
      default: '',
    },
    customStyles: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const loaded = ref(false);
    const error = ref(false);

    const handleImageLoad = () => {
      loaded.value = true;
    };

    const handleImageError = () => {
      error.value = true;
    };

    return {
      loaded,
      error,
      handleImageLoad,
      handleImageError,
    };
  },
});
</script>

<style scoped>
.placeholder {
  /* Add your placeholder styles here */
}
.error {
  /* Add your error message styles here */
}
</style>