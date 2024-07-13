<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, inject, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { languages } from './local'; // 假设这里包含了语言列表的数据

const setLanguage = inject('setLanguage');

export default defineComponent({
  name: 'SelectLang',
  props: {
    setLanguage: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter(); // 使用 Vue Router
    const selectedLocale = ref(languages[0]); // 默认选中第一个语言
    const activeIndex = ref(0); // 默认第一个语言为激活状态
    const localeMenuButtonRef = ref<HTMLElement | null>(null); // 创建一个ref来引用DOM元素

    // 初始化 selectedLocale 为 "简体中文"
    const defaultLanguage = languages.find(lang => lang.cnName === '中文(普通话、简体)');
    if (defaultLanguage) {
      selectedLocale.value = { ...defaultLanguage };
    }

    const changeLocale = async (language) => {
      selectedLocale.value = language;
      activeIndex.value = languages.findIndex(l => l.code === language.code);
      updateLocaleButton();
      updateActiveClass();
      await props.setLanguage(language.code); // 调用传入的 setLanguage 方法
      // 如果使用 Vue Router，使用 router 进行导航
      router.push(`/${language.code}/?lang=${language.code}`);
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

    watch(selectedLocale, (newVal) => {
      // 可以在这里添加额外的逻辑，比如更新页面的 lang 属性
      // document.documentElement.lang = newVal.code;
      // 初始化时设置默认的locale和activeIndex
      activeIndex.value = languages.findIndex(lang => lang.cnName === selectedLocale.value.cnName);
      updateActiveClass();
      // 修改HTML标签的lang和data-local属性
      // 设置全局的 lang 属性和 data-local 属性
      document.documentElement.lang = selectedLocale.value.code;
      document.documentElement.dataset.local = selectedLocale.value.cnName;
      
      document.documentElement.lang = newVal.code;
      document.documentElement.dataset.local = newVal.cnName;
      
    });

    return {
      selectedLocale,
      activeIndex,
      languages,
      changeLocale,
      updateLocaleButton,
      updateActiveClass,
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