<script lang="ts">
import { defineComponent } from 'vue';
import { languages } from './local'

export default defineComponent({
  data() {
    return {
      selectedLocale: '简体中文', // 默认选中的语言
      activeIndex: -1, // 用于追踪激活的li的索引
      languages: languages
    }
  },
  mounted() {
    // 初始化时设置默认的locale和activeIndex
    this.activeIndex = this.languages.findIndex(lang => lang.cnName === this.selectedLocale);
    this.updateLocaleButton(this.selectedLocale);
  },
  methods: {
    changeLocale(language, index) {
      this.selectedLocale = language.cnName;
      this.activeIndex = index; // 更新activeIndex
      this.updateLocaleButton(language.cnName);
    },
    updateLocaleButton(localeName) {
      // 使用$refs获取按钮元素并更新其属性
      const button = this.$refs.localeMenuButton;
      if (button) {
        button.setAttribute('data-locale', this.selectedLocale);
        button.setAttribute('title', this.selectedLocale);
      }
    },
  },
});
</script>

<template>
  <!-- <div id="locale" class="bg-color dropdown" data-component="Locale">
    <a ref="localeMenuButton" id="localeMenuButton" role="menuitem" tabindex="0" aria-haspopup="true" aria-controls="localeMenuList" aria-label="Localization" aria-expanded="false" :data-locale="selectedLocale" :title="selectedLocale" class="locale-icon focusable text-color-hover" data-component="LocaleIcon">
      <i class="eg-header-icon-locale"></i>
    </a>
    <ul id="localeMenuList" class="locale-list bg-color ul-left" role="menu" aria-labelledby="localeMenuButton">
      <li role="none" class="" v-for="language in languages" :key="language.code" :data-lang="language.code">
        <a :href="`/${language.code}/?lang=${language.code}`" role="menuitem" :data-index="language.codeIndex" @click="changeLocale(language)">
          <span>{{ language.cnName }}</span>
        </a>
      </li>
    </ul>
  </div> -->

  <div id="locale" class="bg-color dropdown" data-component="Locale">
    <a ref="localeMenuButton" id="localeMenuButton" role="menuitem" tabindex="0" aria-haspopup="true" aria-controls="localeMenuList" aria-label="Localization" aria-expanded="false" :data-locale="selectedLocale" :title="selectedLocale" class="locale-icon focusable text-color-hover" data-component="LocaleIcon">
      <i class="eg-header-icon-locale"></i>
    </a>
    <ul id="localeMenuList" class="locale-list bg-color ul-left" role="menu" aria-labelledby="localeMenuButton">
      <li role="none" class="" v-for="(language, index) in languages" :key="language.code" :data-lang="language.code">
        <a :href="`/${language.code}/?lang=${language.code}`" role="menuitem" :data-index="index" @click="changeLocale(language, index)">
          <span>{{ language.cnName }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
@import "./selectlang.scss"
</style>