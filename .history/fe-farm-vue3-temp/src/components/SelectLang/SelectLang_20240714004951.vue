<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, inject, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { languages } from './local'; // 假设这里包含了语言列表的数据

const { t } = useI18n();
const router = useRouter();
const selectedLocale = ref(languages[0].code); // 默认选中的语言

// 切换语言
const changeLanguage = async (langCode) => {
  await app.config.globalProperties.$i18n.setLocaleMessage(langCode, await loadLanguageMessages(langCode));
  app.config.globalProperties.$i18n.locale = langCode;
  localStorage.setItem('lang', langCode);
  router.push({ path: '/' }); // 重新加载页面或相应逻辑
};

watch(selectedLocale, (newLang) => {
  changeLanguage(newLang);
});
</script>

<template>
  <div id="locale" class="bg-color dropdown" data-component="Locale">
    <a ref="localeMenuButton" id="localeMenuButton" role="menuitem" tabindex="0" aria-haspopup="true" aria-controls="localeMenuList" aria-label="Localization" aria-expanded="false" class="locale-icon focusable text-color-hover" data-component="LocaleIcon" :data-locale="selectedLocale.code" :title="selectedLocale.cnName">
      <i class="eg-header-icon-locale"></i>
    </a>
    <ul id="localeMenuList" class="locale-list bg-color ul-left" role="menu" aria-labelledby="localeMenuButton">
      <li role="none" class="" v-for="(language, index) in languages" :key="language.code" :data-lang="language.code" :class="{ active: index === activeIndex }">
        <a :href="`/${language.code}/?lang=${language.code}`" role="menuitem" :data-index="index" @click.prevent="changeLocale(language, index)">
          <span>{{ language.cnName }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
@import "./selectlang.scss"
</style>