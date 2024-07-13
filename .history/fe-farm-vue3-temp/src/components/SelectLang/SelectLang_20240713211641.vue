<script lang="ts">
import { defineComponent } from 'vue';
import { languages } from './local'

export default defineComponent({
  data() {
    return {
      languages: languages
    }
  },
  // 移除了populateLanguageList方法，改用v-for渲染列表
});
</script>

<template>
  <div id="locale" class="bg-color dropdown" data-component="Locale">
    <a id="localeMenuButton" role="menuitem" tabindex="0" aria-haspopup="true" aria-controls="localeMenuList" aria-label="Localization" aria-expanded="false" data-locale="简体中文" title="简体中文" class="locale-icon focusable text-color-hover" data-component="LocaleIcon">
      <i class="eg-header-icon-locale"></i>
    </a>
    <ul id="localeMenuList" class="locale-list bg-color ul-left" role="menu" aria-labelledby="localeMenuButton">
      <!-- 使用v-for来动态渲染语言列表 -->
      <li role="none" class="" v-for="language in languages" :key="language.code" data-lang="language.code">
        <a :href="`/${language.code}/?lang=${language.code}`" role="menuitem" :data-index="language.codeIndex">
          <span>{{ language.cnName }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
@import "./selectlang.scss"
</style>