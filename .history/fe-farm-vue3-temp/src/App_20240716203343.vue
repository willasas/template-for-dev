<script setup lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header/Header.vue'
import SelectLang from './components/SelectLang/SelectLang.vue'

</script>

<template>
  <div class="app-main">
    <Header></Header>
    <SelectLang />
    <div class="hell">{{ $t('tabBars.setting') }}</div>
    <div class="test">{{ $t('name') }}</div>
  </div>
</template>

<style scoped>

</style>
