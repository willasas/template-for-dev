<template>
  <div id="locale" class="bg-color dropdown" data-component="Locale">
    <a ref="localeMenuButton" id="localeMenuButton" role="menuitem" tabindex="0" aria-haspopup="true" aria-controls="localeMenuList" aria-label="Localization" aria-expanded="false" class="locale-icon focusable text-color-hover" data-component="LocaleIcon" :data-locale="selectedLocale.code" :title="selectedLocale.cnName">
      <i class="eg-header-icon-locale"></i>
    </a>
    <ul id="localeMenuList" class="locale-list bg-color ul-left" role="menu" aria-labelledby="localeMenuButton">
      <li role="none" class="" v-for="(language, index) in languages" :key="language.code" :data-lang="language.code" :class="{ active: selectedLocale.code === language.code }">
        <a :href="`/${language.code}/?lang=${language.code}`" role="menuitem" :data-index="index" @click.prevent="changeLocale(language)">
          <span>{{ language.cnName }}</span>
        </a>
      </li>
    </ul>
  </div>

  <Message ref="messageComponent" />
</template>

<script setup lang="ts">
import Message from '../Message/Message.vue';
import { languages } from './local';
import { useLangStore } from '../../stores/index'
import { computed , ref, getCurrentInstance } from 'vue'

const messageComponent = ref(null);
const store = useLangStore()
const { proxy } = getCurrentInstance() as any

// 计算属性，确定当前选中的语言
const selectedLocale = computed(() => {
  return languages.find(lang => lang.code === store.language) || languages[0];
});

// 切换语言的方法
const changeLocale = (language) => {
  if (store.language === language.code) return;
  
  // 更新 i18n 语言
  proxy.$i18n.locale = language.code;
  
  // 更新 Pinia store 语言状态
  store.changeLang(language.code);
  
  // 更新页面或特定元素的 lang 属性
  document.documentElement.lang = language.code;
  
  // 如果你想更新 data-locale 属性，可以这样做：
  document.documentElement.setAttribute('data-locale', language.cnName);
  
  // 显示切换成功的消息
  if (messageComponent.value) {
    messageComponent.value.show(`${language.cnName} 切换成功！`);
  }
};
</script>

<style scoped lang="scss">
@import "./selectlang.scss";
.lang-warp{
  margin: 0 20px;
}
</style>
