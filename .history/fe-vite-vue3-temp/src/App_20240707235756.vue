<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Popup from './components/Popup/Popup.vue';
import Imagecontainer from './components/Imagecontainer/Imagecontainer.vue';
import { defineComponent, ref } from 'vue';

let showTextPopupFlag = ref(false);

// function showTextPopup() {
//   showTextPopupFlag.value = true;
//   console.log('showTextPopupFlag', showTextPopupFlag.value);
// }

function showTextPopup() {
  showTextPopupFlag.value = true;
}

export default defineComponent({
  components: {
    HelloWorld,
    Popup,
    Imagecontainer
  },
  data() {
    return {
      imageSrc: 'path/to/your/image.jpg',
      imageAlt: 'A description of the image',
      loadingText: 'Loading image...',
    };
  },
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <Popup v-if="showTextPopupFlag" @closed="showTextPopupFlag = false">
    <p>This is some text content for the popup.</p>
    <p>You can add any valid Vue template here.</p>
  </Popup>

  <div>
    <h1>My Image Gallery</h1>
    <ImageComponent
      :src="imageSrc"
      :alt="imageAlt"
      :lazyLoad="true"
      :placeholder="loadingText"
    />
  </div>

  <!-- 弹窗使用 -->
  <button @click="showTextPopup">Show Text Popup</button>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
