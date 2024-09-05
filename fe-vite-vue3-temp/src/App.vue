<script setup lang="ts">
import Header from './components/Header/Header.vue'
import Popup from './components/Popup/Popup.vue';
import ImageComponent from './components/Imagecontainer/Imagecontainer.vue';
import VirtualScroll from './components/VirtualRander/VirtualScroll.vue';
import VirtualList from './components/VirtualRander/VirtualList.vue';
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

// VirtualList data
const listData = ref([
  { id: 1, value: 'Item 1' },
  { id: 2, value: 'Item 2' },
  { id: 3, value: 'Item 3' },
  { id: 4, value: 'Item 4' },
  { id: 5, value: 'Item 5' },
  { id: 6, value: 'Item 6' },
  { id: 7, value: 'Item 7' },
  { id: 8, value: 'Item 8' },
  { id: 9, value: 'Item 9' },
  { id: 10, value: 'Item 10' },
  { id: 11, value: 'Item 11' },
  { id: 12, value: 'Item 12' },
  { id: 13, value: 'Item 13' },
  { id: 14, value: 'Item 14' },
  { id: 15, value: 'Item 15' },
  { id: 16, value: 'Item 16' },
  { id: 17, value: 'Item 17' },
  { id: 18, value: 'Item 18' },
  { id: 19, value: 'Item 19' },
  { id: 20, value: 'Item 20' },
  { id: 21, value: 'Item 21' },
  { id: 22, value: 'Item 22' },
  { id: 23, value: 'Item 23' },
  { id: 24, value: 'Item 24' },
  { id: 25, value: 'Item 25' },
  { id: 26, value: 'Item 26' },
  { id: 27, value: 'Item 27' },
  { id: 28, value: 'Item 28' },
  { id: 29, value: 'Item 29' },
  { id: 30, value: 'Item 30' },
]);
</script>

<template>
  <div>
    <Header></Header>
    <SelectLang />
    <div class="hell">{{ $t('setting') }}</div>
    <div class="test">{{ $t('name') }}</div>

    <VirtualScroll />
    <VirtualList :list-data="listData" :item-size="50" />

    <!-- custom popup -->
    <button @click="openDialog">Open Dialog</button>
    <Popup v-model="dialogVisible" title="Custom Dialog Title">
      <p>This is some text content for the dialog.</p>
      <template #footer>
        <button @click="dialogVisible = false">Cancel</button>
        <button type="primary" @click="confirmDialog">Confirm</button>
      </template>
    </Popup>

    <ImageComponent
        :src="imageSrc"
        :alt="imageAlt"
        :lazyLoad="true"
        :placeholder="loadingText"
    />
  </div>
</template>

<style scoped lang="scss">
// @import './styles/dc.scss';
</style>
