<!-- <script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { languages } from './local'; // 假设这里包含了语言列表的数据

export default defineComponent({
  name: 'SelectLang',
  props: {
    setLanguage: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const selectedLocale = ref({ code: 'zh-CN', cnName: '简体中文' }); // 默认选中的语言的 code 和 cnName
    const activeIndex = ref(-1); // 用于追踪激活的<li>的索引
    const localeMenuButtonRef = ref<HTMLElement | null>(null); // 创建一个ref来引用DOM元素

    // 初始化 selectedLocale 为 "简体中文"
    const defaultLanguage = languages.find(lang => lang.cnName === '中文(普通话、简体)');
    if (defaultLanguage) {
      selectedLocale.value = { ...defaultLanguage };
    }

    const changeLocale = async (language: typeof languages[number], index: number) => {
      selectedLocale.value = { ...language };
      activeIndex.value = index;
      updateLocaleButton();
      updateActiveClass();
      // 调用 handleLanguageChange方法
      await props.setLanguage(language.code);
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
      // 修改HTML标签的lang和data-local属性
      // 设置全局的 lang 属性和 data-local 属性
      document.documentElement.lang = selectedLocale.value.code;
      document.documentElement.dataset.local = selectedLocale.value.cnName;

      // 监听 selectedLocale 的变化，以便在变化时更新全局属性
      watch(selectedLocale, (newVal) => {
        document.documentElement.lang = newVal.code;
        document.documentElement.dataset.local = newVal.cnName;
      });
    });

    return {
      selectedLocale,
      activeIndex,
      languages,
      changeLocale,
      updateLocaleButton,
      updateActiveClass,
      // handleLanguageChange,
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
</style> -->

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
const changeLocale = (language: typeof languages[number]) => {
  if (store.language === language.code) return;
  proxy.$i18n.locale = language.code;  // 设置vue-i18n的语言
  store.changeLang(language.code); // 更新pinia store的语言状态
  // 调用Message组件的show方法显示消息
  if(messageComponent.value){
    messageComponent.value.show(`${language.code} 切换成功！`);
  }
  // messageComponent.value.show(`${language.code === 'en' ? '英文' : '中文'}切换成功！`);
};
</script>

<style scoped lang="scss">
.lang-warp{
  margin: 0 20px;
}
</style>

<style scoped lang="scss">
.lang-warp{
  margin: 0 20px;
}
</style>
