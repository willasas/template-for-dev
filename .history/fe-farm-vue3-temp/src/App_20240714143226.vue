<script setup lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header/Header.vue'
import SelectLang from './components/SelectLang/SelectLang.vue'
import { setupLanguage, setLanguage } from './i18n/index';

// App.vue 或相关组件
export default {
  name: 'App',
  mounted() {
    // 在组件挂载后调用setLanguage以确保Vue实例已完全初始化
    this.setLanguage('en');
  },
  methods: {
    async setLanguage(langCode: string) {
      if (this.$i18n) {
        await this.$i18n.global.setLocaleMessage(langCode);
        this.$i18n.global.locale.value = langCode;
        localStorage.setItem('LANGUAGE', langCode);
      }
    }
  }
}
</script>

<template>
  <Header></Header>
  <div>
    <a href="https://farmfe.org/" target="_blank">
      <img src="./assets/logo.png" class="logo" alt="Farm logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <SelectLang :set-language="setLanguage" />
    <!-- <div class="hell">{{ $t('greeting') }}</div> -->
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
