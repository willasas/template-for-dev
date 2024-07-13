<!-- <script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';
import { languages } from './local'; // 假设这里包含了语言列表的数据

export default defineComponent({
  name: 'SelectLang',
  setup() {
    function isElement(obj: any): obj is Element {
      return (
        typeof obj === 'object' &&
        obj !== null &&
        'nodeType' in obj &&
        obj.nodeType === 1 &&
        typeof obj.tagName === 'string'
      );
    }

    const button = document.querySelector('#localeMenuButton');

    const selectedLocale = ref('简体中文'); // 默认选中的语言
    const activeIndex = ref(-1); // 用于追踪激活的<li>的索引
    const localeMenuButtonRef = ref(null); // 创建一个ref来引用DOM元素

    const changeLocale = (language: { cnName: string; }, index: number) => {
      selectedLocale.value = language.cnName;
      activeIndex.value = index;
      // 可以在这里添加额外的逻辑，例如改变应用的语言环境
    };

    const updateLocaleButton = () => {
      // 使用ref获取按钮元素并更新其属性
      const button = localeMenuButtonRef.value;
      if (typeof button === 'object' && button !== null && isElement(button)) {
        button.setAttribute('data-locale', selectedLocale.value);
        button.setAttribute('title', selectedLocale.value);
      }
    };

    onBeforeMount(() => {
      // 确保在组件挂载前调用updateLocaleButton，以初始化按钮状态
      updateLocaleButton();
    });

    onMounted(() => {
      // 初始化时设置默认的locale和activeIndex
      activeIndex.value = languages.findIndex(lang => lang.cnName === selectedLocale.value);
    });

    return {
      selectedLocale,
      activeIndex,
      languages,
      changeLocale,
      updateLocaleButton,
      localeMenuButtonRef, // 提供给模板使用
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
</style> -->

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';
import { languages } from './local'; // 假设这里包含了语言列表的数据

export default defineComponent({
  name: 'SelectLang',
  setup() {
    const selectedLocale = ref({ code: '', cnName: '' }); // 默认选中的语言的 code 和 cnName
    const activeIndex = ref(-1); // 用于追踪激活的<li>的索引
    const localeMenuButtonRef = ref<HTMLElement | null>(null); // 创建一个ref来引用DOM元素

    // 初始化 selectedLocale 为 "简体中文"
    const defaultLanguage = languages.find(lang => lang.cnName === '中文(普通话、简体)');
    if (defaultLanguage) {
      selectedLocale.value = { ...defaultLanguage };
    }

    const changeLocale = (language: typeof languages[number], index: number) => {
      selectedLocale.value = { ...language };
      activeIndex.value = index;
      updateLocaleButton();
      updateActiveClass();
    };

    const updateLocaleButton = () => {
      // 使用ref获取按钮元素并更新其属性
      const button = localeMenuButtonRef.value;
      if (button) {
        button.dataset.locale = selectedLocale.value.code;
        button.title = selectedLocale.value.cnName;
      }
    };

    const updateActiveClass = () => {
      // 更新<li>的 active 类名
      const listItems = document.querySelectorAll('#localeMenuList li');
      listItems.forEach((item, index) => {
        item.classList.toggle('active', index === activeIndex.value);
      });
    };

    onBeforeMount(() => {
      // 确保在组件挂载前调用updateLocaleButton，以初始化按钮状态
      updateLocaleButton();
    });

    onMounted(() => {
      // 初始化时设置默认的locale和activeIndex
      activeIndex.value = languages.findIndex(lang => lang.cnName === selectedLocale.value.cnName);
      updateActiveClass();
    });

    return {
      selectedLocale,
      activeIndex,
      languages,
      changeLocale,
      updateLocaleButton,
      updateActiveClass,
      localeMenuButtonRef, // 提供给模板使用
    };
  },
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