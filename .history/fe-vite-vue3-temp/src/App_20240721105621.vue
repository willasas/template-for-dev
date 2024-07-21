<script setup lang="ts">
import Header from './components/Header/Header.vue'
import Popup from './components/Popup/Popup.vue';
import ImageComponent from './components/Imagecontainer/Imagecontainer.vue';
import SelectLang from './components/SelectLang/SelectLang.vue'
import { ref } from 'vue';

let showTextPopupFlag = ref(false);

// function showTextPopup() {
//   showTextPopupFlag.value = true;
//   console.log('showTextPopupFlag', showTextPopupFlag.value);
// }

function showTextPopup() {
  showTextPopupFlag.value = true;
}
</script>

<template>
  <div>
    <Header></Header>
    <SelectLang />
    <div class="hell">{{ $t('setting') }}</div>
    <div class="test">{{ $t('name') }}</div>

    <Popup v-if="showTextPopupFlag" @closed="showTextPopupFlag = false">
      <p>This is some text content for the popup.</p>
      <p>You can add any valid Vue template here.</p>
    </Popup>

    <ImageComponent
        :src="imageSrc"
        :alt="imageAlt"
        :lazyLoad="true"
        :placeholder="loadingText"
    />
    
    <!-- 弹窗使用 -->
    <button @click="showTextPopup">Show Text Popup</button>
  </div>
</template>

<style scoped lang="scss">
// @import './styles/dc.scss';
</style>
