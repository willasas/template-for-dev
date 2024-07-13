<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { languages } from './local'; // 假设这里包含了语言列表的数据

export default defineComponent({
  setup() {
    const selectedLocale = ref('简体中文'); // 默认选中的语言
    const activeIndex = ref(-1); // 用于追踪激活的<li>的索引

    const changeLocale = (language: { cnName: string; }, index: number) => {
      selectedLocale.value = language.cnName;
      activeIndex.value = index;
      // 可以在这里添加额外的逻辑，例如改变应用的语言环境
    };

    const updateLocaleButton = () => {
      // 如果需要更新按钮的样式或行为，可以在这里添加代码
    };

    onMounted(() => {
      // 初始化时设置默认的locale和activeIndex
      activeIndex.value = languages.findIndex(lang => lang.cnName === selectedLocale.value);
      updateLocaleButton();
    });

    return {
      selectedLocale,
      activeIndex,
      languages,
      changeLocale,
      updateLocaleButton,
    };
  },
});
</script>

<template>
  <div id="locale" class="bg-color dropdown" data-component="Locale">
    <a ref="localeMenuButton" id="localeMenuButton" role="menuitem" tabindex="0" aria-haspopup="true" aria-controls="localeMenuList" aria-label="Localization" aria-expanded="false" :data-locale="selectedLocale" :title="selectedLocale" class="locale-icon focusable text-color-hover" data-component="LocaleIcon">
      <i class="eg-header-icon-locale"></i>
    </a>
    <ul id="localeMenuList" class="locale-list bg-color ul-left" role="menu" aria-labelledby="localeMenuButton">
      <li role="none" class="" v-for="(language, index) in languages" :key="language.code" data-lang="language.code" :class="{ active: index === activeIndex }">
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