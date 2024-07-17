<script setup lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header/Header.vue'
import SelectLang from './components/SelectLang/SelectLang.vue'

</script>

<template>
  <div>
    <Header></Header>
    <SelectLang />
    <div class="hell">{{ $t('tabBars.setting') }}</div>
    <div class="test">{{ $t('name') }}</div>
    <!-- <LangSelect /> -->
  </div>
  <HelloWorld msg="Farm + Vue" />

  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #9F1A8Faa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
